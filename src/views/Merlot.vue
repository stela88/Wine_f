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
    ime: "MERLOT",
    slika: require("@/assets/merlot_crna.jpg"),
    boja: "crno",
    temp: "16-18 C ",
    cijena: "40 Kn",
    opis: "Duboke rubin crvene boje, bistro i gusto s živahnim refleksijama. Kompleksnog aromatskog profila, izraženih mirisa maline i borovnice, ljubičice. Začinskih nota crvenog papra i aromatskog bilja poput ružmarina i kadulje. Na nepcu je izrazito mekano, gotovo mesnato, i sočno. Prilično trajno i ukusno.",
    posluzi: "uz teleća jetra na žaru, pečena pačja prsa s crvenim zeljem te sirevi poput stiltona i gorgonzole.",
    jelo1: require("@/assets/jelo1_merlot.jpg"),
    jelo2: require("@/assets/jelo2_merlot.jpg"),
    jelo3: require("@/assets/jelo3_merlot.jpg"),
    link1: "https://www.coolinarika.com/recept/teleca-jetrica-0655bfb8-638b-11eb-9ca9-0242ac120018",
    link2: "https://www.svakodnevno.me/2018/05/21/pacja-prsa-na-slatkom-crvenom-kupusu/",
    link3: "https://www.coolinarika.com/namirnica/gorgonzola-4048a4d0-610e-11eb-89ca-0242ac120023",
  },
]

export default {
  name: "Merlot",
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
