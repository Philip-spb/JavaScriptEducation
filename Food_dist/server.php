<?php
// Данная строка необходима для преобразования полученного json 
$_POST = json_decode(file_get_contents("php://input"), true);
echo var_dump($_POST);
