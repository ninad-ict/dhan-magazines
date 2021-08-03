<?php
session_start();

$database = new PDO("mysql:host=localhost; dbname=DPS", 'root', 'root');

$query = $database->prepare("SELECT id, password FROM admin WHERE id = :i;");

$query-> execute(array(
    ':i'=>$_POST['uname'],
));

$row = $query->fetch(PDO::FETCH_ASSOC);

?>
<?php if (!$row){ ?>
    <h1>Wrong User id <a href="upload.php">click here</a> try again.</h1>
<?php }else if ($row['password']==$_POST['pass']){
    $_SESSION['login'] = TRUE;
    header('Location: upload.php');
}
?>

