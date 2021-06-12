<template>
  <div class="sobremi">
    <div class="sobremi-title">
      <h2>Sobre Mi</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum standard dummy text.
      </p>
    </div>
    <div class="about-grid">
      <div class="grid-img">
        <img src="../assets/imagenes/an.png" alt="" />

      </div>
      <div class="tex">
        <h1 class="mb-2">Hi There</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque dolor
          vitae magni dicta quaerat vel officiis porro, nisi temporibus!
          Maiores?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aperiam autem quas officiis. Optio debitis tempore unde nulla eius ut.</p>
        <div class="text-info1">
          <span>Nombre</span>
          <p>Angy Mendez</p>
          <span>Email</span>
          <p>aaa@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sobremi-title{
  margin: 20px 0;
}
.sobremi {
  /* background: rgb(35, 38, 58); */
  color: black;
}
.grid-img{
  /* width: 50%; */
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  
}
.grid-img img{
  width: 50%;
}
.about-grid {
  max-width: 80%;
  margin: auto;
  margin-top: 40px;
  text-align: justify;
  display: grid;
  justify-content: center;
  align-items: center;
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 400px)); */
  grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
  gap: 10px;
  /* border: 1px solid red; */
}
.tex{
  width: 80%;
  height: 80%;

}
.tex p{
  margin-top: 20px;
  margin-bottom: 30px;

}
.text-info1 span{
  color: coral;
}
#app{
  background-color: blue;
}
</style>
