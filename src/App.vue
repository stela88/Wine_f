<template>
  <div id="app">
    <div id="nav" class="navbar">
      <img src="@/assets/white.png" class="nav_vino" v-if="!$route.meta.hideNavbar" />
      <router-link v-if="!$route.meta.hideNavbar" to="/Home">
        <p class="navbar_option">Home</p>
      </router-link>
      <router-link v-if="!$route.meta.hideNavbar" to="/Sort">
        <p class="navbar_option">Sortiraj</p>
      </router-link>
      <router-link v-if="!$route.meta.hideNavbar" to="/Kosarica">
        <p class="navbar_option">Košarica</p>
      </router-link>
      <img src="@/assets/red.png" class="nav_vino" v-if="!$route.meta.hideNavbar" />
    </div>
    <router-view />
    <br>
    
  </div>
</template>

<script>
// Nadopuniti u datoteku "src/App.vue" iznad retka: this.cards = []
// ...

// fetch("http://localhost:3330/posts").then((r) => {
//   return r.json();
// });
// then((data) => {
//   console.log("Podaci s backenda", data);
// });
// stari kod, ne prepisivati, čisto za referencu
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  p {
    font-weight: bold;
    color: #960b29;

    &.router-link-exact-active {
      color: #2c3e50;
    }
  }
  .nav_vino {
    width: 10%;
  }
}
</style>
