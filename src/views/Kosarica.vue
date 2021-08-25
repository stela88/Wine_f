<template>
  <div class="container">
    <!--Section: Block Content-->
    <section>
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-lg-8">
          <!-- Card -->
          <div class="mb-3">
            <div class="pt-4 wish-list">
              <h5 class="mb-4">
                <strong>Košarica {{ brojStvariUKosarici }}</strong>
              </h5>
              <hr class="mb-4" />
              <cart-item
                v-for="addingToCart in store.addingToCart"
                :key="addingToCart.ime"
                :cartInfo="addingToCart"
              />
              <br />
              <p class="text-primary mb-0" style="color: #daa520 !important">
                <i class="fas fa-info-circle mr-1"></i> Dodavanje u košaricu ne
                znači da su vaša vina rezervirana. Ne čekajte dugo!
              </p>
            </div>
          </div>
          <!--           -->

          <!-- Card -->
          <div class="mb-3">
            <div class="pt-4">
              <h5 class="mb-4">Očekivani datum dostave:</h5>

              <p class="mb-0" v-if="store.cartNumber > 0">
                {{ datumIsporukeOD }} - {{ datumIsporukeDO }}
              </p>
            </div>
          </div>
          <!-- Card -->

          <!-- Card -->
          <div class="mb-3">
            <div class="pt-3">
              <h5 class="mb-4">Primamo:</h5>

              <img
                class="mr-2"
                width="45px"
                src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                alt="Visa"
              />
              <img
                class="mr-2"
                width="45px"
                src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                alt="Mastercard"
              />
              <img
                class="mr-2"
                width="45px"
                src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                alt="PayPal acceptance mark"
              />
            </div>
          </div>
          <!-- Card -->
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-4">
          <!-- Card -->
          <div class="mb-3 sticky-top">
            <div class="pt-4">
              <h5 class="mb-3">Ukupni iznos</h5>

              <ul class="list-group list-group-flush">
                <li
                  class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"
                >
                  Cijena
                  <span>{{ store.konacnaCijena.toFixed(2) }} kn</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center px-0"
                >
                  Dostava
                  <span>+{{ cijenaDostave }} kn</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3"
                >
                  <div>
                    <strong>Ukupna cijena</strong>
                    <strong>
                      <p class="mb-0">(sa PDV-om)</p>
                    </strong>
                  </div>
                  <span
                    ><strong
                      >{{
                        (store.konacnaCijena + cijenaDostave).toFixed(2)
                      }}
                      kn</strong
                    ></span
                  >
                </li>
              </ul>
              <router-link to="/checkout">
                <button type="button" class="btn btn-primary btn-block">
                  Nastavak na plaćanje
                </button></router-link
              >
              <hr class="mb-2" />
              <p class="small mb-0" style="color: #999 !important; ">
                <i class="fas fa-info-circle mr-1"></i>
                Za narudžbe iznad 200kn besplatna dostava vina!
              </p>
            </div>
          </div>
          <!-- Card -->
          <!-- Card -->
        </div>
        <!--Grid column-->
      </div>
      <!-- Grid row -->
    </section>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";
import store from "@/store";
import moment from "moment";

export default {
  name: "ShoppingCart",
  data() {
    return {
      store,
      quantity: 1,
      datum: "",
      moment,
    };
  },
  components: {
    CartItem,
  },
  methods: {},
  computed: {
    datumIsporukeOD() {
      moment.locale("hr");
      let datum = Date.now();
      return moment(datum)
        .add(7, "days")
        .format("D. MMMM. YYYY");
    },
    datumIsporukeDO() {
      moment.locale("hr");
      let datum = Date.now();
      return moment(datum)
        .add(10, "days")
        .format("D. MMMM. YYYY");
    },
    brojStvariUKosarici() {
      if (store.cartNumber > 1) {
        return "(" + store.cartNumber + " odabira)";
      } else if (store.cartNumber == 1) {
        return "(" + store.cartNumber + " odabir)";
      }
    },
    cijenaDostave() {
      if (store.konacnaCijena <= 200 && store.konacnaCijena != 0) {
        return 50;
      } else return 0;
    },
  },
};
</script>
<style scoped>
button {
  background: #f5f5f5;
  color: white;
  font-size: 12px;
  cursor: pointer;
  background: #daa520;
}
.container {
  background-color: white;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 15px;
  padding: 50px;
}
</style>
