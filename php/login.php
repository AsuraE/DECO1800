<?php
include_once 'includes/db_connect.php';
include_once 'includes/functions.php';
 
secure_session_start(); // Our custom secure way of starting a PHP session.
 
if (isset($_POST['email'], $_POST['password'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];
 
    if (login($email, $password, $mysqli) == true) {
        header('Location: ../protected_page.php');
    } else {
        header('Location: ../index.php?error=1');
    }
} else {
    // The correct POST variables were not sent to this page. 
    echo 'Invalid Request';
}
?>