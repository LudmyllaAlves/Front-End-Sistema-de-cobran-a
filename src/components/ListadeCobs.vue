<template>
        <div v-if="tableVisivel">
            <div class="tabela">
                <h1>Lista de cobranças</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Id:</th>
                            <th>Cliente:</th>
                            <th>Funcionario:</th>
                            <th>Valor Planejado:</th>
                            <th>Valor Pago:</th>
                            <th>Data Prevista:</th>
                            <th>Data e Hora Execução:</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody> 
                        <tr  v-for="(cobranca,index) in cobrancas" :key="cobranca.id">
                                <td class="valorTabela">{{ cobranca.idCobranca}}</td>
                                <td>{{ cobranca.nome}}</td>
                                <td>{{ cobranca.idFuncionario }}</td>
                                <td>{{ cobranca.valorPlanejado }}</td>
                                <td>{{ cobranca.valorPago}}</td>
                                <td>{{ cobranca.dataPrevista }}</td>
                                <td>{{ cobranca.dataHoraExec }}</td>
                                <td>
                                    
                                        <svg value="post" @click="pegarIdCobranca(index), DeixaInvisivel()" id="iconeprincipal" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                        </svg>
                                    
                                </td>
                            </tr>
                        <tr  v-for="(efetuada) in efetuadas" :key="efetuada.id">
                            <td >{{ efetuada.idCobranca}}</td>
                            <td>{{ efetuada.nome}}</td>
                            <td>{{ efetuada.idFuncionario }}</td>
                            <td>{{ efetuada.valorPlanejado }}</td>
                            <td>{{ efetuada.valorPago }}</td>
                            <td>{{ efetuada.dataPrevista }}</td>
                            <td>{{ efetuada.dataHoraExec }}</td>
                            <td>
                                <svg id="iconeprincipal" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                </svg>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div>
            <ExcluirCobrancaPlan v-if="visivel" :codigos="codigos" > 
            </ExcluirCobrancaPlan>
        </div>
</template>

<script>
import ExcluirCobrancaPlan from "./ExcluirCobrançasPlan.vue"
export default{
    name: 'ListadeCobs',
    components:{
        ExcluirCobrancaPlan,
    },
    data(){
        return{
            codigos: "",
            visivel: false,
            tableVisivel: true
        }
    },
    props:{
        cobrancas: Array,
        efetuadas: Array,
    },

    methods:{
        pegarIdCobranca(parametro){
        const botao = parametro;
        const valortabela = document.getElementsByClassName('valorTabela')[botao].innerHTML
        this.visivel = !this.visivel;
        this.codigos = [valortabela];
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


