<template>
    <div>
        <Menu></Menu>
        <main>
            
            <div class="cadastro">
                <h1>Planejar uma cobrança</h1>
                <form action="http://localhost/validandosc/php/controller/planejarCobranca.php" method="POST">
                    <div class="fieldset">
                        <fieldset>
                                        <ListaClientes required  name="nomecliente" :clientes ="clientes"/>
                            <tr>
                                <td>
                                    <div class="titulo">
                                    <label for="cobrador">Selecione um cobrador:</label>
                                    </div>
                                    <ListaFuncionarios v-model="cobrador" required name="nomecobradores" :cobradores ="cobradores"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="titulo">
                                    <label for="valor_pla">Valor planejado:</label>
                                    </div>
                                    <input required v-model="valor_planejado" type="float" name="valor_planejado" id="valor_planejado">
                                </td>
                                <td>
                                    <div class="titulo">
                                    <label for="data_prevista">Data prevista:</label>
                                    </div>
                                    <input required v-model="data_prevista" type="date" name="data_prevista" id="data_prevista"> 
                                </td>
                            </tr>
                            <button type="submit" name="cadastrar">Criar Cobrança</button>
                        </fieldset>
                    </div>
                </form>
                
            </div>
        </main>
    </div>
</template>

<script>
import ListaClientes from "../components/ListaClientes.vue";
import ListaFuncionarios from "../components/ListaFuncionarios.vue";
import axios from 'axios';
import Menu from '@/components/Menu.vue';

export default{
    name:'PlanejarCobranca',

    components:{
        ListaClientes,
        ListaFuncionarios,
        Menu
    },
data(){
    return{                                                                                                               
    clientes: [],
    cobradores: [],  
    click: false,
    }
},    
mounted(){
    this.getClientes();
    this.getCobrador();
},
methods: {
    async getClientes() {
    const response = await axios.get('http://localhost/validandosc/php/controller/listadeclientes.php');
    if(response.status == 200){
        this.clientes = response.data;
    }else{
        console.log("erro de api")
    }
},

async getCobrador() {
    const response = await axios.get('http://localhost/validandosc/php/controller/listadecobrador.php');
    
    if(response.status == 200){
        this.cobradores = response.data;
    }else{
        console.log("erro de api")
    }
},

}

}

</script>

