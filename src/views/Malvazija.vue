<template>
  <body>
     <meta name="viewport" content="width=device-width, initial-scale=1">
    <div class="container px-4">
     <h1><img src="../assets/logo2.png" class="logo">MALVAZIJA</h1>
     <br>
      <!-- <div class="dodaj">
  <button>dodaj u košaricu</button>
  <br> 
  </div>-->
  <div class="row gx-5">
    <div class="col">
        <img alt="Malvazija" src="../assets/malvazija_crna.jpg" class="malvazija">
    </div>
    <div class="col border border-light">
      <div class = "text">
        <p>Boja: bijelo</p>
        <p>Temperatura posluživanja: 6-8 C</p>
        <p>Cijena: 40 Kn</p>
        <p>Opis: vino kompleksnih aroma; cvijeta akacije, limuna, zrele breskve i manga. Na nepcu je veoma svježe i mekano, elegantnog i trajnog okusa. Na retro okusu, prisutna blaga gorčina zelenog badema.</p>
        <p>Najbolje poslužiti uz:
        carpaccio od brancina sa limunom, rukolom, bijelim paprom i cvijetom soli, rižoto s kozicama i tikvicama, fritaja sa šparugama i pancetom</p>
        </div>
        <a href="https://cromaris.com/hr/recept/carpaccio-od-velikog-brancina/"> <img alt="1" src="../assets/jelo1_malvazija.jpg" class="jelo"></a>
         <a href="https://www.coolinarika.com/recept/rizoto-s-tikvicama-i-kozicama-b9a0aafe-6446-11eb-9714-0242ac120062"> <img alt="2" src="../assets/jelo2_malvazija.jpg" class="jelo"></a>
           <a href="https://www.coolinarika.com/recept/fritaja-sa-sparogama-90ee9558-6388-11eb-946d-0242ac12002d"><img alt="3" src="../assets/jelo3_malvazija.jpg" class="jelo"></a>
    </div>
  </div>
</div>
  </body>
</template>

<style>
* {
  box-sizing: border-box;
}
.row{
  margin-right: 90px;
  display: flex;
  flex-wrap: wrap;
}
.col{
  max-width: 90%;
  margin-right: 30px;
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
.malvazija{
  width:350px;
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