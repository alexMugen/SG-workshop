<template>
  <section id="Destructuring">
    <p class="md-headline">4. Destructuring {} & []</p>
    <code type="javascript">
    <pre>

    </pre>
    </code>
    <p class="md-headline">4. SPREAD operator</p>
    <code type="javascript">
    <pre>
      let arr = [1,2,3,4,5]
      let max = Math.max(...arr)
      console.log(max)
    </pre>
    </code>
    <md-layout md-align="center">
      <router-link :to="{name: 'LetConst'}">
        <md-button class="md-fab">
          <md-icon>arrow_back</md-icon>
        </md-button>
      </router-link>
      <router-link :to="{name: 'Arrow'}">
        <md-button class="md-fab">
          <md-icon>arrow_forward</md-icon>
        </md-button>
      </router-link>
    </md-layout>
  </section>
</template>

<script>
  export default {
    name: 'destructuring'
  }
</script>

<style scoped>

</style>