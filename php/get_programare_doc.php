<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

include "./connectToDB.php";

$name= $_POST['name'];

$sql = "SELECT NUME_SI_PRENUME, DATA_SI_ORA, PROCEDURA, DOCTOR FROM PROGRAMARE_CLINICA WHERE DOCTOR='$name'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
// output data of each row
$arr = array();
    while($row = $result->fetch_assoc()) {
        array_push($arr, $row);
    }
    echo json_encode($arr);
} else {
    echo json_encode([]);
}

$conn->close();

?>
