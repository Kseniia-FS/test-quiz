<?php

$recepient = "snabukraine@gmail.com";
$sitename = "Fasad master";

$name = trim($_POST["name"]);
$phone = trim($POST["телефон"]);

$pagetitle = `Order \ "$sitename\"`;
mail($recepient, $message, `Content-type: text/p;ain; charset=\"utf-8\"\n From: $recepient`);