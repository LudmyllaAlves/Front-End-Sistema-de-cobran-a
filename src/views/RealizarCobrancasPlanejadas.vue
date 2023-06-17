<template>
    <Menu2></Menu2>
    <main>
            <ListaDeCobsPlanejadas :cobrancas="cobrancas"/>
    </main>
</template>

<script>
import axios  from 'axios';
import ListaDeCobsPlanejadas from '@/components/ListaDeCobsPlanejadas.vue';
import Menu2 from '@/components/Menu2.vue';
export default{
    name: 'RealizarCobrancasPlanejadas',
    components:{
        ListaDeCobsPlanejadas,
        Menu2
    },
    data(){
        return{
            cobrancas: []
        }
        
    },

    methods:{
        getCobrancas(){
            axios.get("http://localhost/validandosc/php/controller/listaplanejada.php")
        .then(response => {
        this.cobrancas = response.data
        })
        .catch(error => console.log(error))
    },
    voltar(){
    window.history.back()
    },
    },
    mounted(){
        this.getCobrancas();
    },

}

</script>
