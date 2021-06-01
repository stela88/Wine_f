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
    ime: "CHARDONNAY",
    slika: require("@/assets/chardonnay_crna.jpg"),
    boja: "bijelo",
    temp: "6-8 C",
    cijena: "40 Kn",
    opis: "Vino je kristalno bistro, duboke slamnato žute boje, s nijansom mladog zlata. Izraženog i finog mirisa žute jabuke, irisa te egzotičnih nota dinje, limete i ličija. Na nepcu je zaobljeno i mekano, gotovo slano, vrlo ekstraktno a tendecijom slatkoće.",
    posluzi: "Kapesante na žaru, tjestenina s plodovima mora, file bijele ribe pečen u tavici s pečenim povrćem.",
    jelo1: require("@/assets/jelo1_chardonnay.jpg"),
    jelo2: require("@/assets/jelo2_chardonnay.jpg"),
    jelo3: require("@/assets/jelo3_chardonnay.jpg"),
    link1: "https://gastro.24sata.hr/recepti/kapesante-naturale-15690",
    link2: "https://www.podravka.hr/recept/e1eacd8a-6182-11eb-abf0-0242ac120018/zapecena-tjestenina-s-plodovima-mora/",
    link3: "https://www.coolinarika.com/recept/fritaja-sa-sparogama-90ee9558-6388-11eb-946d-0242ac12002d",
  },
]

export default {
  name: "Chardonnay",
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
