<template>
    <v-container>
         <div class="block galleryBlock">
            <v-img
                gradient="to top right, rgba(35, 74, 148, 0.9), rgba(51,51,51,0.7)"
                lazy-src="../assets/tennis-foto-3.png"
                max-height="500px"
                max-width="100%"
                src="../assets/tennis-foto-3.png">
                <span class="text-middle">
                    <h3>Comece Hoje Mesmo, basta criar uma Conta!</h3>
                </span>  
                <v-btn class="btn-conta"
                    color="orange darken-1"
                    elevation="3"
                    medium
                    x-large>
                    Criar Conta
                </v-btn>
            </v-img>    
        </div> 
    </v-container>              
</template>
<script>
  export default {
    name: 'Gallery',

    data: () => {
        return {
            items: [
             
            ]
        }
    },
  }
</script>

<style scoped>
span h3{
    color: #fff;
    text-align: center;
    padding-top: 190px;
    font-size: 55px;
    font-family: Roboto;
    text-shadow: 1px 1px 3px black;
    font-weight: lighter;
}
hr {
    height: 1px;
    width: 60px;
    margin-left: 930px;
}

.btn-conta {
    color: #fff;
    font-family: Roboto;
    font-weight: lighter;
    margin-left: 500px;
}

</style>
