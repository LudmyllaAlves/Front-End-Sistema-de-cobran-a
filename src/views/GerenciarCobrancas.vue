<template>
    <Menu></Menu>
    <main>
        <ListadeCobs  :cobrancas="cobrancas" :efetuadas ="efetuadas"/>
    </main>
</template>
<script>
import axios from 'axios';
import ListadeCobs from '@/components/ListadeCobs.vue';
import Menu from '@/components/Menu.vue';
export default{
    name: "GerenciarCobrancas",
    components:{
        ListadeCobs,
        Menu
},
    data(){
        return{
            efetuadas: [],
            cobrancas: []
        }
    },
    methods:{
        async getCobranças(){
            const response = await axios.get("http://localhost/validandosc/php/controller/cobsparaexcluir.php")
            if(response.status == 200){
            this.cobrancas = response.data ;
            }else{
                console.log("erro de api")
            }
        },
        async getEfetuadas(){
            const response = await axios.get('http://localhost/validandosc/php/controller/listadecobrancasefet.php');
            if(response.status == 200){
                this.efetuadas = response.data ;
            }else{
                console.log("erro de api")
            }
        },    
    },
    mounted(){
        this.getCobranças();
        this.getEfetuadas();
    },
}
</script>


