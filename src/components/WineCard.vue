<template>
    <div class="winecard">
    <div class="container px-4">
     <h1><img :src="info.logo" class="logo">{{info.ime}}</h1>
     <br>
  <div class="row gx-5">
    <div class="col">
        <img :src="info.slika" class="wine">
        <br><br>
         <router-link to="/Kosarica">
     <button>Dodaj u košaricu</button>
      </router-link> 
    </div>
    <div class="col border border-light">
      <div class = "text">
        <p>Boja: {{info.boja}}</p>
        <p>Temperatura posluživanja: {{info.temp}}</p>
        <p>Cijena: {{info.cijena}}</p>
        <p>Opis: {{info.opis}}</p>
        <p>Najbolje poslužiti uz:
        {{info.posluzi}}</p>
        </div>
        <a href="https://cromaris.com/hr/recept/carpaccio-od-velikog-brancina/"> <img :src="info.jelo1" class="jelo"></a>
         <a href="https://www.coolinarika.com/recept/rizoto-s-tikvicama-i-kozicama-b9a0aafe-6446-11eb-9714-0242ac120062"> <img :src="info.jelo2" class="jelo"></a>
           <a href="https://www.coolinarika.com/recept/fritaja-sa-sparogama-90ee9558-6388-11eb-946d-0242ac12002d"><img  :src="info.jelo3" class="jelo"></a>
    </div>
  </div>
</div>
    </div>
</template>

<script>
export default {
    props: ["info"],
    name: "WineCard",
};
</script>

<style>
* {
  box-sizing: border-box;
}
.row gx-5{
  margin-right: 90px;
  display: flex;
  flex-wrap: wrap;
}
.col{
  max-width: 90%;
  margin-right: 30px;
  margin-bottom: 40px;
}
.col.border.border-light{
max-width: 800px
}
.text{
    padding-top: 10px;
    text-align: left;  
}
.jelo {
    padding: 5px;
    width:  170px;
    height: 170px;
    border-radius: 20px;
    object-fit: cover;
}
.wine{
  width:400px;
  border-radius: 20px;
}
p{
  padding: 3px;
}
h1{
  color: aliceblue;
  padding: 1px;
}
.logo{
  width: 50px;
  height: 50px;
}
button{
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-radius: 20px;
  border-color: white;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  color: #b71c1c;
  margin-bottom: 40px;
  
}


p{
  color: white;
}


@media screen and (max-width: 992px) {
  .col{
    flex: 50%;
  }
  .h1{
    flex: 50%
  }
}

@media screen and (max-width: 600px) {
  .row {
    flex-direction: column;
    position: center; 
    padding-right: 90px;
  }
  h1{
    position: center;
    padding-left:90px;
  }
}
</style>