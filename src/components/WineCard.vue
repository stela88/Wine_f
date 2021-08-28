<template>
  <div class="container px-4">
    <h1><img :src="info.logo" class="logo" />{{ info.ime }}</h1>
    <br />
    <div class="row gx-5">
      <div class="col">
        <img :src="info.slika" class="wine" />
        <br /><br />
        <form @submit.stop.prevent="submit">
            <div class="form-row">
              <div class="form-group col-md-12" id="kolicina">
                <label for="kolicina"><strong>Količina</strong></label>
                <input
                  name="kolicina"
                  class="form-control"
                  type="number"
                  placeholder="Količina"
                  v-model="kolicina"
                  v-bind:class="{
                    'form-control': true,
                    'is-invalid': !validKolicina(kolicina) && blured,
                  }"
                  v-on:blur="blured = true"
                />
                <div class="invalid-feedback">
                  <i class="fas fa-info-circle"></i> Unesite vrijednost između 1
                  butelje i 20 butelja vina.
                </div>
              </div>
            </div>
            <div class="buy justify-content-center">
              <button
                type="submit"
                href="#"
                class="button"
                v-bind:class="{
                  'form-control': true,
                  'is-valid': dodano && !neuspjeh,
                  'is-invalid': neuspjeh,
                }"
                v-on:blur="valid = false"
              >
                <i class="fas fa-shopping-cart"></i> Dodavanje u košaricu
              </button>
              <div class="valid-feedback">
                <i class="fas fa-info-circle"></i> Uspješno ste dodali narudžbu
                u košaricu!
              </div>
              <div class="invalid-feedback">
                <i class="fas fa-info-circle"></i> Ne možete staviti istu vrstu
                vina više puta dodati u košaricu!
              </div>
            </div>
          </form>
      </div>
      <div class="col border-left">
        <div class="text">
          <p>Boja: {{ info.boja }}</p>
          <p>Temperatura posluživanja: {{ info.temp }}</p>
          <p>Cijena: {{ info.cijena }}</p>
          <p>Opis: {{ info.opis }}</p>
          <p>Najbolje poslužiti uz: {{ info.posluzi }}</p>
        </div>
        <a :href="info.link1" target="_blank">
          <img :src="info.jelo1" class="jelo"
        /></a>
        <a :href="info.link2" target="_blank">
          <img :src="info.jelo2" class="jelo"
        /></a>
        <a :href="info.link3" target="_blank"
          ><img :src="info.jelo3" class="jelo"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "WineCard",
  data() {
    return {
      kolicina: "",
      blured: false,
      dodano: false,
      neuspjeh: false,
    };
  },
  props: ["info"],

  methods: {
    idPostoji(ime) {
      return store.addingToCart.some(function(el) {
        return el.ime === ime;
      });
    },
    addingToCart() {
      console.log(this.info.ime);
      if (!this.idPostoji(this.info.ime)) {
        let addingItem = {};
        addingItem = {
          kolicina: this.kolicina,
          cijena: 40 * this.kolicina,
          naslov: this.info.naslov,
          podnaslov: this.info.podnaslov,
          ime: this.info.ime,
          slika: this.info.slika,
          glavniID: Math.random(),
        };
        console.log("Item added");
        store.addingToCart.push(addingItem);
        store.cartNumber += 1;
        store.konacnaCijena += addingItem.cijena;
      } else {
        this.neuspjeh = true;
      }
    },
    validate: function() {
      this.blured = true;
      if (this.validKolicina(this.kolicina)) {
        this.dodano = true;
        this.valid = true;
      }
    },

    validKolicina: function(kolicina) {
      return kolicina >= 1 && kolicina <= 20;
    },

    submit: function() {
      this.validate();
      if (this.valid) {
        this.addingToCart();
      }
    },
  },
};
</script>


<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.row gx-5 {
  margin-right: 90px;
  display: flex;
  flex-wrap: wrap;
}
.logo {
  margin-right: 20px;
}
.col {
  max-width: 100%;
}
.text {
  padding-top: 10px;
  text-align: left;
}
.jelo {
  padding: 5px;
  width: 170px;
  height: 170px;
  border-radius: 20px;
  object-fit: cover;
}
.wine {
  width: 400px;
  border-radius: 20px;
}
p {
  padding: 3px;
}
h1 {
  color: aliceblue;
  padding: 1px;
  margin-top: -70px;
  margin-bottom: 30px;
  margin-left: -30px;
}
.logo {
  width: 50px;
  height: 50px;
}
button {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width:78%;
  background-color: white;
  border-radius: 20px;
  border-color: white;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  color: rgb(144 104 104);
  margin-bottom: 40px;
}

a:visited {
  color: white;
}

p {
  color: white;
}

@media screen and (max-width: 992px) {
  .col {
    flex: 50%;
  }
  .h1 {
    flex: 50%;
  }
}

@media screen and (max-width: 600px) {
  .row {
    flex-direction: column;
    position: center;
    padding-right: 90px;
  }
  h1 {
    position: center;
    padding-left: 90px;
  }
}

#kolicina{
  padding-left: 55px;
  padding-right: 55px;
  color:rgb(144 104 104);
}
</style>