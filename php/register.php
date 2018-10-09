<?php

    // define variables and set to empty values
    $name = $email = $password = $password_repeat = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $username = test_input($_POST["username"]);
      $email = test_input($_POST["email"]);
      $password = test_input($_POST["password"]);
      $password_repeat = test_input($_POST["password-repeat"]);
    }

    if ($password == $password_repeat) {
        register($email, $username, $password);
    } else {
        echo "Passwords do not match.";
    }

    function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }

    function register($email, $username, $password) {
        $hash = password_hash($password, PASSWORD_BCRYPT);
        db_save($email, $hash, $username);
    }

    function db_save($email, $hash, $username) {
        $servername = "localhost";
        $user = "root";
        $password = "";
        $dbname = "dreamtime";

        // Create connection
        $conn = new mysqli($servername, $user, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            echo "Failure";
            die("Connection failed: " . $conn->connect_error);
        } 

        $stmt = $conn->prepare("INSERT INTO users (email, hash, username) VALUES (?, ?, ?)");
        $stmt->bind_param('sss', $email, $username, $hash);
        $stmt->execute();

        echo "Registration Successful";

        $stmt->close();
        $conn->close();

    }

?>