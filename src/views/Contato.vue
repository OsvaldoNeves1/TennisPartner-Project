<template>
    <v-content>
      <div class="StaticHero">
        <v-img class="ej-img"
          gradient="to top right, rgba(17,17,17,0.2), rgba(51,51,51,0.7)"
          src="https://www.abc27.com/wp-content/uploads/sites/55/2020/08/2a60c42e18ae43339aa863af43afcacd.jpg?w=2560&h=1440&crop=1"
          max-height="500px">
          
            <!-- <v-col>
              <div class="headline">Encontre Jogadores</div>
            </v-col>  -->
            <h3>Contato</h3>
            
        </v-img>
        <h6>Contato</h6>
      </div>
      <div class="block">
        <v-container>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Nome"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
          ></v-select>

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'Você deve concordas com os termos para prosseguir!']"
            label="Você concorda com os termos de segurança?"
            required
          ></v-checkbox>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Enviar
          </v-btn>

          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            Resetar
          </v-btn>

          <!-- <v-btn
            color="warning"
            @click="resetValidation"
          >
            Resetar Validação
          </v-btn> -->
        </v-form>
        </v-container>
      </div>
    </v-content>  
</template>

<script>
  export default {
    name: "Contato",
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Problema com outro usuário',
        'Problema ao criar conta',
        'Problema na navegação',
        'Outros',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>

<style scoped>
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
  margin-top: 35px;
  margin-left: 360px;
  font-family: Roboto;
  font-weight: lighter;
  font-size: 25px;
}

</style>

