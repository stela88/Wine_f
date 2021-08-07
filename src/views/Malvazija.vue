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

// winecard = [
//   {
//     logo: require("@/assets/logo2.png"),
//     ime: "MALVAZIJA",
//     slika: require("@/assets/malvazija_crna.jpg"),
//     boja: "bijelo",
//     temp: "6-8 C",
//     cijena: "40 Kn",
//     opis: "Vino je žive, slamnato žute boje s nježnom zelenkastom nijansom. Kompleksnih aroma; cvijeta akacije, limuna, zrele breskve i manga. Na nepcu je veoma svježe i mekano, elegantnog i trajnog okusa. Na retro okusu, prisutna blaga gorčina zelenog badema.",
//     posluzi: "Carpaccio od brancina sa limunom, rukolom, bijelim paprom i cvijetom soli, rižoto s kozicama i tikvicama, fritaja sa šparugama i pancetom",
//     jelo1: require("@/assets/jelo1_malvazija.jpg"),
//     jelo2: require("@/assets/jelo2_malvazija.jpg"),
//     jelo3: require("@/assets/jelo3_malvazija.jpg"),
//     link1: "https://cromaris.com/hr/recept/carpaccio-od-velikog-brancina/",
//     link2: "https://www.coolinarika.com/recept/rizoto-s-tikvicama-i-kozicama-b9a0aafe-6446-11eb-9714-0242ac120062",
//     link3: "https://www.coolinarika.com/recept/fritaja-sa-sparogama-90ee9558-6388-11eb-946d-0242ac12002d",
//   },
// ]

export default {
  name: "Malvazija",
  data(){
    return{
      winecard,
    }
  },
  async mounted() {
    fetch("http://localhost:3330/malvazija")
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        console.log("Podaci s backenda, malvazija", data);

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
