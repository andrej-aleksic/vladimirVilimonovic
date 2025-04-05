<?php
// Initial success flag
$success = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "info@vladimirvilimonovic.com";
    $subject = "New Message from Contact Form";
    $message_content = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $message_content, $headers)) {
        $success = true; // Message sent successfully
    }
}
?>
