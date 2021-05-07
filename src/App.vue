<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="!$route.meta.hideNavbar" to="/Home">Home</router-link> |
      <router-link v-if="!$route.meta.hideNavbar" to="/Kosarica">Košarica</router-link>
    </div >
    <router-view/>
  </div>
</template>

<script>
// Nadopuniti u datoteku "src/App.vue" iznad retka: this.cards = []
// ...

// fetch("http://localhost:3330/posts")
//  .then(r => {
//  return r.json()
//  })
//  then(data => {
//  console.log("Podaci s backenda", data)
//  })
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

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>




