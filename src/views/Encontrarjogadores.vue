<template>
    <v-content>
      <div class="StaticHero">
        <v-img class="ej-img"
          gradient="to top right, rgba(17,17,17,0.2), rgba(51,51,51,0.7)"
          src="../assets/encontre-jogadores-adb.png">
          
            <!-- <v-col>
              <div class="headline">Encontre Jogadores</div>
            </v-col>  -->
            <h3>Encontrar jogadores</h3>
        </v-img>
      </div>
      <div class="block">
        <v-container class="text-center">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex aliquam quaerat modi at architecto expedita, laboriosam commodi quibusdam tempora nesciunt eos quos accusamus debitis repellendus obcaecati quae eveniet quasi necessitatibus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a animi voluptates aliquid voluptatem debitis facilis dignissimos aperiam excepturi? Reiciendis vitae possimus eius iusto doloremque placeat, incidunt saepe porro corrupti.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos vitae aliquid aliquam reprehenderit aut iste fugit neque vel nemo suscipit! Quo nisi cum ipsum obcaecati tempore odit ea. Voluptas, quibusdam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente incidunt quisquam nobis, debitis esse quas earum et cumque nihil deleniti maiores consectetur culpa eos voluptatibus voluptatum, fuga aperiam pariatur totam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquid fugit quam nisi ipsa totam, magni natus porro facere. Voluptatibus, ducimus. Harum tempora optio officia vitae libero ab, impedit vel!
          </p>
          <br>
          <br>
          <h2 class="text-center">Pesquisar Jogadores</h2>
          <p class="text-center">Pesquise por uma localização e o site lhe mostrará quantos jogadores existem naquela região</p>
          <v-card
              class="pa-4"
              flat
              height="300px"
              img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"
            >
              <v-toolbar
                dense
                floating
              >
                <v-text-field class="headline"
                  hide-details
                  prepend-icon="mdi-magnify"
                  single-line
                ></v-text-field>

                <v-btn icon>
                  <v-icon>mdi-crosshairs-gps</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-toolbar>
            </v-card>
        </v-container>
        <div class="block">
          <v-container>
            <h2 class="text-center">Os Melhores Ranqueados da Sua Região</h2>
            <v-row>
              <v-col v-for="item in items" :key="item.id" cols="4">
                <v-card 
                    class="mx-auto"
                    max-width="400"
                  >
                    <v-img
                      class="white--text align-end"
                      :src="item.src"
                    >
                      
                    </v-img> 
                      <h6>Membro Premium 🎖⭐ - Tennis Partnner</h6>
                    <v-card-text class="text--primary">
                      <div class="title">{{item.name}}</div>
                      <p>{{item.title}}</p>
                      
                    </v-card-text>

                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>


    </v-content>      
</template>

<script>
  export default {
    name: "Encontrarjogadores",
    data () {
      return {
        items: [
          {
            id:1,
            src: ("https://www.tennis.com.au/wp-content/uploads/2018/12/Taylah-Lawless_Tennis-Australia-profile-480x768.jpg"),
            name: 'Larissa Weber',
            title: 'Rank 1 - 2019'          
          }, 
          {
            id:1,
            src: require("../assets/perfil-jogador.jpg"),
            name: 'João Duckworth',
            title: 'Rank 1 - 2020'          
          },
          {
            id:1,
            src: ("https://www.tennis.com.au/wp-content/uploads/2010/09/Jordan-Thompson-profile-1-480x768.jpg"),
            name: 'Jorge Thompson',
            title: 'Rank 3 - 2020'          
          }
        ],
      }
    },
  }
</script>

<style scoped>
.ej-img{
  height: 500px;
}
h3 {
  text-align: center;
  margin-top: 175px;
  font-size: 75px;
  font-family: Roboto;
  font-weight: lighter;
  text-shadow: 2px 2px 5px black;
  color: #fff;
  font-style: italic;
}
h6 {
  margin-top: 10px;
  margin-left: 15px;
  font-family: Roboto;
}

</style>


