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
