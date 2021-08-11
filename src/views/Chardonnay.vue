<template>
<body>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <br>
<wine-card
            v-for="(card, drac) in winecard"
            :key="drac"
            :info="card"
          />
                  
</body>    
</template>


<script>
import WineCard from "../components/WineCard.vue";

let winecard = [];

export default {
  name: "Chardonnay",
  data(){
    return{
      winecard,
    }
  },
  async mounted() {
    fetch("http://localhost:3330/chardonnay")
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        console.log("Podaci s backenda, chardonnay", data);

        this.winecard = data.map((element) => {
          return {
            logo: element.logo,
            ime: element.name,
            slika: element.img,
            boja: element.color,
            temp: element.temp,
            cijena: element.price,
            opis: element.about,
            posluzi: element.serve,
            jelo1: element.meal1,
            jelo2: element.meal2,
            jelo3: element.meal3,
            link1: element.link1,
            link2: element.link2,
            link3: element.link3
          };
        });
      });
   },
  components: {
    WineCard
  }
}
</script>
