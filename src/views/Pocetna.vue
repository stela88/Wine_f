<template>
<body>
     <div class="pocetna">
         <h1>Ukoliko ste ljubitelj <br>kvalitetnih vina, na pravom <br>ste mjestu!</h1>
     <img alt="Logo vina" src="../assets/logovina.png"> <br>
      <button><router-link to="/Home" class="link">
     Pogledaj ponudu
      </router-link></button> 
  </div>
</body>
</template>

<script>
export default {
  name: 'Pocetna',
}
</script>

<style>

body {
  background-color: #161616;
}
h1{
    color: aliceblue;
    text-align: center;
    font-family:  "Times New Roman", Times, serif;;
}
img{
   display: block;
  margin-left: auto;
  margin-right: auto;
    width:300px;   
}
button{
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-radius: 20px;
  border-color: white;
  color: white;
  padding: 15px 32px;
  text-align: center;
}
a.link{
  font-size: 16px;
  color: #b71c1c;
  text-decoration: none;
}




</style>
