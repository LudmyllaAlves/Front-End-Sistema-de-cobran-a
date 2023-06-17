<template>
    <div v-if="tableVisivel">
        <h1>Realizar cobrança</h1>
        <div class="tabela">
            <div class="pesquisar">
                <label >Pesquisar:</label>
                <input  type="text" name="pesquisar" v-model="pesquisar" >
            </div>
        <table>
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nome</th>
                    <th scope="col">cpf</th>
                    <th scope="col">valor</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody >
                <tr  v-for="(cliente,index) in clientesFilter" :key="cliente.index" id="linha">
                    <td class="codigo">{{ cliente.idcompras }}</td>
                    <td class="valortabela">{{ cliente.nome }}</td>
                    <td>{{cliente.cpf}} </td>
                    <td class="compra"> {{cliente.total}}</td>
                    <td>                                                        
                        <button id="botao" type="submit" value="post" @click="pegarId(index), pegarValor(index), pegarNome(index), DeixaInvisivel()">
                        cobrar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div>
    <button class="voltar" v-if="!tableVisivel" @click="DeixaInvisivel(), OcultarMenu()">voltar
    </button>
    <Cobrar v-if="visivel" :codigos="codigos" :identidades="identidades" :valorcompras="valorcompras"> 
        <button>Tabela</button>
    </Cobrar>
</div>
                
</template>
<script>
import Cobrar from './Cobrar.vue';

export default{
    name: 'TabelasClientes',
    components:{
        Cobrar,
    },
    props:{
        clientes: Array,
    },
    data(){
        return{
            pesquisar: "",
            form:{
                nomecliente: ''
            },
            codigos: "",
            identidades: "",
            valorcompras: "",
            visivel: false,
            tableVisivel: true
        }
    },
    computed:{
        clientesFilter(){
            let valores = [];
            valores =  this.clientes.filter((cliente) =>{
                return (
                    cliente.nome.toLowerCase().indexOf(this.pesquisar.toLowerCase()) > -1
                )
            })
            return valores;
        },
        
    },
    methods:{
        pegarNome(parametro){
        const botao = parametro;
        const valortabela = document.getElementsByClassName('valortabela')[botao].innerHTML
            this.identidades = [valortabela];
            this.visivel = !this.visivel;
        },
        pegarId(parametro){
        const botao = parametro;
        const codigocompra = document.getElementsByClassName('codigo')[botao].innerHTML
            this.codigos = [codigocompra]
        },
        pegarValor(parametro){
        const botao = parametro;
        const compra = document.getElementsByClassName('compra')[botao].innerHTML
            this.valorcompras = [compra];
        },
        DeixaInvisivel(){
            this.tableVisivel =!this.tableVisivel;
        },
        OcultarMenu(){
            this.visivel = !this.visivel;
        },
    }
}
</script>
<style scoped>
div .pesquisar input{
    background-color: var(--color-text-dark);
    font-size: 15px;
    width: 200px;
    margin-left: 20px;
    margin-right: 20px;
    margin: 15px;
}
div .pesquisar{
    margin-left: 500px;
}

</style>



