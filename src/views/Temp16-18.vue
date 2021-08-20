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
  name: "Temp16-18",
  data() {
    return {
      cards,
    };
  },
  async mounted() {

        fetch("http://localhost:3330/posts/temp3")
          .then((r) => {
            return r.json();
          })
          .then((data) =>{
            console.log("Podaci s backenda, temperatura 16-18 C", data);

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