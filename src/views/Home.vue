<template>
<body>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <br>
  <div class="row">
      
  <div class="col-6">
     <router-link to="/Malvazija">Home
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

  
</div>
</body>
</template>


<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>

body {
  background-color:#1d2327;
  padding: 30px;
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
    position: center; 
  }
  p{
    text-align: center;
  }
}
.vino {
    width:  300px;
    height: auto;
    border-radius: 40px;
    object-fit: cover;
}



</style>
