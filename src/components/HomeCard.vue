<template>
  <div class="homecard">
    <router-link :to="info.page">
      <img alt="homecard" :src="info.img" class="vino" />
    </router-link>
    <br /><br />
    <h4>
      <p>{{ info.description }}</p>
    </h4>
  </div>
</template>


<script>
export default {
  props: ["info"],
  name: "HomeCard",
};
</script>


