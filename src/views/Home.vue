<template>
    <v-content>
      <Hero/>
      <Gallery/>
      <LatestPost/>
      <PlayerProfile/>
    </v-content>
</template>

<script>
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import LatestPost from '../components/LatestPost';
import PlayerProfile from '../components/PlayerProfile';


  export default {
    name: "Home",

    components: {
      Hero,
      Gallery,
      LatestPost,
      PlayerProfile
    },
    data () {
      return {
        items: [],
      }
    },
  }
</script>


