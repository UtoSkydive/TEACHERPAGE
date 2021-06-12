<template>
  <div class="home" id="home">
    <div class="container">
      <Redesociales/>
      <div class="swipper-slide">
        <h3 id="title">Un Perfecto lugar de Aprendizaje</h3>
        <h3 id="subtitle">Para tus Hijos</h3>
        <button id="btn"><router-link class="link-btn" to="/Sobremi">Mas Información</router-link></button>
      </div>
      <Puntos url='../assets/imagenes/slide1.jpg'></Puntos>

    </div>
  </div>
</template>

<script>

import Redesociales from '@/components/Redesociales'
import Puntos from '@/components/Puntos'
export default {
  name: 'Home',
  components: {
    Redesociales,
    Puntos
  }
}
</script>
<style scoped>
  .home{
    height: 85vh;
    background-image: url('../assets/imagenes/slide1.jpg');
    background-position:  right center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    gap: 20px;
    font-family: 'Roboto', sans-serif;
    /* border: 1px solid red; */
  }
  .container{
    width: 90%;
  }
  .swipper-slide{
    width: 100%;
    color: black;
    /* border: 1px solid red; */
    padding: 30px;
    
   
    
  }

  
  .swipper-slide #title{
    font-size:32px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 10px;

  }
  .swipper-slide #subtitle{
    font-size: 16px;
    font-weight: 100;
    text-align: center;
    margin-bottom: 10px;


  }
  .swipper-slide #btn{
    width: 150px;
    padding: 15px;
    align-self: start;
    border-radius: 10px;
    border: none;
    border: 1px solid black;
    cursor: pointer;
  }
  #btn{
    width: 100px;
    height: 50px;
    background: black;
    color: cornsilk;
    overflow: hidden;
    border: none;
    outline: none;
  }
  .link-btn{
    color: white;
  }
  @media only screen and (min-width :965px){
    .container{
      display: flex;
      justify-content:space-around;
      gap: 10px;
      
    }
    .swipper-slide{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .swipper-slide #title{
      font-size: 50px;
    }
    .swipper-slide #subtitle{
      font-size: 30px;
    }
  }
 
</style>