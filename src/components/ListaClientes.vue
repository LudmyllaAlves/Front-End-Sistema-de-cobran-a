<template>
    <div name="form">
        <tr>
            <td>
                <div class="titulo">
                <label for="cliente">Selecione o cliente:</label>
                <form @change="postCliente()" id="inputform" name="inputform" method="POST">
                    <select required name="nomecliente" id="nomecliente" v-model="form.nomecliente" 
                    :key="nomecliente"  >
                        <option v-for="cliente in clientes" :key="cliente.id" 
                        :value="cliente.nome"  >{{cliente.nome}}
                        </option>
                    </select>
                </form>
                <input required type="hidden" name="nomecliente" id="nomecliente"
                :key="nomecliente" :value="form.nomecliente">
                </div>
            </td>
            <td>
                <div class="titulo">
                <label>Saldo devedor do cliente:</label>
                <Valor :resultes="resultes"/>
                </div>
            </td>
    </tr>
</div>
</template>
<script>

import Valor from  "./Valor.vue"
const axios = require('axios').default
export default{
    name:  "ListaClientes",
    components:{
        Valor
    },
    props:{
        clientes: Array,
    },
    data(){
        return{
            form:{
                nomecliente:''
            },
            resultes:[]
        }
    },
    methods:{
    postCliente(){
                let form = document.querySelector('#inputform');
                axios.post('http://localhost/validandosc/php/controller/exibirValor.php', form)
                .then(response => {
                this.resultes= response.data
                })
                .catch(error => error)
            },
    }
}

</script>


