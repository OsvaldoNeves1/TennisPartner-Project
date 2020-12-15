<template>
    
        <div class="heroBlock">
            <v-carousel hide-delimiters cycle>
                <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                    reverse-transition="fade-transition"
                    transition="fade-transition">
                    <!-- <v-row class="fill-height" align= "center" justify="center">
                        <div class="display-3">{{ item.title }}</div>
                    </v-row>     -->
                </v-carousel-item>
            </v-carousel>
        </div>
     
</template>

<script>
  export default {
    name: 'Hero',
    data () {
      return {
        items: [
          {
            src: require('../assets/ttptp.png'),
          },
          {
            src: 'https://images8.alphacoders.com/999/999687.jpg',
          },
          {
            src: 'https://image-cdn.essentiallysports.com/wp-content/uploads/20200615225948/us-open-tennis-scaled.jpg',
          },
          {
            src: 'https://toronto.citynews.ca/wp-content/blogs.dir/sites/10/2016/01/25/raonic16x9.jpg',
          },
        ],
      }
    },
  }
</script>

<style scoped>
.heroBlock {
  position: relative;
}
</style>
