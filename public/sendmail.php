<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';

    $email = new PHPMailer(true);
    $email->CharSet = 'UTF-8';
    $email->setLanguage('uk', 'phpmailer/language/');
    $email->IsHTML(true);

    $email->setForm('alexthukynov@gmail.com', 'shuron');
    $email->addAdress('tsykunov.oleksandr@gmail.com');
    $email->Subject = 'Заявка № $_POST['id']';

    $body = '<h3>Заявка на ремонт</h3>';
    $body = '<p>Номер заявки: $_POST['id']</p>';
    $body = '<p>Клієнт: $_POST['userName']</p>';
    $body = '<p>Номер телефона: $_POST['phone']</p>';
    $body = '<p>Локація: $_POST['location']</p>';
    $body = '<p>Проблема:<br>$_POST['description']</p>';

    $email->Body = $body;
    $message = 'Done';
    $responce = ['message' => $message];x
    header('Content-type: application/json');
    echo json_endcode($responce);
?>