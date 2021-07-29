<?php
    $message="";
    $toEmail = "mdarju240@gmail.com";
    $mailHeaders = "From: " . $_POST["InputName"] . "<". $_POST["InputEmail"] .">\r\n";
    if(mail($toEmail, $_POST["InputSubject"], $_POST["InputMessage"], $mailHeaders)) {
        $message=  "<p class='success'>Mail Sent.</p>";
    } else {
        $message=  "<p class='Error'>Problem in Sending Mail.</p>";
    }
    // Encoding array in JSON format
echo json_encode($message);
?>