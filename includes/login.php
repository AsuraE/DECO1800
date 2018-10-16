<?php
include_once 'db_connect.php';
include_once 'functions.php';
 
secure_session_start(); // Our custom secure way of starting a PHP session.
 
if (isset($_POST['email'], $_POST['p'])) {
    $email = $_POST['email'];
    $password = $_POST['p'];

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