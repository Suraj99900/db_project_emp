<?php

// for localserver database
$server = "localhost";
$database = "emp";
$user = "root";
$password = "";



$conn = new mysqli($server,$user,$password,$database);

if($conn->connect_error){
    echo "error";
}