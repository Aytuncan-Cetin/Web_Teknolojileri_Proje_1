<body>
<?php

$adsoyad = $_POST['adsoyad'];
$mail = $_POST['mail'];
$mesaj = $_POST['mesaj'];

?>

<table border="1">
  <tr>
    <td colspan="2">Formdan Gelen Bilgiler</td>
  </tr>
  <tr>
    <td>Ad Soyad:</td>
    <td><?php echo $adsoyad; ?></td>
  </tr>
  <tr>
    <td>Mail Adresi:</td>
    <td><?php echo $mail; ?></td>
  </tr>
  <tr>
    <td>Mesaj:</td>
    <td><?php echo $mesaj; ?></td>
  </tr>
</table>
<A HREF="../iletisim.html">Geri dön</A>
</body>
