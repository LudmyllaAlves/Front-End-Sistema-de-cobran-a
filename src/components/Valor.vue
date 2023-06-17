<template>
    <div id="cadastro" name="cadastro">
    <select type="number" v-for="resulte in resultes" :key="resulte.id" id="calculado" name="calculado" > 
        <option type="number" :value="resulte">{{ resulte }}</option>
    </select>
    </div>
</template>

<script>

export default{
    name:  'Valor',
    props:{
        resultes: Array
    },
    methods:{
        pegoValor(){
            const valor = document.getElementById('label')
            console.log(valor)
        }
    },
    BeforeUpdated(){
        this.pegoValor();
    },
}
</script>


