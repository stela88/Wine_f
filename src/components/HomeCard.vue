<template>
  <div class="homecard">
    <a :href="info.page">
      <img alt="homecard" :src="info.img" class="vino" />
    </a>
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

<style lang="scss">
body {
  background-color: #161616;
  text-align: center;
  position: center;
  padding-top: 30px;
}
* {
  box-sizing: border-box;
}
.homecard {
  text-align: center;
  position: initial;
  color: white;
  padding-bottom: 50px;
}
.vino {
  width: 300px;
  height: auto;
  border-radius: 100px;
  object-fit: cover;
}

.p {
  margin-top: 200x;
}
</style>


