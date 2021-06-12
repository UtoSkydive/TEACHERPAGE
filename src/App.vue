<template>
  <div id="nav">
    <div class="nav__img">
      <img src="@/assets/imagenes/logo.png" >  
    </div>
    <div class="nav__menu">
      <router-link to="/">Inicio</router-link> <span class="separator">|</span>
      <router-link to="/about">Aprendizaje</router-link> <span class="separator">|</span>
      <router-link to="/sobremi">Sobre Mi</router-link> <span class="separator">|</span>
      <router-link to="/galeria">Galeria</router-link> <span class="separator" >|</span>
      <router-link to="/contact">Contacto</router-link>

    </div>
  </div>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  padding: 30px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #040404d9;
}

#nav a {
  font-weight: bold;
  color: #ffff;
  font-size: 18px;
  text-decoration: none;
  padding: 0 10px;
}
#nav img {
 width: 200px;
}

#nav a.router-link-exact-active {
  color: #FFD1D0
}

.separator{
  color: #FFD1D0;
}
.nav__menu{
  display: none;
}
@media only screen and (min-width :965px){
  .nav__menu{
    display: block;
  }
}
</style>
