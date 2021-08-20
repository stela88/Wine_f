<template>
    <div>
        <p class="main">Sortiraj po boji</p>
        <button type="button" class="btn btn-dark" @click="goToBijelo()"><p>bijelo</p></button><br>
        <button type="button" class="btn btn-dark" @click="goToCrno()"><p>crno</p></button><br>
        <button type="button" class="btn btn-dark" @click="goToRose()"><p>rose</p></button><br><br>

        <p class="main">Sortiraj po temperaturi</p>
        <button type="button" class="btn btn-dark" @click="goToTemp1()"><p>5-7 C</p></button><br>
        <button type="button" class="btn btn-dark" @click="goToTemp2()"><p>6-8 C</p></button><br>
        <button type="button" class="btn btn-dark" @click="goToTemp3()"><p>16-18 C</p></button>
    </div>
</template>


<script>
export default {
  name: "Sort",

  methods:{
   goToBijelo(){
   this.$router.push('/Bijelo'); 
   },

   goToCrno(){
   this.$router.push('/Crno'); 
   },

   goToRose(){
   this.$router.push('/RoseSort'); 
   },

   goToTemp1(){
   this.$router.push('/Temp5-7'); 
   },

   goToTemp2(){
   this.$router.push('/Temp6-8'); 
   },

   goToTemp3(){
   this.$router.push('/Temp16-18'); 
   }
  }
}
</script>


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
    background-color:#080808;
    box-decoration-break:slice;
}

</style>

