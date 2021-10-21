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
  catagory: 'Lighters',
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

  // set products in store states as array
  setProducts(state, Products) {
    state.products = Products
  },
  AddToCart(state, Product) {
    console.log(Product)
    const productInCart = state.cart.find(
      (item) => item.item.id === Product.item.id
    )

    if (productInCart) {
      productInCart.quantity++
    } else {
      state.cart.push(Product)
    }
  },

  ChangeCatagory(state, selected) {
    state.catagory = selected
  },
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
  removeProduct(state, Product) {
    state.cart = state.cart.filter((item) => {
      return item.item.id !== Product.item.id
    })
  },
  incerementQuantity(state, Product) {
    const Tproduct = state.cart.find((item) => item.item.id === Product.item.id)
    if (Tproduct) {
      Tproduct.quantity++
    }
  },
  decrementQuantity(state, Product) {
    const Tproduct = state.cart.find((item) => item.item.id === Product.item.id)
    if (Tproduct) {
      Tproduct.quantity--
    }
  },
}
export const actions = {
  //  fetching the products from server side passing to set products mutaions
  async getProducts({ commit }) {
    const ref = await this.$fire.firestore.collection('Products')
    const Products = []
    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const doc = change.doc
          Products.push({
            id: doc.id,
            title: doc.data().title,
            price: doc.data().price,
            image: doc.data().image,
            catagory: doc.data().catagory,
          })
        }
      })
      commit('setProducts', Products)
    })
  },

  //   const Products = []
  //   this.$fire.firestore
  //     .collection('Products')
  //     .get()
  //     .then((snapshot) => {
  //       snapshot.forEach((doc) => {
  //         const product = doc.data()
  //         product.id = doc.id
  //         Products.push(product)
  //       })
  //       commit('setProducts', Products)
  //     })
  // },
  changeCatagory({ commit }, selected) {
    commit('ChangeCatagory', selected)
  },
  removeCartProduct({ commit }, Product) {
    commit('removeProduct', Product)
  },
  autoSignIn({ commit }, payload) {
    commit('setUser', payload)
  },

  signUp({ commit }, { displayName, email, password }) {
    return this.$fire.auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        return this.$fire.firestore.collection('users').doc(cred.user.uid).set({
          displayName,
        })
      })
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
        console.log(this.state.user)
        commit('setUser', null)
      })
      .catch((err) => console.log(err))
  },

  onAuthStateChangedAction: ({ commit }, { authUser, claims }) => {
    if (!authUser) {
      claims = null
      // Perform logout operations
      this.$fire.auth.signOut().then(() => {
        commit('setUser', null)
      })
    } else {
      // Do something with the authUser and the claims object...
      console.log(this.$store.state.user)
    }
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

  Products: (state) => {
    return state.products
  },

  // open some place for this big G
  cartItemCount: (state) => {
    return state.cart.length
  },

  // use this in the shopping cart drawer
  cartTotalPrice(state) {
    let total = 0

    state.cart.forEach((item) => {
      total += item.item.price * item.quantity
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
