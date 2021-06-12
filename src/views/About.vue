<template>
  <div class="about">
    <h1>Te diviertes</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptas.</p>
    <div class="about-grid">
      <ofertagrid titulo="Safety First" parrafo="We offer first-class protection and security for your children at Kinderex." :imagen="ico1"></ofertagrid>
      <ofertagrid titulo="Small Class Size" parrafo="All classes at our center have up to 6 students regardless of the curriculum." :imagen="ico1"></ofertagrid>
      <ofertagrid titulo="Certified Teachers" parrafo="We hire only the most experienced and certified teachers for your children." :imagen="ico1"></ofertagrid>
      <ofertagrid titulo="Infant Care" parrafo="Meeting the educational needs of infants through quality infant care." :imagen="ico1"></ofertagrid>
      <ofertagrid titulo="Creative Lessons" parrafo="Our curriculum was designed to nurture creativity in all students of Kinderex." :imagen="ico1"></ofertagrid>
      <ofertagrid titulo="Happy Environment" parrafo="The best conditions for your child to have the unique learning experience." :imagen="ico1" ></ofertagrid>
    </div>
  </div>
</template>
<script>

import Ofertagrid from '@/components/Ofertagrid'
// import bgImg from '../assets/imagenes/ico1.png'
import bgImg from '../assets/imagenes/1.png'
// import bgImg2 from '../assets/imagenes/ico2.png'
// import bgImg3 from '../assets/imagenes/ico3.png'
// import bgImg4 from '../assets/imagenes/ico4.png'
export default ({
  data() {
    return {
      // img: bgImg,
      // ico2 : bgImg2,
      // ico3 : bgImg3,
      // ico4 : bgImg4,
      ico1 : bgImg,
    }
  },
 components: {
   Ofertagrid
  }
});
</script>
<style scoped>
  .about{
    margin-top: 50px;
    
  }
  .about-grid{
    max-width: 80%;
    margin:auto;
    margin-top: 20px;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
    gap: 10px;
  }
</style>
