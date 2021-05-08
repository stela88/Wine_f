<template>
<body>
  <div class="row">
     <div class="col-2"></div>
      
  <div class="col-4">
    <img alt="Malvazija" src="../assets/malvazija.jpg" class="vino"><br>
    <div class="text1">Malvazija</div></div>

    <div class="col-4">
      <img alt="" src="../assets/chardonnay.jpg" class="vino"><br>
    <div class="text1">Chardonnay</div></div>

    <div class="col-2"></div>
 
  <div class="w-100"></div>
      <div class="col-2"></div>
      
  <div class="col-4">
    <br><br>
    <img alt="Malvazija" src="../assets/rose.jpg" class="vino"><br>
    <div class="text2">Rose</div></div>
    
    <div class="col-4">
      <br><br>
      <img alt="" src="../assets/teran.jpg" class="vino"><br>
    <div class="text2">Teran</div></div>


  <!-- <div class="col">col</div>
  <div class="col">col</div> -->
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
}
.row{
   margin-left: 120px;
}
.text1{
  color: white;
  padding-left: 90px; 
}
.text2{
  color: white;
  padding-left: 110px; 
}
.vino {
    /* float: left; */
    width:  250px;
    height: 250px;
    border-radius: 40px;
    object-fit: cover;
}



</style>
