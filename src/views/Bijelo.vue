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
  name: "Bijelo",
  data() {
    return {
      cards,
    };
  },
  async mounted() {

//trenutno ne radi ali ovo je dohvat prema id-u
    //console.log(this.id);
    //this.cards = await Posts.getOne(this.id);
  var bijelovino=

        fetch("http://localhost:3330/posts/bijelo")
          .then((r) => {
            return r.json();
          })
          .then((data) =>{
            console.log("Podaci s backenda, bijelo vino", data);

            this.cards=data.map((element) => {
              return {
                img: element.slika,
                description: element.ime,
                page: element.stranica,
                color: element.boja
              };
            });
          });
  console.log("bijelo vino", bijelovino)
  },
  

  components: {
    HomeCard,
  },
};
</script>