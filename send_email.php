<?php
// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Specify the email address of the recipient
$email = "cantincontact@sitefacile.net";

// Send the email
mail($email, 'Contact Form Submission', $body);

// Display a success message
echo "Your message has been sent successfully!";

?>