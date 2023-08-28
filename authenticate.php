<?php

// Define the passwords for divs
$divPasswords = array(
    "renderToolsInner" => "openTheDoor"
);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $userPassword = $_POST['password'];
    $divKey = $_POST['div'];
    
    if (array_key_exists($divKey, $divPasswords) && $userPassword === $divPasswords[$divKey]) {
        echo 'authenticated';
    } else {
        echo 'unauthenticated';
    }
} else {
    header('HTTP/1.1 400 Bad Request');
    echo 'Bad Request';
}
?>
