<template>
    <div>
    <h1>Lista de cobranças</h1>
        <div class="tabela">
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
                    </tr>
                </thead>
                <tbody> 
                    <tr  v-for="(efetuada) in efetuadas" :key="efetuada.id">
                        <td >{{ efetuada.idCobranca}}</td>
                        <td>{{ efetuada.nome}}</td>
                        <td>{{ efetuada.idFuncionario }}</td>
                        <td>{{ efetuada.valorPlanejado }}</td>
                        <td>{{ efetuada.valorPago }}</td>
                        <td>{{ efetuada.dataPrevista }}</td>
                        <td>{{ efetuada.dataHoraExec }}</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>

export default{
    name: 'ListaDeCobsEfetAdmin',
    props:{
        efetuadas: Array,
    },
    }
</script>






