<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->first_name)
    && isset($data->last_name)
    && isset($data->grade)
    && isset($data->birth_date)
    && isset($data->gender)
    && isset($data->email)
    && isset($data->phone)
    && isset($data->address)
    && isset($data->fileList)
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

        $insertUser = mysqli_query($db_conn, "INSERT INTO `student_detail`(`first_name`,`last_name`,`grade`,`date_of_birth`,`gender`,`email`,`phone`,`address`,`image`) 
        VALUES('$firstname','$lastname','$Grade','$birth','$Gender','$Email','$Phone','$Address','$Image')");
       
       if ($insertUser) {
            $last_id = mysqli_insert_id($db_conn);
            echo json_encode(["success" => 1, "msg" => "User Inserted.", "id" => $last_id]);
        } else {
            echo json_encode(["success" => 0, "msg" => "User Not Inserted!"]);
        }
    } else {
        echo json_encode(["success" => 0, "msg" => "Invalid Email Address!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}?>