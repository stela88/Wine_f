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
        <p class="navbar_option">Košarica<span class="badge badge-warning" id="lblCartCount">
                {{ store.cartNumber }}
              </span></p>
      </router-link>
      <img src="@/assets/red.png" class="nav_vino" v-if="!$route.meta.hideNavbar" />
    </div>
    <router-view />
    <br>
    
  </div>
</template>

<script>

</script>

<style lang="scss">

#nav {
  padding: 30px;
  p {
    font-weight: bold;
    font-size: 22px;
    color: rgb(228, 188, 188);
    text-decoration: none;
    &.router-link-exact-active {
      color: #2c3e50;
    }
  }
  .nav_vino {
    width: 10%;
  }
  a{
  text-decoration: none;
  }
  #lblCartCount{
    background-color: rgb(228, 188, 188);
  }

}


</style>

<script>
import store from "@/store.js";
export default {
  name: "App",
  data() {
    return {
      store,
    };
  },
}
</script>

