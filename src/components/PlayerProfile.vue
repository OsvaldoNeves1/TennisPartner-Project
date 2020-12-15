<template>
    <div class="divPlayer">
        <h2 class="text-center">Perfil Personalizado</h2>
        <hr>
        
        <v-card
        :loading="loading"
        class="card-player"
        max-width="374"
    >
        <template slot="progress">
        <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
        ></v-progress-linear>
        </template>

        <v-img
        height="250"
        src="https://veja.abril.com.br/wp-content/uploads/2016/06/imagens-do-dia-20140527-07-original.jpeg"
        ></v-img>

        <v-card-title>Leticia Sobral</v-card-title>
        <v-card-subtitle>Avaliação</v-card-subtitle>

        <v-card-text>
        <v-row
            align="center"
            class="mx-0"
        >
            <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
            ></v-rating>

            <div class="grey--text ml-4">
            4.5 (413)
            </div>
        </v-row>

        <div class="my-4 subtitle-1">
            • 3 anos de Tenis
        </div>

        <div>Destra, Two-Handed Backhand, Ponto forte - Saque</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Geralmente Disponível às:</v-card-title>

        <v-card-text>
        <v-chip-group
            v-model="selection"
            active-class="blue darken-1 white--text"
            column
        >
            <v-chip>5:30PM</v-chip>

            <v-chip>7:30PM</v-chip>

            <v-chip>8:00PM</v-chip>

            <v-chip>9:00PM</v-chip>
        </v-chip-group>
        </v-card-text>

        <v-card-actions>
        <v-btn
            color="blue darken-1"
            text
            @click="desafiar"
        >
            Desafiar
        </v-btn>
        </v-card-actions>
    </v-card> 
    
    <div class="textos">
    <h3>Personalize seu perfil com todas as <br> suas características de jogo</h3>
    <p>Faça com que seu parceiro conheça mais sobre você!</p>
        <v-card
            class="mx-auto"
            max-width="700"
        >
            <v-img
            src="https://veja.abril.com.br/wp-content/uploads/2016/06/imagens-do-dia-20140527-07-original.jpeg"
            height="250px"
            ></v-img>

            <v-card-title>
            Leticia Sobral
            </v-card-title>

            <v-card-subtitle>
            Clube Tennis Route
            </v-card-subtitle>

            <v-card-actions>
            <v-btn
                color="blue darken-1"
                text
            >
                Detalhes
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
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. 
                
                </v-card-text>
            </div>
            </v-expand-transition>
        </v-card>
            </div>
            </div>
</template>
<script>
  export default {
    name: 'PlayerProfile',

    data: () => {
        return {
            items: [
             
            ]
        }
    },
  }
</script>

<style scoped>

.divPlayer {
    padding-bottom: 25px;
}

.card-player {
    margin-left: 370px;
    margin-top: 100px;
    display: inline-block;
    vertical-align: top;
}

.textos {
    display: inline-block;
}

h2 {
    font-family: Roboto;
    font-weight: lighter;
    font-size: 30px;
}
hr {
    height: 1px;
    width: 60px;
    margin-left: 905px;
}
h3 {
    margin-left: 50px;
    margin-top: 87px;
    font-family: Roboto;
    font-weight: lighter;
    font-size: 48px;
    text-shadow: 1px 1px 3px grey;
    line-height: 65px;

}
p {
    margin-left: 50px;
    font-family: Roboto;
    font-weight: lighter;
    font-size: 25px;
    font-style: italic;
    text-shadow: 1px 1px 3px grey;
    padding-bottom: 45px;
}
</style>
