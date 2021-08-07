<template>
  <body>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <br />
    
    <div>
      <home-card
        class="p-2"
        v-for="(card, drac) in cards"
        :key="drac"
        :info="card"
      />
    </div>
  </body>
</template>


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
    // HomeCard.getAll()
    // .then(response => {
    //   let data = response.data
    //   console.log("Podaci s backenda", data)

    //     this.cards1 = data.map(element => {
    //       return {
    //         img: element.slika,
    //         description: element.ime,
    //         page: element.stranica
    //       }
    //     })
    // })


//trenutno ne radi ali ovo je dohvat prema id-u
    //console.log(this.id);
    //this.cards = await Posts.getOne(this.id);

    fetch("http://localhost:3330/posts")
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        console.log("Podaci s backenda", data);

        this.cards = data.map((element) => {
          return {
            img: element.slika,
            description: element.ime,
            page: element.stranica,
          };
        });
      });
  },
  components: {
    HomeCard,
  },
};
</script>

<style lang="scss">
body {
  background-color: #1d2327;
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
  .col-6 {
    flex: 50%;
    max-width: none;
  }
}

@media screen and (max-width: 600px) {
  .row {
    flex-direction: column;
    padding-left: 50px;
  }
  .homecard {
    position: inherit;
  }
}

.vino {
  width: 350px;
  height: auto;
  border-radius: 100px;
  object-fit: cover;
}

.p {
  margin-top: 200x;
}
</style>
