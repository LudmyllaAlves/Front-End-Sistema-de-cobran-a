<template>
    <main>
        <div class="cadastro">
            <form action="http://localhost/validandosc/php/controller/cobrar.php" method="POST">
                    <div class="fieldset">
                        <fieldset>
                            <label>ID:</label>
                            <label v-for="codigo in codigos" :key="codigo.id" >{{codigo}}
                                <input required type="hidden" name="codigo" id="codigo" :value="codigo">
                            </label>
                            <br>
                            <label v-for="valorcompra in valorcompras" :key="valorcompra.id">
                                <input required type="hidden" name="valorcompra" id="valorcompra" :value="valorcompra">
                            </label>
                            <br>
                            <label>Nome do Cliente:</label>
                            <label v-for="identidade in identidades" :key="identidade.id" >{{identidade}}
                                <input required type="hidden" name="identidade" id="identidade" :value="identidade">
                            </label>
                            <div class="cobrar">
                                <label>Valor do Pagamento:</label> <br>
                                <input required type="float" name="valorpago" id="valorpago">
                            </div>
                            <div class="cobrar">
                                <label>Data e hora de execução:</label> <br>
                                <input required type="text" name="datahoraexec" :value="fulldatetime" >
                            </div>
                            <div>
                                <button>
                                    Receber
                                </button>
                            </div>
                        </fieldset>
                    </div>
                </form>
            </div>  
    </main>
</template>

<script>

export default{
    name:"Cobrar",
    props:{
        clientes:Array,
        identidades: Array,
        codigos: Array,
        valorcompras: Array,
    },
    data(){
        return{
            showNomeCliente: true,
            fulldatetime: '',
            date: '',
            time: '',
            nomeCliente: '',
        }
            
    },
    methods:{
        printFullDate: function(){
        
        let date =  new Date().toLocaleDateString();
        let time = new Date().toLocaleTimeString();
        return date + ' ' + time;
        },
        getNomeCliente(){
            this.clientes.push({
            nome:this.nomeCliente
        })
        },
        },
    mounted(){
        this.fulldatetime = this.printFullDate();
    }
        }

</script>
