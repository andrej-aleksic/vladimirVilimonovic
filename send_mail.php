<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "info@vladimirvilimonovic.com";
    $subject = "New Contact Form Submission";

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo "Message sent successfully.";
    } else {
        http_response_code(500);
        echo "Failed to send message.";
    }
} else {
    http_response_code(403);
    echo "Invalid request.";
}
?>
