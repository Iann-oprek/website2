<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  $to = "rcusrom@gmail.com"; // Ganti dengan email Anda
  $subject = "Pesan Baru dari Website";
  $body = "Nama: $name\nEmail: $email\nPesan: $message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Pesan berhasil dikirim!";
  } else {
    echo "Gagal mengirim pesan.";
  }
}
?>