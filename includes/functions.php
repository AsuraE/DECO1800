<?php
include_once 'psl-config.php';

/**
  *  Starts a secure session. Prevents access to the session_id cookie via javascript as a means to prevent XSS attacks.
  *  Also regenerates the session_id on every page load to prevent session hijacking
  *  Note: When $secure is set to SECURE, HTTPS is required.
  */ 
function secure_session_start() {
    $session_name = 'sec_session_id';
    $secure = SECURE;
    // Stop JavaScript from being able to access the session id.
    $httponly = true;
    // Forces sessions to only use cookies.
    if (ini_set('session.use_only_cookies', 1) === FALSE) {
        header("Location: ../error.php?err=Could not initiate a safe session (ini_set)");
        exit();
    }
    // Gets current cookies params.
    $cookieParams = session_get_cookie_params();
    session_set_cookie_params($cookieParams["lifetime"], $cookieParams["path"], $cookieParams["domain"], $secure, $httponly);
    // Sets the session name to the one set above.
    session_name($session_name);
    session_start();            // Start the PHP session 
    session_regenerate_id();    // Regenerate the session and delete the old one. 
}

/** 
  * Attempts to login to website. Will record unsuccessful login attempts.
  * Returns TRUE on success, FALSE otherwise.
  */
function login($email, $password, $mysqli) 
{
    if ($stmt = $mysqli->prepare("SELECT id, username, password FROM users WHERE email = ? LIMIT 1")) {
        $stmt->bind_param('s', $email);  
        $stmt->execute();    
        $stmt->store_result();
        $stmt->bind_result($user_id, $username, $db_password);
        $stmt->fetch();

        // num_rows will either return 1 if there is a user or 0 if not
        if ($stmt->num_rows == 1) {
            if (account_locked($user_id, $mysqli) == true) {
                return false;
            } else {
                if (password_verify($password, $db_password)) {
                    // Get the user-agent string of the user.
                    $user_browser = $_SERVER['HTTP_USER_AGENT'];
                    // XSS protection as we might print this value
                    $user_id = preg_replace("/[^0-9]+/", "", $user_id);
                    $_SESSION['user_id'] = $user_id;
                    // XSS protection as we might print this value
                    $username = preg_replace("/[^a-zA-Z0-9_\-]+/", "", $username);
                    $_SESSION['username'] = $username;
                    $_SESSION['login_string'] = hash('sha512', $db_password . $user_browser);
                    return true;
                } else {
                    // Password is wrong, record the attempt
                    $time = time();
                    $login_attempt = $mysqli->prepare("UPDATE users SET 'time' = ?, 'attempts' = 'attempts' + 1 WHERE 'email' = ?");
                    $login_attempt->bind_parm('ss', $time, $email);
                    $login_attempt->execute();
                    return false;
                }
            }
        } else {
            return false;
        }
    }
}

/**
  * Check if account is locked due to too many unsuccessful attempts.
  * Returns TRUE if account is locked, false otherwise.
  * Database handles resetting the attempts via an EVENT.
  */
function account_locked($user_id, $mysqli) 
{
 
    if ($stmt = $mysqli->prepare("SELECT time, attempts FROM users WHERE user_id = ?")) {
        $stmt->bind_param('i', $user_id);
        $stmt->execute();
        $stmt->store_result();
        $stmt->bind_results($last_attempt_time, $attempts);
 
        if ($attempts > MAXATTEMPTS) {
            return true;
        } else {
            return false;
        }
    }
}

/**
  * Check to see if the user is already logged in.
  * Returns TRUE if user is logged in, false otherwise.
  */
function login_check($mysqli) 
{
    // Check if all session variables are set 
    if (isset($_SESSION['user_id'], $_SESSION['username'], $_SESSION['login_string'])) {
        $user_id = $_SESSION['user_id'];
        $login_string = $_SESSION['login_string'];
        $username = $_SESSION['username'];
        // Get the user-agent string of the user.
        $user_browser = $_SERVER['HTTP_USER_AGENT'];

        if ($stmt = $mysqli->prepare("SELECT password FROM users WHERE id = ? LIMIT 1")) {
            $stmt->bind_param('i', $user_id);
            $stmt->execute();
            $stmt->store_result();
 
            if ($stmt->num_rows == 1) {
                $stmt->bind_result($password);
                $stmt->fetch();
                $login_check = hash('sha512', $password . $user_browser);
 
                if (hash_equals($login_check, $login_string) ){
                    return true;
                }
            }
        }
    }
    return false;
}

/**
  * Sanitises the output from PHP_SELF in order to prevent a XSS attack.
  * Returns the sanitised URL, which may be ''.
  */
function esc_url($url) 
{
    if ('' == $url) {
        return $url;
    }
 
    $url = preg_replace('|[^a-z0-9-~+_.?#=!&;,/:%@$\|*\'()\\x80-\\xff]|i', '', $url);
    $strip = array('%0d', '%0a', '%0D', '%0A');
    $url = (string) $url;
    $count = 1;

    while ($count) {
        $url = str_replace($strip, '', $url, $count);
    }
 
    $url = str_replace(';//', '://', $url);
    $url = htmlentities($url);
    $url = str_replace('&amp;', '&#038;', $url);
    $url = str_replace("'", '&#039;', $url);
 
    if ($url[0] !== '/') {
        return '';
    } else {
        return $url;
    }
}

?>