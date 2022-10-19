<?php

$usuario = $_POST['usuario'];
$senha = $_POST['senha'];

$html = <<<HTML
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>Bem-Vindo!!!</title>        
    </head>
    <body>
        <h1>Bem-Vindo, $usuario</h1>
        <h3>Você realizou o login com sucesso com a sua senha: $senha</h3>        
    </body>
</html>
HTML;

echo($html);

?>
