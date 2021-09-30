<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->id)
    isset($data->first_name)
    && isset($data->last_name)
    && isset($data->grade)
    && isset($data->birth_date)
    && isset($data->gender)
    && isset($data->email)
    && isset($data->phone)
    && isset($data->address)
    && isset($data->fileList)
    && is_numeric($data->id)
    && !empty(trim($data->first_name))
    && !empty(trim($data->last_name))
    && !empty(trim($data->grade))
    && !empty(trim($data->birth_date))
    && !empty(trim($data->gender))
    && !empty(trim($data->email))
    && !empty(trim($data->phone))
    && !empty(trim($data->address))
    && !empty(trim($data->fileList))
) {
    // $username = mysqli_real_escape_string($db_conn, trim($data->user_name));
    // $useremail = mysqli_real_escape_string($db_conn, trim($data->user_email));
    $firstname = mysqli_real_escape_string($db_conn, trim($data->first_name));
    $lastname = mysqli_real_escape_string($db_conn, trim($data->last_name));
    $Grade = mysqli_real_escape_string($db_conn, trim($data->grade));
    $birth = mysqli_real_escape_string($db_conn, trim($data->birth_date));
    $Gender = mysqli_real_escape_string($db_conn, trim($data->gender));
    $Email = mysqli_real_escape_string($db_conn, trim($data->email));
    $Phone = mysqli_real_escape_string($db_conn, trim($data->phone));
    $Address = mysqli_real_escape_string($db_conn, trim($data->address));
    $Image = mysqli_real_escape_string($db_conn, trim($data->fileList));

    if (filter_var($Email, FILTER_VALIDATE_EMAIL)) {
        $updateUser = mysqli_query($db_conn, "UPDATE `student_detail` SET `first_name`='$firstname', `last_name`='$lastname',
        `grade`='$Grade', `date_of_birth`='$birth',`gender`='$Gender', `email`='$Email',`phone`='$Phone', `address`='$Address',`image`='$Image'
        WHERE `id`='$data->id'");
        if ($updateUser) {
            echo json_encode(["success" => 1, "msg" => "User Updated."]);
        } else {
            echo json_encode(["success" => 0, "msg" => "User Not Updated!"]);
        }
    } else {
        echo json_encode(["success" => 0, "msg" => "Invalid Email Address!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}?>