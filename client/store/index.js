import Vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase/app'
import 'firebase/auth'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: '',
      account: null,
      products: [],
      cart: [],
    },

    getters: {
      user(state) {
        return state.user
      },

      // open some place for this big G
      cartItemCount: (state) => {
        return state.cart.length;
      },
      
      // use this in the shopping cart drawer
      cartTotalPrice: (state) => {
        let total = 0

        state.cart.forEach(item => {
          total = item.product.price * item.quantity
        })

        return total
      },

      isAuthenticated(state) {
        return !!state.user
      },

      cartSize: (state) => {
        return state.cart.length
      },
      cartTotalAmount: (state) => {
        return state.cart.reduce((total, product) => {
          return total + product.price * product.quantity
        }, 0)
      },
      toast: (state) => {
        return state.toast
      },
    },

    mutations: {
      setUser(state, payload) {
        state.user = payload
      },
      setUpProducts: (state, productsPayload) => {
        // sets the state's  products property to the products array recieved as payload
        state.products = productsPayload
      },
      // set products in store states as array
      setProducts: (state, products) => {
        state.products = products
      },
      AddToCart: (state, { product, quantity }) => {
        const productInCart = state.cart.find(item => item.product._id === product._id)

        console.log(productInCart);

        if(productInCart){
          productInCart.quantity += quantity
          return
        }

        state.cart.push({
          product,
          quantity
        })
      },
      removeProduct: (state , product) =>{
        state.cart = state.cart.filter(item => {
          return item.product._id !== product._id
        })
      } 
    },
    actions: {
      //  fetching the products from server side passing to set products mutaions
      getProducts: ({ commit }) => {
        axios.get('http://localhost:4000/api/products').then((response) => {
          console.log(response.data.products[5].productImage)
          commit('setProducts', response.data.products)
        })
      },
      addProductToCart: ({ commit }, { product, quantity }) => {
        commit('AddToCart', { product, quantity })

        axios.post('http://localhost:4000/api/orders' , {
          product: product._id,
          quantity
        })
      },

      removeCartProduct: ({commit}, product) => {
        commit('removeProduct' , product)
      },

      
      signUp({ commit }, { email, password, name }) {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(email, password, name)
      },

      signInWithEmail({ commit }, { email, password }) {
        return firebase.auth().signInWithEmailAndPassword(email, password)
      },

      signOut() {
        return firebase.auth().signOut()
      },
      //   fetchProducts: ({ commit }) => {
      //     // simulating a fake ajax request to fetch products from database
      //     myApi.getProducts().then((products) => {
      //       // passing the products recieved from response as a payload to the mutation
      //       commit('setUpProducts', products)
      //       commit('showToast', 'products loaded')
      //     })
      //   },
      //   addToCart: ({ commit }, productId) => {
      //     myApi.products('add', productId).then((productId) => {
      //       commit('addToCart', productId)
      //       commit('showToast', 'added to cart')
      //     })
      //   },
      //   removeFromCart: ({ commit }, productId) => {
      //     myApi.products('remove', productId).then((productId) => {
      //       commit('removeFromCart', productId)
      //       commit('showToast', 'removed from cart')
      //     })
      //   },
      //   deleteFromCart: ({ commit }, productId) => {
      //     myApi.products('delete', productId).then((productId) => {
      //       commit('deleteFromCart', productId)
      //       commit('showToast', 'deleted from cart')
      //     })
      //   },
    },
  })
}

export default createStore
