<?php
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type, Authorization");
// header("Content-Type: application/json");

// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

// require 'vendor/autoload.php';

// // Initialize response array
// $response = ["success" => false, "message" => ""];

// // Check request method
// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     $name = trim($_POST['name'] ?? '');
//     $email = trim($_POST['email'] ?? '');
//     $phone = trim($_POST['phone'] ?? '');
//     $message = trim($_POST['message'] ?? '');

//     // Ensure all fields are filled
//     if (empty($name) || empty($email) || empty($phone) || empty($message)) {
//         $response["message"] = "All fields are required.";
//         echo json_encode($response);
//         exit;
//     }

//     $mail = new PHPMailer(true);

//     try {
//         // SMTP settings
//         $mail->isSMTP();
//         $mail->Host = 'smtp.gmail.com';
//         $mail->SMTPAuth = true;
//         $mail->Username = 'careersolutionsspvtltd@gmail.com';
//         $mail->Password = 'vneh wsxv qlbq wsrv'; // Replace with App Password
//         $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
//         $mail->Port = 587;

//         // Email content
//         $mail->setFrom('careersolutionsspvtltd@gmail.com', 'Career Solutions');
//         $mail->addAddress('hr@careersolutionss.com');
//         $mail->isHTML(true);
//         $mail->Subject = 'New Inquiry from Career Solutions';
//         $mail->Body = "Name: $name<br>Email: $email<br>Phone: $phone<br>Message: $message";

//         // Send email
//         $mail->send();
//         $response["success"] = true;
//         $response["message"] = "Your enquiry has been submitted successfully!";
//     } catch (Exception $e) {
//         $response["message"] = "Message could not be sent. Error: " . $mail->ErrorInfo;
//     }
// }

// // Ensure no additional output and return JSON response
// echo json_encode($response);
// exit;
// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
 
// Include PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
 
    $mail = new PHPMailer(true);
 
    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'careersolutionsspvtltd@gmail.com';
        $mail->Password = 'vneh wsxv qlbq wsrv';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
 
        // Email settings
        $mail->setFrom('careersolutionsspvtltd@gmail.com', 'Career Solutions');
        $mail->addAddress('hr@careersolutionss.com');
        $mail->isHTML(true);
        $mail->Subject = 'Inquiry from ' . $name;
        $mail->Body = "Name: $name<br>Email: $email<br>Phone: $phone<br>Message: $message";
 
        $mail->send();
        echo 'Form submitted successfully!';
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }
}
?>
