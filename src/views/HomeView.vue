<template>
<div class="container-fluid">
  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Product
</button>

    <div class="row">
    <div class="col" v-for ="product in products" v-bind:key="product.id">


  <!-- Modal For editing a product -->
<div class="modal fade" id="#editModal" tabindex="-1" aria-labelledby="exampleModalLabel" >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <form @submit.prevent="createProduct">
      <input class="register-form" type="text" v-model="sku" placeholder="sku" />
      <input class="register-form" type="text" v-model="name" placeholder="name" />
      <input class="register-form" type="text" v-model="price" placeholder="price" />
      <input class="register-form" type="text" v-model="anime_theme" placeholder="anime_theme" />
      <input class="register-form" type="text" v-model="descriptions" placeholder="descriptions" />
      <input class="register-form" type="text" v-model="category" placeholder="category" />
      <input class="register-form" type="text" v-model="stock" placeholder="stock" />
      <input class="register-form" type="text" v-model="product_catergory" placeholder="product_catergory" />
      <input class="register-form" type="text" v-model="image1" placeholder="image1-link" />
      <input class="register-form" type="text" v-model="image2" placeholder="image2-link" />
      <input class="register-form" type="text" v-model="image3" placeholder="image3-link" />
      <div>
      
      </div>
      <div class="modal-footer">
      </div>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary ">Add product</button>
    </form>
      </div>
      </div>
    </div>
  </div>

      <div class="card" style="width: 18rem;">
  <img v-bind:src="product.image1" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ product.name }}</h5>
    <p class="card-text">R{{ product.price }}</p>
    <router-link class="router-text" :to = "{ name: 'SingleProduct', params: { id: product.id }}">
    <a href="#" class="btn btn-primary">View Product</a>
    </router-link>
        <!-- <button  v-if="user.user_type === user.admin" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#editModal">Edit</button> -->
    <button @click="deleteProduct(product.id)" v-if="user_type === admin" class="btn btn-danger">Delete</button>
  </div>
</div>
    </div>
  </div>
 </div>


<!-- Modal For Adding a product -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <form @submit.prevent="createProduct">
      <input class="register-form" type="text" v-model="sku" placeholder="sku" />
      <input class="register-form" type="text" v-model="name" placeholder="name" />
      <input class="register-form" type="text" v-model="price" placeholder="price" />
      <input class="register-form" type="text" v-model="anime_theme" placeholder="anime_theme" />
      <input class="register-form" type="text" v-model="descriptions" placeholder="descriptions" />
      <input class="register-form" type="text" v-model="category" placeholder="category" />
      <input class="register-form" type="text" v-model="stock" placeholder="stock" />
      <input class="register-form" type="text" v-model="product_catergory" placeholder="product_catergory" />
      <input class="register-form" type="text" v-model="image1" placeholder="image1-link" />
      <input class="register-form" type="text" v-model="image2" placeholder="image2-link" />
      <input class="register-form" type="text" v-model="image3" placeholder="image3-link" />
      <div>
      
      </div>
      <div class="modal-footer">
      </div>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary ">Add product</button>
    </form>
      </div>
      </div>
    </div>
  </div>


</template>
<script>

export default {
computed: {
    product() {
      return this.$store.state.product;
    },
  },
  data() {
    return {
      products: null,
       sku: "",
      name: "",
      price: "",
      anime_theme: "",
      descriptions: "",
      category: "",
      create_date: "",
      stock: "",
      product_catergory: "",
      image1: "",
      image2: "",
      image3: "",

    };
  },
  methods: {
    createProduct() {
      this.$store.dispatch("createProduct", {
        sku: this.sku,
        name: this.name,
        price: this.price,
        anime_theme: this.anime_theme,
        descriptions: this.descriptions,
        category: this.category,
        create_date: this.create_date,
        stock: this.stock,
        product_catergory: this.product_catergory,
        image1: this.image1,
        image2: this.image2,
        image3: this.image3,
      });

    deleteProduct() 
      this.$store.dispatch("deleteProduct", {
        
      });
      
  
    },
  },

  mounted() {
    fetch("http://localhost:6969/products", {
    })
    .then ((res) => res.json())
    .then((data) => (this.products = data));

  },
};
</script>
<style scoped>
.container-fluid{
  margin-top: 5%;
  padding-top: 5%;
}

.row {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
}
.SB {
  margin-top: 53px;
  margin-left: 42vw;
  font-size: 21px;
  border: 0;
  outline:0;
  border-bottom: 2px solid black;
  width: 18%;
  font-size: 20px;
  background: transparent;
  color: black;
}
</style>
