<template>
  <div class="regis-page">
    <h1>If You Are Not A User Please Register ...</h1>
      <div class="container">
    <form @submit.prevent="register">
      <input class="register-form" type="text" v-model="full_name" placeholder="Full Name" />
      <input class="register-form" type="text" v-model="email" placeholder="Email" />
      <input class="register-form" type="text" v-model="password" placeholder="Password" />
      <input class="register-form" type="text" v-model="billing_address" placeholder="billing_address" />
      <input class="register-form" type="text" v-model="default_ashipping_address" placeholder="default_ashipping_address" />
      <input class="register-form" type="text" v-model="country" placeholder="country" />
      <input class="register-form" type="text" v-model="phone" placeholder="phone" />
      <input class="register-form" type="text" v-model="user_type" placeholder="user_type" />
      <div>
      <button id="register-btn" type="submit">Register</button>
      </div>
    </form>
    </div>
    <div v-if="user">Welcome {{ user.full_name }}</div>
  </div>
</template>
 <script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      full_name: "",
      email: "",
      password: "",
      billing_address: "",
      default_shipping_address: "",
      country: "",
      phone: "",
      user_type: "",
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", {
        full_name: this.full_name,
        email: this.email,
        password: this.password,
        billing_address: this.billing_address,
        default_shipping_address: this.default_shipping_address,
        country: this.country,
        phone: this.phone,
        user_type: this.user_type,
      });
    },
  },


};
</script> 
<style scoped>
h1 {
  display: flex;
  justify-content: center;
  padding-top: 100px;
}
.regis-page[data-v-63ae9146] {
    height: 150vh;
}

.container[data-v-63ae9146] {
    width: 350px;
    height: auto;
    background-color: rgba(167, 165, 196, 0.3);
    backdrop-filter: blur(3px);
    border: 2px solid white;
    border-radius: 10px;
    background-clip: padding-box;
    margin: auto;
    margin-top: 5%;
}



.register-form{
  margin: 35px;
    border: 0;
  outline:0;
  border-bottom: 2px solid white;
  width: 50%;
  font-size: 20px;
  background: transparent;
  /* color: white; */
}

#register-btn {
  margin: 35px;
  background: transparent;
  border: none;
  font-weight: bolder;
  font-size: 20px;
}
</style>
