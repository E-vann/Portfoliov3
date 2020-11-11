<!DOCTYPE html>
<html lang="en">
<?php 

$email=$_POST['email'];
$nom=$_POST['nom'];
$prenom=$_POST['prenom'];
?>

<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>

<body>
    <?php $headers = 'From : '.$email."\r\n".'To : lebiavantevann@gmail.com \r\n';
    $message= $_POST['message']; ?>
</body>
<?php
mail('lebiavantevann@gmail.com',$prenom,$nom,$message,$headers);
    header('Location: http://perso.univ-lemans.fr/~i192121/Portfoliov2');
?>

</html>
