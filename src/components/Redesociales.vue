<template>
    <div class="home-links">
      <span><img src="../assets/imagenes/facebook.png" alt=""></span>
      <span><img src="../assets/imagenes/linkedin.png" alt=""></span>
      <span><img src="../assets/imagenes/instagram.png" alt=""></span>
    </div>
</template>

<script>
export default {
    name: 'Redesociales',
}
</script>

<style scoped>
    .home-links{
       
    }
 
  .home-links span{
    display: inline-block;
    cursor: pointer;
  }
  .home-links span img{
    width: 30px;
    margin-left: 5px;
  }
  @media only screen and (min-width :965px){
    .home-links{
      display: flex;
     flex-direction: column;
     justify-content: center;
     
    }
  }
</style>