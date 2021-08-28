<template>
  <body>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <br />
    
    <div>
      <home-card
        class="p-2"
        v-for="(card, drac) in cards"
        :key="drac"
        :info="card"
      />
    </div>
  </body>
</template>


<script>
import HomeCard from "../components/HomeCard.vue";
import { Posts } from "@/services";
//--iz service/index.js

let cards = [];

export default {
  name: "Home",
  data() {
    return {
      cards,
    };
  },
  async mounted() {
    
    fetch("http://localhost:3330/posts")
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        console.log("Podaci s backenda", data);

        this.cards = data.map((element) => {
          return {
            img: element.slika,
            description: element.ime,
            page: element.stranica,
          };
        });
      });
  },

  components: {
    HomeCard,
  },
};
</script>

