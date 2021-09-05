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
   created() {
    this.fetchPosts()
  },
  methods:{
    async fetchPosts() {
      this.cards = await Posts.getAll()
    },
  },
  components: {
    HomeCard,
  },
};
</script>

