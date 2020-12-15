<template>
        <v-container>
            <hr>
            <v-footer
                
                padless
            >
                <v-card
                flat
                tile
                class="text-center"
                >
                <v-card-text>
                    <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4"
                    icon
                    >
                    <v-icon size="24px">
                        {{ icon }}
                    </v-icon>
                    </v-btn>
                </v-card-text>

                <v-card-text class="pt-0">
                    Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </v-card-text>

                <!-- <v-divider></v-divider> -->

                <v-card-text class="">
                    {{ new Date().getFullYear() }}  © Copyright by <strong>TennisPartnner</strong>, todos os direitos reservados <strong>Assessment-PB</strong>
                </v-card-text>
                </v-card>
            </v-footer>
        </v-container>   
</template>
<script>
  export default {
    name: 'Footer',

    data: () => {
        return {
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
        }
    },
}
</script>

<style scoped>

hr {
    border: .75px solid #f8f8f8;
    height: 1px;
    width: 1150px;
    margin-left: 8px;
    margin-bottom: 80px;
    margin-top: -19px;
}

.footer {
    font-family: Roboto;
    padding-bottom: 50px;
    width: 100%;
}

</style>
