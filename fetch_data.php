<?php
require "config/db_config.php";

// geting datafrom the database


$query_show = "SELECT * FROM employee LIMIT 12";

$res = mysqli_query($conn, $query_show);

//sorting in array
$data = array();

while ($row = mysqli_fetch_assoc($res)) {
   $data[] = $row;
}

if (isset($_GET['next'])) {
   $token = $_GET['next'];

   $query_show = "SELECT * FROM employee where e_id >$token LIMIT 12";

   $res = mysqli_query($conn, $query_show);

   //sorting in array
   $data = array();

   while ($row = mysqli_fetch_assoc($res)) {
      $data[] = $row;
   }
} else if (isset($_GET['search'])) {
   
   $search = $_GET['search'];
   $query_search = "SELECT * FROM employee WHERE name LIKE '$search%' ORDER BY e_id";
   $res = mysqli_query($conn, $query_search);
   
   //sorting in array
   $data = array();
   
   while ($row = mysqli_fetch_assoc($res)) {
      $data[] = $row;
   }

} else {

   $query_show = "SELECT * FROM employee LIMIT 12";

   $res = mysqli_query($conn, $query_show);

   //sorting in array
   $data = array();

   while ($row = mysqli_fetch_assoc($res)) {
      $data[] = $row;
   }
}

//returning the respone in json format

echo json_encode($data);
