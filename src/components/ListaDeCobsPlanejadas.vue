<template>
<div v-if="tableVisivel">
    <h1>Realizar cobrança</h1>
    <div class="tabela">
            <table>
                <thead>
                    <tr>
                        <th>Id:</th>
                        <th>Cliente:</th>
                        <th>Endereço</th>
                        <th>Valor planejado:</th>
                        <th>Data prevista:</th>
                        <th>Cobrar</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr  v-for="(cobranca,index) in cobrancas" :key="cobranca.id">
                        <td class="valorTabela">{{ cobranca.idCobranca}}</td>
                        <td>{{ cobranca.nome}}</td>
                        <td>{{ cobranca.endereco }}</td>
                        <td class="valorPlanejado">{{ cobranca.valorPlanejado }}</td>
                        <td>{{ cobranca.dataPrevista }}</td>
                        <td>
                            <button  id="botao" type="submit" value="post" @click="pegarIdCobranca(index), pegarValorPlanejado(index), DeixaInvisivel()">Cobrar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div>
        <button class="voltar" v-if="!tableVisivel" @click="DeixaInvisivel(), OcultarMenu()">voltar
        </button>
        <CobrarPlan v-if="visivel" :codigos="codigos" :valorPlan="valorPlan"> 
            <button>tabela</button>
        </CobrarPlan>
    </div>

</template>

<script>

import CobrarPlan from "./CobrarPlan.vue"
export default{
    name: 'ListaDeCobsPlanejadas',
    components:{
        CobrarPlan,
    },
    data(){
        return{

            codigos: "",
            valorPlan:"",
            visivel: false,
            tableVisivel: true
        }
    },
    props:{
        cobrancas: Array,
    },
    methods:{
        pegarIdCobranca(parametro){
        const botao = parametro;
        const valortabela = document.getElementsByClassName('valorTabela')[botao].innerHTML
        this.visivel = !this.visivel;
        this.codigos = [valortabela];
        },
        pegarValorPlanejado(parametro){
        const botao = parametro;
        const valorPlanejado = document.getElementsByClassName('valorPlanejado')[botao].innerHTML
            this.valorPlan = [valorPlanejado];
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


