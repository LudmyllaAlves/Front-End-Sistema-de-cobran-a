<template>
    <Menu></Menu>
    <main>
        <div class="cadastro">
            <form action="http://localhost/validandosc/php/controller/dadoscompras.php" method="POST" enctype="multipart/form-data">
                <div class="fieldset">
                    <fieldset>
                        <label>Importe a base de compras</label> <br>
                        <input type="file" name="arquivos" required><br>
                        <button type="submit">Enviar
                        </button><br>
                    </fieldset>
                </div>
            </form>
        </div>
    </main>
</template>


<script>
import '@/import.css'
import Menu from '@/components/Menu.vue';
export default{
    name: "ImportarCompras",
    components:{
        Menu
    }
}

</script>

