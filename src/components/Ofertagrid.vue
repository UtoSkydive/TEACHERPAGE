<template>
   <div class="oferta">
       <img :src=imagen alt="">
       <h3>{{ titulo}}</h3>
       <p>{{parrafo}}</p>
   </div>
</template>

<script>
export default {
    props:{
        imagen : String,  
        titulo:String,
        parrafo:String
    }

}
</script>

<style scoped>
    img{
        width: 80px;
    }
    .oferta{
        border: 1px solid gray;
        padding: 5px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>