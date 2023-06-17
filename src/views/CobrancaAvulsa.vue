<template>
    <Menu2></Menu2>
    <main>
        <TabelasClientes :clientes ="clientes"/>
    </main>
</template>
<script>
import Menu2 from '@/components/Menu2.vue';
import TabelasClientes from "../components/TabelasClientes.vue"
import axios from 'axios';

export default{
    name: "CobrancaAvulsa",
    components:{
        TabelasClientes,
        Menu2
    },
    data(){
        return{
            clientes: [],
        }
    },
    mounted(){
        this.getClientes();
    },
    methods:{
        async getClientes() {
    const response = await axios.get('http://localhost/validandosc/php/controller/tabeladecompras.php');
    if(response.status == 200){
        this.clientes = response.data;
    }else{
        console.log("erro de api")
    }
},        
    voltar(){
        window.history.back()
    }
    
}
}

</script>
