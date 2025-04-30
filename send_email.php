<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Email details
  $to = "dhanavardhini02@gmail.com";  // Your email address
  $subject = "New Message from Contact Form";
  $body = "You have received a new message from your website contact form.\n\n".
          "Name: $name\n".
          "Email: $email\n\n".
          "Message:\n$message";

  // Headers
  $headers = "From: $email";

  // Send email
  if (mail($to, $subject, $body, $headers)) {
    echo "Thank you for your message!";
  } else {
    echo "Sorry, there was an error. Please try again later.";
  }
}
?>
