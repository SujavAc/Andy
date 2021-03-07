<?php
include './config.php';
// Check connection
$status = $statusMsg = '';
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);

} else{
    
    $insert =$conn->query("INSERT INTO `courseenquiry` (FirstName, LastName, Email, PhoneNumber, CountryOfPassport, Question, Message, Date) 
    VALUES ('".$_POST['firstname']."','".$_POST['lastname']."','".$_POST['email']."','".$_POST['number']."','".$_POST['passport']."','".$_POST['question']."','".$_POST['message']."',NOW())");
    if($insert){
        $statusMsg = "Your enquiry is successfully delivered"; 
    }else{
        $statusMsg = "Something Error, please try again.";
    }
}
echo $statusMsg;
?>