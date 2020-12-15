<template>
  <v-container>
    <v-toolbar flat>

      <v-toolbar-title>Tennis Partner</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>
          <router-link to="/">Home</router-link>
        </v-btn>

        <v-btn text>
          <router-link to="/encontrarjogadores">Encontrar Jogadores</router-link>
        </v-btn>

        <v-btn text>
          <router-link to="/contato">Contato</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
  export default {
    name: 'Header',

    data: () => ({
    }),
  }
</script>

<style scoped>
.toolbar-header {
  background-color: #000;
}
</style>
