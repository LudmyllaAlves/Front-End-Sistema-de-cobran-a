<template>
    <main>
        <div class="cadastro">
            <form action="http://localhost/validandosc/php/controller/excluircobranca.php" method="POST">
                <div class="fieldset">
                    <fieldset>
                        <label>Id Cobrança:</label>
                        <label v-for="codigo in codigos" :key="codigo.id">{{ codigo }}
                            <input  required type="hidden" name="idCobranca" :value="codigo">
                        </label>
                        <br>
                        <label>Deseja excluir está cobrança?</label>
                        <br>
                        <button name="excluir">Sim</button>
                        <button name="naoexcluir">Não</button>
                    </fieldset>
                </div>
            </form>
        </div>
    </main>
</template>

<script>
export default{
    name: "CobrarPlan",
    props:{
        codigos: Array,
    },
}
</script>



