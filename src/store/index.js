import { createStore } from "vuex";

// const jwt = require('jsonwebtoken');
import router from "@/router";

export default createStore({  
  state: {
    users: null,
    Products: null,
    Product: null,
    authModal:{
      visibility:false
    },
    callbackAction: {
      name: null,
      payload: null
    },
    addProductToCart({ dispatch }, payload) {
      if (userNotLoggedIn) {
        dispatch(
          "AuthModal/showAuthModal",
          {
           callbackAction: {
            name: "CheckoutModule/addProductToCart",
            payload
           }
          },
          { root:true }
        )
      }
        return axios.post(
        'https://e-com-back-end-work.herokuapp.com/users',
        payload
      )
    }
  },
  getters: {},
  mutations: {
    setusers: (state, users) => {
      state.users = users;
    },
    setProducts: (state, Products) => {
      state.Products = Products;
    },
    setProduct: (state,Product) => {
      state.ProdProduct = Product;
    },
    UPDATE_AUTH_MODAL_VISIBILITY(state, payload) {
      state.authModal.visibility = payload.visibility;
    }
  },
  actions: {
    logout: async (context) => {
      context.commit("setusers", null);
      window.location = "/login";
    },
    login: async (context, data) => {
      const { email, password } = data;
      const response = await fetch(
        `http://localhost:6969/users/`
      );
      const usersData = await response.json();
      console.log(usersData);
      context.commit("setusers", usersData[0]);
      // router.push("/Products");
    },
        // REGISTER USER
        register: async (context, user) => {
          fetch("http://localhost:6969/users/register", {
            method: "POST",
            body: JSON.stringify(user),
    
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
    
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((json) => context.commit("setUser", json));
        },

        // get products
    getProducts: async (context) => {
      fetch("http://localhost:6969/products")
        .then((res) => res.json())
        .then((Products) => {context.commit("setProducts", Products)});
    },
    // getProduct: async (context, id) => {
    //   fetch("https://e-com-back-end-work.herokuapp.com/products" + id)
    //     .then((res) => res.json())
    //     .then((Product) => context.commit("setProduct", Product));
    // },
    deleteProduct: async (context, id) => {
      fetch("http://localhost:6969/products/" + id, {
        method: "DELETE",
      }).then(() => context.dispatch("getProducts"));
    },
    createProduct: async (context, Product) => {
      fetch("http://localhost:6969/products", {
        method: "POST",
        body: JSON.stringify(Product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getProducts"));
    },
    updateProduct: async (context, Product) => {
      fetch("http://localhost:6969/products" + Product.id, {
        method: "PUT",
        body: JSON.stringify(Product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getProducts"));
    },
    showAuthModal({ commit }) {
      commit("UPDATE_AUTH_MODAL_VISIBILITY", {visibility: true});
    },
    hideAuthModal({ commit }){
      commit("UPDATE_AUTH_MODAL_VISIBILITY", { visibility: false });
    }
    },
  modules: {},
});