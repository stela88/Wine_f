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
    ime: "ROSE",
    slika: require("@/assets/rose_crna.jpg"),
    boja: "rose",
    temp: "6-8 C",
    cijena: "40 Kn",
    opis: "Vino je boje trešnje, kristalno bistro, živahnih refleksija. Nježnih aroma trešnjina cvijeta, maline i korice crvenog grejpa. Na nepcu svježe i mineralno.",
    posluzi: "sirove škampe, brudet ili domaće tagliatelle s prementurskom rakovicom.",
    jelo1: require("@/assets/jelo1_rose.jpg"),
    jelo2: require("@/assets/jelo2_rose.jpg"),
    jelo3: require("@/assets/jelo3_rose.jpg"),
    link1: "https://www.jutarnji.hr/dobrahrana/recepti/hrvatski-chefovi-kuhaju-jadranski-rakovi-u-suvremenim-autorskim-interpretacijama-najboljih-6392549",
    link2: "https://www.jutarnji.hr/dobrahrana/recepti/brudet-od-rakovice-5729587",
    link3: "https://www.coolinarika.com/inspiracija/tagliatelle-4f87dd58-610e-11eb-a969-0242ac120040",
  },
]

export default {
  name: "Rose",
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
