<template>
  <section id="LetConst">
    <main-title :infoHeader="infoHeader"></main-title>
  </section>
</template>

<script>
  import MainTitle from './MainTitle'
  export default {
    components: {MainTitle},
    name: 'Arrow',
    data () {
      return {
        infoHeader: {
          title: 'Arrow'
        }
      }
    }
  }
</script>

<style scoped>

</style>