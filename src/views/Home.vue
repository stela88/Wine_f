<template>
<body>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <br>
  <div class="row">
      
  <div class="col-6">
     <router-link to="/Malvazija">
    <img alt="Malvazija" src="../assets/malvazija.jpg" class="vino"> </router-link> 
    <p>Malvazija</p></div>

    <div class="col-6">
      <img alt="Chardonnay" src="../assets/chardonnay.jpg" class="vino">
    <p>Chardonnay</p></div>

 
  <div class="w-100"></div>
    
  <div class="col-6">
    <img alt="Rose" src="../assets/rose.jpg" class="vino">
    <p>Rose</p></div>
    
    <div class="col-6">
      <img alt="Teran" src="../assets/teran.jpg" class="vino">
    <p>Teran</p></div>

    <div><home-card
            v-for="(card, drac) in cards"
            :key="drac"
            :info="card"
          /></div>

  

</div>
</body>
</template>


<script>
import HomeCard from "../components/HomeCard.vue";

let cards = [];

cards = [
  {
    img: require("@/assets/malvazija.jpg"),
    description: "Malvazija",
    page: "/Malvazija",
  },
  {
    img: require("@/assets/chardonnay.jpg"),
    description: "Chardonnay",
    page: "/Chardonnay",
  },
  // {
  //   img: require("@/assets/cuganja.png"),
  //   description: "Cuganja",
  //   page: "/Cuganja",
  // },
  // {
  //   img: require("@/assets/sportovi.jpg"),
  //   description: "Sportovi",
  //   page: "/Sportovi",
  // },
  // {
  //   img: require("@/assets/online.jpg"),
  //   description: "Online",
  //   page: "/Online",
  // },
];
export default {
  name: 'Home',
  data(){
    return{
      cards,
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
}
* {
  box-sizing: border-box;
}
.row {
  display: flex;
  flex-wrap: wrap;
  position:absolute;
  text-align: center;
  color: white;
}
.col-6 img{
  margin: auto;    
  display: block;
  flex: 25%;
  padding: 20px;
}

@media screen and (max-width: 992px) {
  .col-6 img {
    flex: 50%;
  }
}

@media screen and (max-width: 600px) {
  .row {
    flex-direction: column;
    padding-left: 50px; 
  }
  p{
    padding-left: 120px;
  }
}

.vino {
    width:  300px;
    height: auto;
    border-radius: 100px;
    object-fit: cover;
}



</style>
