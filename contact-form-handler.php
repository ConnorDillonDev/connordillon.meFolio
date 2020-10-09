<?php
    $name = $_POST['fname' + 'lname'];
    $visitor_email = $_POST['email'];
    $message = $_POST['subject'];

    $email_from = "connordillon96@gmail.com";
    $email_subject = "New forum submission";
    $email_body = "User name :  $name. \n".
                        "User Email: $visitor_email.\n".
                               "User Message: $message. \n";

    $to = "connordillon96@gmail.com";

    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);
    headers("Location: contact.html");

?>