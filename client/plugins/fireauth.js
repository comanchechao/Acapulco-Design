// // import { auth } from '~/plugins/firebase.js'

// export default (context) => {
//   const { store } = context

//   return new Promise((resolve, reject) => {
//     this.$fire.auth.onAuthStateChanged((user) => {
//       // here is you would want to build your user
//       // object, but for now we'll just take everything
//       // user: {
//       //   name: name
//       // }
//       store.commit('setUser', user)
//       resolve()
//     })
//   })
// }
