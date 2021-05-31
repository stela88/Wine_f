<template>
<body>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <br>
<div class="row">
    <div class="col-6"><home-card
            v-for="(card, drac) in cards1"
            :key="drac"
            :info="card"
          /></div>

      <div class="col-6"><home-card
            v-for="(card, drac) in cards2"
            :key="drac"
            :info="card"
          /></div>
          </div>
         
</body>
</template>


<script>
import HomeCard from "../components/HomeCard.vue";

let cards1 = [];
let cards2 = [];

cards1 = [
  {
    img: require("@/assets/malvazija.jpg"),
    description: "Malvazija",
    page: "/Malvazija",
  },
  {
    img: require("@/assets/rose.jpg"),
    description: "Rose",
    page: "/Rose",
  },   
];

cards2 = [
   {
    img: require("@/assets/chardonnay.jpg"),
    description: "Chardonnay",
    page: "/Chardonnay",
  },

]

export default {
  name: 'Home',
  data(){
    return{
      cards1,
      cards2
    }
  },
  mounted(){
  fetch("http://localhost:3330/artikli")
    .then(r => {
     return r.json()
    })
    .then(data => {
    console.log("Podaci s backenda", data)

    let data2 = data.map(element => {
      return {"novo": element}
    })

    console.log("novo", data2)
   })
  },
  components: {
    HomeCard
  }
  
}
</script>

<style>

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
  .col-6 img {
    flex: 50%;
  }
}

@media screen and (max-width: 600px) {
  .homecard {
    flex-direction: column;
    padding-left: 50px; 
  }
  p{
    padding-left: 120px;
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
