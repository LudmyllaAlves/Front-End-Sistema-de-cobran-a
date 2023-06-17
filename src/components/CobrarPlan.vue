<template>
    <main>
        <div class="cadastro">
            <form action="http://localhost/validandosc/php/controller/cobrarcobrancaplanejada.php" method="POST">
                <div class="fieldset">
                    <fieldset>
                        <label>Id Cobrança:</label>
                        <label v-for="codigo in codigos" :key="codigo.id">{{ codigo }}
                            <input  required type="hidden" name="idCobranca" :value="codigo">
                        </label>
                        <br>
                        <label>Valor Planejado:</label>
                        <label v-for="valor in valorPlan" :key="valor.id">{{ valor }}
                            <input type="hidden" name="valorPlanejado" :value="valor">
                        </label>
                        <br>
                        <div class="cobrarplan">
                            <label>Valor Pago:</label><br>
                            <input type="text" required name="valorPago"> <br>
                        </div>
                        <div class="cobrarplan">
                            <label>Data e hora de Execução:</label><br>
                            <input type="text" required name="dataHoraExec" :value="fulldatetime"> <br>
                        </div>
                        <button name="cobrar">Cobrar</button>
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
        valorPlan: Array
    },
    data(){
        return{
            fulldatetime: ""
        }
    },
    methods:{
        printFullDate: function(){
        
        let date =  new Date().toLocaleDateString();
        let time = new Date().toLocaleTimeString();
        return date + ' ' + time;
        },
    },
    mounted() {
        this.fulldatetime = this.printFullDate();
    },
}
</script>







