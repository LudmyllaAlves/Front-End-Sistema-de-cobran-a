<template>
    <Menu2></Menu2>
    <main>
            <ListaDeCobsEfet :efetuadas ="efetuadas"/>
    </main>
</template>
<script>
import ListaDeCobsEfet from "../components/ListaDeCobsEfet.vue";
import axios from 'axios';
import Menu2 from '@/components/Menu2.vue';

export default{
    name: "CobrançasEfetuadas",
    components:{
    ListaDeCobsEfet,
    Menu2
},
    data(){
        return{
            efetuadas: [],
        }
    },

    methods:{
        async getEfetuadas(){
        const response = await axios.get('http://localhost/validandosc/php/controller/listadecobrancasefet.php');
        if(response.status == 200){
            this.efetuadas = response.data;
        }else{
            console.log("erro de api")
        }
        },    
        voltar(){
        window.history.back();
        }
    },
    mounted(){
        this.getEfetuadas();
    },

}
</script>
