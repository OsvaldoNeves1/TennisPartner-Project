<template>
        <v-container>
            <div class="block galleryBlock">  
                <h2 class="text-center">Funcionalidades</h2>
                
                <v-row>
                    <v-col cols="4" v-for="item in items" :key="item.id">
                    <v-card
                        class="mx-auto"
                        max-width="344"
                    >
                        <v-img
                        :src="item.src"
                        height="200px"
                        ></v-img>

                        <v-card-title>
                        {{item.title}}
                        </v-card-title>

                        <v-card-subtitle>
                        {{item.subtitle}}
                        </v-card-subtitle>

                        <v-card-actions>
                        <v-btn
                            color="orange lighten-2"
                            text
                        >
                            Saiba Mais
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn
                            icon
                            @click="show = !show"
                        >
                            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>

                            <v-card-text>
                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                            
                            </v-card-text>
                        </div>
                        </v-expand-transition>
                    </v-card>
                    </v-col>
                </v-row>
                </div>   
  </v-container>
</template>

<script>
  export default {
    name: 'Gallery',

    data: () => {
        return {
            items: [
            {
               id: 1,
               title: "Crie Ligas",
               subtitle:"Tenha autonomia na hora de criar seu próprio torneio e convidar seus amigos",
               description:"anisanisonaoisnaiosnaiosnioansioans",
               src: ("https://e0.365dm.com/20/11/2048x1152/skysports-daniil-medvedev-tennis_5181860.jpg") 
            },
            {
               id: 2,
               title: "Localização",
               subtitle:"Pesquise quantos jogadores existem no seu raio de distância",
               description:"anisanisonaoisnaiosnaiosnioansioans",
               src: ("https://img.ibxk.com.br/2016/03/15/15190506473542.jpg") 
            },
            {
               id: 3,
               title: "Avalie",
               subtitle:"Deixe um feedback do seu parceiro após uma partida",
               description:"anisanisonaoisnaiosnaiosnioansioans",
               src: ("https://images.jacobinmag.com/wp-content/uploads/2020/09/02120856/GettyImages-802585862.jpg") 
            }
            ],
        }
    },
  }
</script>

<style scoped>
h2 {
    font-family: Roboto;
    font-weight: lighter;
}

</style>
