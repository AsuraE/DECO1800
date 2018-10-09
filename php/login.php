<?php

function login($email, $password) {
    $hash = loadHashByUsername($email);
    if (password_verify($password, $hash)) {
        // Logged in
    } else {
        // Not logged in
    }
}