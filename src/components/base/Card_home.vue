<template>
  <b-card
    :title="card.groupes"
    :img-src="card.ImgTipe"
    img-top
    style="width: 20rem; "
    class="mb-2"
  >
  
    <!-- <b-card-text>{{card.img_group}}</b-card-text>
    -->
    <!-- <b-card-text>{{card}}</b-card-text>
 -->
 <b-card-text>{{card.full_name}}</b-card-text>
    <b-button :to="card.EnTipeLower">Каталог</b-button>
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
<style scoped>


h4.card-title {
    min-height: 4rem;
}
img.card-img-top {
    min-height: 22rem;
}
</style>