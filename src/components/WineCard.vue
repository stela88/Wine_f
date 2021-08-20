<template>
  <div class="container px-4">
    <h1><img :src="info.logo" class="logo" />{{ info.ime }}</h1>
    <br />
    <div class="row gx-5">
      <div class="col">
        <img :src="info.slika" class="wine" />
        <br /><br />
        <router-link to="/Kosarica">
          <button>Dodaj u košaricu</button>
        </router-link>
      </div>
      <div class="col border-left">
        <div class="text">
          <p>Boja: {{ info.boja }}</p>
          <p>Temperatura posluživanja: {{ info.temp }}</p>
          <p>Cijena: {{ info.cijena }}</p>
          <p>Opis: {{ info.opis }}</p>
          <p>Najbolje poslužiti uz: {{ info.posluzi }}</p>
        </div>
        <a :href="info.link1" target="_blank">
          <img :src="info.jelo1" class="jelo"
        /></a>
        <a :href="info.link2" target="_blank">
          <img :src="info.jelo2" class="jelo"
        /></a>
        <a :href="info.link3" target="_blank"
          ><img :src="info.jelo3" class="jelo"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  name: "WineCard",
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.row gx-5 {
  margin-right: 90px;
  display: flex;
  flex-wrap: wrap;
}
.logo {
  margin-right: 20px;
}
.col {
  max-width: 100%;
}
.text {
  padding-top: 10px;
  text-align: left;
}
.jelo {
  padding: 5px;
  width: 170px;
  height: 170px;
  border-radius: 20px;
  object-fit: cover;
}
.wine {
  width: 400px;
  border-radius: 20px;
}
p {
  padding: 3px;
}
h1 {
  color: aliceblue;
  padding: 1px;
  margin-top: -70px;
  margin-bottom: 30px;
  margin-left: -30px;
}
.logo {
  width: 50px;
  height: 50px;
}
button {
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-radius: 20px;
  border-color: white;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  color: #b71c1c;
  margin-bottom: 40px;
}

a:visited {
  color: white;
}

p {
  color: white;
}

@media screen and (max-width: 992px) {
  .col {
    flex: 50%;
  }
  .h1 {
    flex: 50%;
  }
}

@media screen and (max-width: 600px) {
  .row {
    flex-direction: column;
    position: center;
    padding-right: 90px;
  }
  h1 {
    position: center;
    padding-left: 90px;
  }
}
</style>