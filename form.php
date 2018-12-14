<?php
if(isset($_POST['submit'])){
    $name=$_POST['name'];
    $mailFrom=$_POST['email'];
    $message=$_POST['message'];
    $mailTo="sidhu.jaisdeep@gmail.com";
    $header="From: ".$mailFrom;
    $text="Hi!".$name."send you an email.";
    mail($mailTo,$text,$header);
    header("Location:./index.html?mailsend");
    die("<h4 class='success'> Success! Your message has been sent. Thank You.</h4>");
    ?>
    <?php
}
?>