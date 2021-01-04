<template>
  <div>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          fab
          large
          @click="drawer = !drawer"
          color="transparent"
        >
          <v-icon color="white">mdi-shopping-outline</v-icon>
        </v-btn>
      </template>
      <span>Shopping Cart</span>
    </v-tooltip>

    <v-navigation-drawer
      right
      v-model="drawer"
      d-flex-column
      temporary
      app
      src="/cody-mclain-Dq5P6eWZXNY-unsplash.jpg"
      width="20%"
    >
      <v-list>
        <v-spacer></v-spacer>
        <v-list-item> </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="/pineapple-supply-co-NgDapgpAiTE-unsplash.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-btn>
              <span> </span>
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    }
  },
}
</script>

<style></style>
