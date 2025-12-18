<?php
$conn = new mysqli("localhost", "root", "", "vida_saudavel");

if ($conn->connect_error) {
    die("erro");
}

$nome = $_POST['nome'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];
$avaliacao = $_POST['avaliacao'];

$sql = "INSERT INTO feedbacks (nome, email, mensagem, avaliacao) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssi", $nome, $email, $mensagem, $avaliacao);

if ($stmt->execute()) {
    echo "ok";
} else {
    echo "erro";
}
?>
