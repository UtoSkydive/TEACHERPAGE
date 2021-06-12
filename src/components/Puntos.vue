<template>
    <div class="home-links">
      <span @click=""><img src="../assets/imagenes/punto.png" alt=""></span>
      <span><img src="../assets/imagenes/punto.png" alt=""></span>
      <span><img src="../assets/imagenes/punto.png" alt=""></span>
      
    </div>
</template>

<script>
export default {
    name:'Puntos',
    props:{
        url:String
    },
    methods:{
        changebck(){
            let home = document.getElementById("home");
            console.log(this.url)
            home.style.backgroundImage = `url(${this.url})`;
        }
    }
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
    width: 15px;
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