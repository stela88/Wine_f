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
    ime: "TERAN",
    slika: require("@/assets/teran_crna.jpg"),
    boja: "crno",
    temp: "16-18 C",
    cijena: "40 Kn",
    opis: "Vino je bistro, duboke rubin crvene boje, živahnih refleksija i prilično je gusto. Finih i izraženih mirisa crvene ruže, višnje, šljive i borovnice. Svježe, baršunasto mekano, ukusno i trajno na nepcu.",
    posluzi: "Istarski pršut, tuna steak ili domaće kobasice na žaru.",
    jelo1: require("@/assets/jelo1_teran.jpg"),
    jelo2: require("@/assets/jelo2_teran.jpg"),
    jelo3: require("@/assets/jelo3_teran.jpg"),
    link1: "https://gastro.24sata.hr/spajza/znanstvenici-o-kakvoci-istarskih-drniskih-i-dalmatinskih-prsuta-10921",
    link2: "https://gastro.24sata.hr/trikovi-za-savrsen-tuna-steak-9021",
    link3: "https://www.jutarnji.hr/dobrahrana/price/kobaje-na-rostilju-evo-kako-rostiljati-omiljene-debeljuce-4070343",
  },
]

export default {
  name: "Teran",
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
