<template>
  <b-card
    :title="card.groupes"
    :img-src="card.img_group"
    img-top
    style="min-width: 20rem"
    class="mb-2"
  >

  <b-card-text >{{card.groupes}}</b-card-text>
    <!-- <b-card-text>{{card.img_group}}</b-card-text>
    -->
    <!-- <b-card-text>{{card}}</b-card-text>
 -->
  <g-link :to="'kamaz/'+card.en_groupes_lower"> {{card.en_groupes_lower}}</g-link>
    <b-button :to="'kamaz/'+card.en_groupes_lower">Каталог</b-button>
  </b-card>
</template>

<script>
export default {
  methods:{
    test(){
      console.log(card.en_groupes_lower)
    }

  },
  name: "Card",
  props: {
    card: Object,
  },

  // computed: {
  //   img() {
  //     return require("@/assets/images/Rustem.jpg");
  //   },
  // },
};
</script>
<style>
h4.card-title {
    min-height: 4rem;
}
</style>