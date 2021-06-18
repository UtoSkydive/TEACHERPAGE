<template>
  <div class="container">
    <h1 class="logo">Contactame</h1>
    <div class="contact-wrapper">
      <div class="contact-form">
        <!-- <h3>Contacto</h3> -->
        <form action="">
          <p>
            <label for="fullname">Nombre Completo</label>
            <input type="text" name="fullname" id="fullname" />
          </p>

          <p>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
          </p>
          <p>
            <label for="phone">Telefono</label>
            <input type="tel" name="phone" id="phone" />
          </p>
          <p>
            <label for="asunto">Asunto</label>
            <input type="text" name="asunto" id="asunto" />
          </p>
          <p class="block">
            <label for="msg">Mensaje</label>
            <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
          </p>
          <p class="block">
            <button type="submit" class="btn btn-success">Enviar</button>
          </p>
        </form>
      </div>
      <div class="contact-info">
        <h4>Mas Info</h4>

        <ul>
          <li><font-awesome-icon :icon="myIcon" />Direccion</li>
          <li><font-awesome-icon :icon="myIcon" />111-111-111-111</li>
          <li><font-awesome-icon :icon="myIcon" />contact@gmail.com</li>
        </ul>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>company.com</p>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
export default {
  data() {
    return {
      myIcon: faDragon,
    };
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped>

.container {
  
  color: #000;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  max-width: 1170px;
  margin-left: auto;
  padding: 1.5em;
}
.logo {
  text-align: center;
  font-size: 3em;
}
.contact-wrapper {
  box-shadow: 0 0 20px rgb(255, 255, 255, 0.3);
}
.contact-wrapper > * {
  padding: 1em;
}
.contact-form {
  background: #2222;
}
.contact-info {
  background: #ee6e73;
}
.contact-form form {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.contact-form form .block {
  display: grid;
  grid-column: 1 / 3;
}
.contact-form form p {
  margin: 0;
  padding: 1em;
}
.contact-form form label{
  color: #000;
}
/* .contact-form form button, */
.contact-form form input,
.contact-form form textarea {
  width: 100%;
  padding: 0.7em;
  border: none;
  background: none;
  border-bottom: 1px solid #d63031;
  outline: none;
  color: #000;
}
.contact-form form button {
  /* background: #b70e21;
  border: 0;
  text-transform: uppercase;
  padding: 1em;
  height: 50px; */
}
.contact-form form button:hover,
.contact-form form button:focus {
  background: #d63031;
  color: #fff;
  transition: background-color 1s ease-out;
  outline: 0;
}
.contact-info h4,
.contact-info ul,
.contact-info p {
  text-align: center;
  margin: 0 0 1rem 0;
}
.contact-info ul {
  list-style: none;
  padding: 0;
}
.contact-info ul li {
  padding: 0.3em;
}

@media (min-width: 700px) {
  body {
    padding: 0 4rem;
  }
  .contact-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  .contact-wrapper > * {
    padding: 2em;
  }
  .contact-info h4,
  .contact-info ul,
  .contact-info p{
    padding: 1em;
    text-align: left;
  }
}
</style>
