<template>
  <div class="kosarica">
     <h1><img src="../assets/logo2.png" class="logo">KOŠARICA</h1>
      <br><br><br>
     <router-link to="/Malvazija">
    <img alt="Malvazija" src="../assets/malvazija.jpg" class="vino_u_kosarici"> </router-link> 
    <p>Malvazija</p>

    <p><button class="kolicina">-</button>  1  <button class="kolicina">+</button></p>

    <br><br><br><br><br>

    <h4>Vaša košarica trenutno iznosi: 40 Kn</h4>
    <br>
    <button class="kupi">Kupi</button>
  </div>
</template>


<style>
.vino_u_kosarici{
  width:  250px;
  height: auto;
  border-radius: 100px;
  object-fit: cover;
}

p{
  color:white;
  font-size: 20px;
}

.logo{
  width: 50px;
  height: 50px;
}

.kolicina{
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 20px;
  border-color: white;
  color: white;
  text-align: center;
  font-size: 16px;
  color: #b71c1c;
}

.kupi{
  width:120px;
  background-color: #72aee6;
  font-size: 20px;
  border-radius: 15px;
  border: 2px solid #72aee6;
}
h4{
  color:rgb(175, 175, 175);
}

</style>