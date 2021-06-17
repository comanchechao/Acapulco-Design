/* eslint-disable no-console */
// function createNewAccount(user) {
//   return this.$fire.firestore.collection(`users/${user.uid}`).set({
//     displayName: user.displayName || user.email.split('@')[0], // use part of the email as a username
//     email: user.email,
//     image: user.newImage || '/images/default-profile.png', // supply a default profile image for all users
//   })
// }

export const state = () => ({
  user: null,
  account: null,
  products: [],
  cart: [],
})

export const mutations = {
  setUser: (state, { authUser, claims }) => {
    if (authUser) {
      const { uid, email, emailVerified } = authUser
      state.user = { uid, email, emailVerified }
    }
  },
  // setUser(state, payload) {
  //   state.user = payload
  // },

  setUpProducts(state, productsPayload) {
    // sets the state's  products property to the products array recieved as payload
    state.products = productsPayload
  },
  // set products in store states as array
  setProducts(state, product) {
    state.products = product
  },
  AddToCart(state, { product, quantity }) {
    const productInCart = state.cart.find(
      (item) => item.product.id === product.id
    )

    console.log(productInCart)

    if (productInCart) {
      productInCart.quantity += quantity
      return
    }

    state.cart.push({
      product,
      quantity,
    })
    // const productList = state.products.find(
    //   (item) => item.product.id === product.id
    // )
    //   const productInCart = state.cart.find(
    //     (item) => item.productId === product.id
    //   )

    //   if (productInCart) {
    //     productInCart.quantity++
    //   } else {
    //     state.cart.push({ product })
    //   }
    //   // productList.quantity--;
    // },
    // removeProduct(state, product) {
    //   state.cart = state.cart.filter((item) => {
    //     return item.product.id !== product.id
    //   })
  },
}
export const actions = {
  //  fetching the products from server side passing to set products mutaions
  getProducts({ commit }) {
    const products = []
    this.$fire.firestore
      .collection('Products')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const product = doc.data()
          product.id = doc.id
          products.push(product)
        })
        commit('setProducts', products)
      })
  },
  addProductToCart({ commit }, { product, quantity }) {
    commit('AddToCart', { product, quantity })
  },

  removeCartProduct({ commit }, product) {
    commit('removeProduct', product)
  },
  autoSignIn({ commit }, payload) {
    commit('setUser', payload)
  },

  signUp({ commit }, { email, password }) {
    return this.$fire.auth.createUserWithEmailAndPassword(email, password)
    // .then(() => {
    //   const user = this.$fire.auth.currentUser
    //   const actionCodeSettings = {
    //     url: `${process.env.VUE_APP_HOST_NAME}/sign-in/?email=${user.email}`,
    //   }
    //   user.sendEmailVerification(actionCodeSettings)
    // })
  },

  signInWithEmail({ commit }, { email, password }) {
    return this.$fire.auth.signInWithEmailAndPassword(email, password)
  },

  signInWithGoogle({ commit }) {
    const provider = new this.$fireModule.auth.GoogleAuthProvider()
    return new Promise((resolve, reject) => {
      this.$fire.auth.signInWithPopup(provider)
      resolve()
    })
  },

  signOut({ commit }) {
    this.$fire.auth
      .signOut()
      .then(() => {
        commit('setUser', null)
      })
      .catch((err) => console.log(err))
  },

  // setUser: (context) => {
  //   context.commit('setUser')
  // },
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
}
export const getters = {
  getUser: (state, getters) => {
    return state.user
  },

  // open some place for this big G
  cartItemCount: (state) => {
    return state.cart.length
  },

  // use this in the shopping cart drawer
  cartTotalPrice(state) {
    let total = 0

    state.cart.forEach((item) => {
      total = item.product.price * item.quantity
    })

    return total
  },

  cartSize(state) {
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
}
