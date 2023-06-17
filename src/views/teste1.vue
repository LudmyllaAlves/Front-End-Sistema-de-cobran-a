<template>
    <main>
        <form id="inputform" name="inputform" method="POST">
            <label>Digite seu nome:</label>
            <input type="text" name="numero" required  id="numero" v-model="form.numero" 
                    :key="numero" >
            <button type="submit"  @click="postNumero()">enviar</button>
        </form>
    </main>
</template>
<script>
const axios = require('axios').default
export default{
    name: "Teste1",
    data(){
        return{
            form:{
                numero:''
            },
        }
    },

    methods:{ 
    postNumero(){
                let form = document.querySelector('#inputform');
                axios.post('http://localhost/validandosc/php/teste.php', form)
                .then(response => {
                this.resultes = response.status;
                console.log (this.resultes);
                })
                .catch(error => error)
            },
        }
        }
    

</script>