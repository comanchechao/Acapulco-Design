<template>
  <v-container>
    <div>
      <h4>{{ products }}</h4>
    </div>
  </v-container>
</template>


// <script>
// import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  data() {
    return {
      readSuccessful: false,
      Products: '',
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    },
  },
  mounted() {
    //  firebase.firestore().collection('Products').get().then((snapshot) => {
    //     snapshot.docs.forEach(doc => {
    //       console.log(doc.data());
    //     })
    //   })
    this.$store.dispatch('getProducts')
  },

  //   async readFromFirestore() {
  //   const ref =  firebase.firestore().collection('Products')
  //   let snap
  //   try {
  //     snap = await ref.get()
  //   } catch (e) {
  //     // TODO: error handling
  //     console.error(e)
  //   }
  //   this.Products = snap.data().Products
  //   this.readSuccessful = true
  // }
}
</script>