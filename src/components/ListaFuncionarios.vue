<template>
    <div>
        <select required name="nomecobradores" id="nomecobradores">
            <option value="">Selecione o cobrador</option>
            <option v-for="cobrador in cobradores" :key="cobrador.id" :value="cobrador.nome">{{cobrador.nome}}</option>
        </select>
    </div>
</template>
<script>
export default{
    name:  "ListaFuncionarios",
    props:{
        cobradores: Array,
        
    },
    
}
</script>