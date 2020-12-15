<template>
 <v-content>
   <v-container>
     <div class="block text-center notFound">
       <h2>Página Não Encontrada</h2>
       <img src="../assets/warning.png" alt="notFound">
       <p>Sentimos muito mas a página não foi encontrada. Por favor, tente voltar para homepage!</p>
     </div>
   </v-container>
 </v-content>
     
</template>

<script>
  export default {
    name: "NotFound",
    data () {
      return {
        items: [],
      }
    },
  }
</script>


<style scoped>

img {
  width: 150px;
  margin-bottom: 35px;
}

</style>


