<template>
<body>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <br>
  <div>
<home-card
            v-for="(card, drac) in cards1"
            :key="drac"
            :info="card" 
            :info1="card"
          />
        

      <div class="col-6"><home-card
            v-for="(card, drac) in cards1"
            :key="drac"
            :info="card"
          /></div>
          </div>
         
</body>
</template>


<script>
import HomeCard from "../components/HomeCard.vue";
//import { HomeCard } from "@/services";      --iz service/index.js



// let cards2 = [];

// cards1 = [
//   {
//     img: require("@/assets/malvazija.jpg"),
//     description: "Malvazija",
//     page: "/Malvazija",
//   },
//   {
//     img: require("@/assets/rose.jpg"),
//     description: "Rose",
//     page: "/Rose",
//   }, 
//   {
//     img: require("@/assets/brut.jpg"),
//     description: "Brut",
//     page: "/Brut",
//   },
//   {
//     img: require("@/assets/merlot.jpg"),
//     description: "Merlot",
//     page: "/Merlot",
//   },  
// ];

// cards2 = [
//   {
//     img: require("@/assets/chardonnay.jpg"),
//     description: "Chardonnay",
//     page: "/Chardonnay",
//   },
//   {
//     img: require("@/assets/teran.jpg"),
//     description: "Teran",
//     page: "/Teran",
//   },
//   {
//     img: require("@/assets/cabernet_sauvignon.jpg"),
//     description: "Cabernet Sauvignon",
//     page: "/Cabernet_Sauvignon",
//   },
  

//]

export default {
  name: 'Home',
  data(){
    return{
      cards1: [],
    }
  },
mounted(){

    
fetch("http://localhost:3330/pocetna1")
    .then(r => {
     return r.json()
    })
    .then(data => {
    console.log("Podaci s backenda", data)

    this.cards1 = data.map(element => {
      return {
        img: element.slika,
        description: element.ime,
        page: element.stranica,
      }
    })

  
   })

},


// fetch("http://localhost:3330/pocetna2")
//     .then(p => {
//      return p.json()
//     })
//     .then(data => {
//     console.log("Podaci s backenda", data)

//     this.cards2 = data.map(element => {
//       return {
//         img: element.slika,
//         description: element.ime,
//         page: element.stranica
//       }
//     })
//    })
   

  
  components: {
    HomeCard
  }
  
}
</script>

<style lang="scss">
body {
  background-color:#1d2327;
  padding: 30px;
  text-align: center;
  position: center;
}
* {
  box-sizing: border-box;
}
.homecard {
  text-align: center;
  position: initial;
  color: white;
  padding-bottom: 50px;
}

@media screen and (max-width: 992px) {
  .col-6  {
    flex: 50%;
    max-width: none;
  }
}

@media screen and (max-width: 600px) {
  .row {
    flex-direction: column;
    padding-left: 50px; 
  }
  .homecard{
   position:inherit;
  }
}

.vino {
    width: 350px;
    height: auto;
    border-radius: 100px;
    object-fit: cover;
}

.p{
 margin-top: 200x;
}



</style>
