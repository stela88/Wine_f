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
  background-color: #080808;
  padding: 30px;
  text-align: center;
  position: center;
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

@media screen and (max-width: 992px) {
  .col-6 {
    flex: 50%;
    max-width: none;
  }
}

@media screen and (max-width: 600px) {
  .row {
    flex-direction: column;
    padding-left: 50px;
  }
  .homecard {
    position: inherit;
  }
}

.vino {
  width: 350px;
  height: auto;
  border-radius: 100px;
  object-fit: cover;
}

.p {
  margin-top: 200x;
}
</style>


