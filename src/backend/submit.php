<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$response = ["success" => false, "message" => ""];

// Only proceed on POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Parse JSON input
    $data = json_decode(file_get_contents("php://input"), true);

    $name = trim($data['name'] ?? '');
    $email = trim($data['email'] ?? '');
    $phone = trim($data['phone'] ?? '');
    $message = trim($data['message'] ?? '');

    // Validate
    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        $response["message"] = "All fields are required.";
        echo json_encode($response);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'careersolutionsspvtltd@gmail.com';
        $mail->Password = 'vneh wsxv qlbq wsrv'; // App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom('careersolutionsspvtltd@gmail.com', 'Career Solutions');
        $mail->addAddress('hr@careersolutionss.com'); // Change if needed

        $mail->isHTML(true);
        $mail->Subject = 'New Inquiry from Career Solutions';
        $mail->Body = "
            <strong>Name:</strong> $name<br>
            <strong>Email:</strong> $email<br>
            <strong>Phone:</strong> $phone<br>
            <strong>Message:</strong><br>$message
        ";

        $mail->send();
        $response["success"] = true;
        $response["message"] = "Your enquiry has been submitted successfully!";
    } catch (Exception $e) {
        $response["message"] = "Message could not be sent. Error: " . $mail->ErrorInfo;
    }
}

echo json_encode($response);
exit;
