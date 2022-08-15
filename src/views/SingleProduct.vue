<template>
<div class="container ">
    <div v-for ="product in product"
      v-bind:key="product.id"> 
<div class="card" style="width: 18rem;">
  <img  v-bind:src="product.image1" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ product.name }}</h5>
    <p class="card-text">{{ product.descriptions }}</p>
    <p class="card-text">R{{ product.price }}</p>
    <div class="my_btn">


    </div>
  </div>
</div>
  </div>
  </div>
</template>
<script>

export default {

  //    },
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    fetch("http://localhost:6969/products/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => (this.product = data));

      console.log(this.product);
  },
};
</script>
<style>

.container{
    display: flex;
    justify-content: center;
    max-height: 100%;
    margin-top: 4%;
    padding-top: 4%;
}

    .onecard{
      padding: 50px;
    }

    .img-fluid {
    max-width: 500px;
    height: auto;
}
 .my_btn {
    display: flex;
    justify-content: space-around;
} 
</style>