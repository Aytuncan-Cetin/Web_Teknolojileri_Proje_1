<?

$username = $_POST['kullaniciAdi'];
$password = $_POST['sifre'];

if (isset($_POST['giris']) && !empty($username) && !empty($password))
{


	if ($username == "b211210308@sakarya.edu.tr" && $password == "b211210308") {

		header("refresh:0.5;url=../hakkimda.html");
		echo '<script> alert(" GİRİŞ BAŞARILI"); </script>';
	} else {
		header("refresh:0.5;url=../index.html");
		echo '<script> alert(" GİRİŞ BAŞARISIZ "); </script>';
	}
}
?>