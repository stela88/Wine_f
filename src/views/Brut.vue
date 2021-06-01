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
    ime: "BRUT",
    slika: require("@/assets/brut_crna.jpg"),
    boja: "bijelo",
    temp: "5-7 C",
    cijena: "50 Kn",
    opis: "Vino je sjajne, slamnato žute boje s blagim zelenkastim odsjajem, vrlo živahnih refleksija. Mjehurići su sitni, brojni i postojani, kako u čaši tako i na nepcu. Svježeg je aromatskog profila, po poljskom cvijeću, bijeloj vinogradarskoj breskvi i limeti. Na nepcu je izrazito svježe i mekano. Sirupastog i trajnog okusa.",
    posluzi: "Finger food i hladna riblja predjela: sirovi kvarnerski škampi, sirove kamenice s vinaigrettom od zelene jabuke.",
    jelo1: require("@/assets/jelo1_brut.jpg"),
    jelo2: require("@/assets/jelo2_brut.jpg"),
    jelo3: require("@/assets/jelo3_brut.jpg"),
    link1: "https://www.coolinarika.com/inspiracija/finger-food-c6f308e6-610d-11eb-bdf1-0242ac120034",
    link2: "http://www.visitopatija.net/hr/gastronomija/kvarnerski-skamp",
    link3: "https://www.spar.hr/dobar-tek/recepti/predjela/kamenicerockefeller",
  },
]

export default {
  name: "Brut",
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
