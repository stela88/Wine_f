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

let cards = [];

export default {
  name: "Crno",
  data() {
    return {
      cards,
    };
  },
  async mounted() {

        fetch("http://localhost:3330/posts/crno")
          .then((r) => {
            return r.json();
          })
          .then((data) =>{
            console.log("Podaci s backenda, crno vino", data);

            this.cards=data.map((element) => {
              return {
                img: element.slika,
                description: element.ime,
                page: element.stranica,
                color: element.boja
              };
            });
          });
  },
  
  components: {
    HomeCard,
  },
};
</script>