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
    ime: "CABERNET SAUVIGNON",
    slika: require("@/assets/cabernet_sauvignon_crna.jpg"),
    boja: "bijelo",
    temp: "16-18 C",
    cijena: "40 Kn",
    opis: "Duboke, rubin crvene boje s granatnim odsjajem. Bistro i gusto, zagasitih refleksija. slatkastih nota, zrelog crnog bobičastog voća, poput marmelade od crnog ribiza. Začinskih nota crnog papra, timjana i rogača. Na nepcu je mekano, svježe i trajno. Blagih zrelih tanina trajnog okusa.",
    posluzi: "Gulaš od vepra s njokima ili juneću potrbušinu na žaru i pačja prsa s aronijom.",
    jelo1: require("@/assets/jelo1_cabernet_sauvignon.jpg"),
    jelo2: require("@/assets/jelo2_cabernet_sauvignon.jpg"),
    jelo3: require("@/assets/jelo3_cabernet_sauvignon.jpg"),
    link1: "https://finirecepti.net.hr/priprema/gulas-od-vepra-na-istarski-nacin/",
    link2: "https://gastro.24sata.hr/recepti/flank-steak-na-grillu-nepravedno-zanemaren-komad-junetine-23559",
    link3: "https://www.coolinarika.com/recept/pacja-prsa-s-aronijom-d748f712-6182-11eb-b558-0242ac120046",
  },
]

export default {
  name: "Cabernet Sauvignon",
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
