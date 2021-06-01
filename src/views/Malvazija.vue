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

winecard = [
  {
    logo: require("@/assets/logo2.png"),
    ime: "MALVAZIJA",
    slika: require("@/assets/malvazija_crna.jpg"),
    boja: "bijelo",
    temp: "6-8 C",
    cijena: "40 Kn",
    opis: "vino kompleksnih aroma; cvijeta akacije, limuna, zrele breskve i manga. Na nepcu je veoma svježe i mekano, elegantnog i trajnog okusa. Na retro okusu, prisutna blaga gorčina zelenog badema.",
    posluzi: "carpaccio od brancina sa limunom, rukolom, bijelim paprom i cvijetom soli, rižoto s kozicama i tikvicama, fritaja sa šparugama i pancetom",
    jelo1: require("@/assets/jelo1_malvazija.jpg"),
    jelo2: require("@/assets/jelo2_malvazija.jpg"),
    jelo3: require("@/assets/jelo3_malvazija.jpg"),
  },
]

export default {
  name: "Malvazija",
  data(){
    return{
      winecard,
    }
  },
  components: {
    WineCard
  }
}
</script>
