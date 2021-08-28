<template>
  <li class="list-group-item d-flex justify-content-between lh-condensed">
    <div>
      <h6 class="my-0">{{ checkoutCartInfo.naslov }}</h6>
      <small class="text-muted"
        >Kolicina: {{ checkoutCartInfo.kolicina }}</small
      >
    </div>
    <span class="text-muted">{{ checkoutCartInfo.cijena.toFixed(2) }}kn</span>
  </li>
</template>

<script>
export default {
  name: "CheckoutCartItem",
  data() {
    return {};
  },
  props: ["checkoutCartInfo"],
};
</script>
