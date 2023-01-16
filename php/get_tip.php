<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

include "./connectToDB.php";

$emailLog= $_POST['emailLog'];

$sql = "SELECT TIP FROM SIGN_IN WHERE ADRESA_EMAIL='$emailLog'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
// output data of each row
while($row = $result->fetch_assoc()) {
echo json_encode(array($row["TIP"]));
}
} else {

}


?>
