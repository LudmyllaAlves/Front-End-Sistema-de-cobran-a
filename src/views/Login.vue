<template>
    <div class="header">
        <header>
            <nav class="container">
                    <a id="programa"><b>Sistema de Cobrança</b></a>
                </nav>
        </header>
    </div>
    <div class="login">
        <main>
            <div class="cadastro">
                <form action="http://localhost/validandosc/php/controller/login.php" method="POST">
                    <fieldset>
                        <label for="nome">Digite seu nome:</label><br>
                        <input type="text" name="nome" required><br>
                        <label for="senha">Digite sua senha:</label><br>
                        <input type="password" name="senha" required><br>
                        <button type="submit">Login</button>
                    </fieldset>
                </form>
            </div>
        </main>
        
    </div>
</template>

<script>


export default{
    name: 'Login',
}

</script>
