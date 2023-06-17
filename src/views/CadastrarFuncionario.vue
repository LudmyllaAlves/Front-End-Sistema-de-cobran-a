<template>
    <div>
        <Menu></Menu>
        <main>
            <div class="cadastro">
                <h1>Cadastrar</h1> 
                <form action="http://localhost/validandosc/php/controller/cadastrarfuncionario.php" method="POST">
                    <fieldset>
                        <label for="nome" class="labelInput">Digite o nome:</label><br>
                        <input type="text"  id="nome" name="nome"  class="user" required><br>
                        <label for="senha" class="labelInput">Digite a senha:</label><br>
                        <input type="password"  id="senha" name="senha"  class="user" required><br>
                        <label for="tipofuncionario" class="labelInput"> Defina o tipo do Funcionario:</label> <br>
                        <select name="tipofuncionario" id="tipofuncionario" >
                            <option disabled value="select" >Selecione o tipo de Funcionario</option>
                            <option value="cobrador">Cobrador</option>
                            <option value="administrador">administrador</option>
                        </select> <br>
                        <button type="submit" name="cadastrar" >cadastrar</button>
                    </fieldset>
                </form>
        </div>
        </main>
    </div>
</template>
<script>
import Menu from '@/components/Menu.vue';

export default{
    name:'CadastrarFuncionario',
    components:{
        Menu,
    },
    }
</script>


