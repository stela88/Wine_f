<template>
    <div>
        <p class="main">Sortiraj po boji</p>
        <button type="button" class="btn btn-dark"><p>bijelo</p></button><br>
        <button type="button" class="btn btn-dark"><p>crno</p></button><br>
        <button type="button" class="btn btn-dark"><p>rose</p></button><br><br>

        <p class="main">Sortiraj po temperaturi</p>
        <button type="button" class="btn btn-dark"><p>5-7 C</p></button><br>
        <button type="button" class="btn btn-dark"><p>6-8 C</p></button><br>
        <button type="button" class="btn btn-dark"><p>16-18 C</p></button>
    </div>
</template>

<style scoped>
.main{
    color:#e4bcbc;
    font-size: 30px;
    font-family:Georgia, 'Times New Roman', Times, serif;
}
p{
    color:#e4bcbc;
    font-size: 20px;
    font-family:Georgia, 'Times New Roman', Times, serif;
}
button{
    text-emphasis-color: white;
    width: 70%;
    background-color: #1d2327;
    box-decoration-break:slice;
}

</style>

<script>
import HomeCard from "../components/HomeCard.vue";
import { Posts } from "@/services";
//--iz service/index.js

let cards = [];

export default {
  name: "Home",
  data() {
    return {
      cards,
    };
  },
  async mounted() {

//trenutno ne radi ali ovo je dohvat prema id-u
    //console.log(this.id);
    //this.cards = await Posts.getOne(this.id);
//   var bijelovino;

//         fetch("http://localhost:3330/posts/bijelo")
//           .then((r) => {
//             return r.json();
//           })
//           .then((data=bijelovino) =>{
//             console.log("Podaci s backenda", data);

//             this.cards=data.map((element) => {
//               return {
//                 img: element.slika,
//                 description: element.ime,
//                 page: element.stranica,
//                 color: element.boja
//               };
//             });
//           });
  },

  components: {
    HomeCard,
  },
};
</script>