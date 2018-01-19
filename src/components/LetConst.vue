<template>
  <section id="LetConst">
    <main-title :infoHeader="infoHeader"></main-title>
    <br>
    <md-layout md-column>
      <span class="md-headline">1 - <strike>VAR</strike> <i>LET</i></span>
      <p class="md-subheading">En vrai , c'est pas seulement un changement de nom. Cela impacte aussi <strong>la portée de la variable :</strong></p>

      <code type="javascript"><pre>
        var a = 2;
          {
            let ac= 3;
            console.log(a); // 3
            let a = 5; // TypeError: 'a' identifié comme déjà déclaré
          }
        console.log(a); // 2
      </pre></code>
      <md-button class="md-raised md-primary" @click="run()">execute code</md-button>
      <pre class="result" v-if="result">
        result
      </pre>
    </md-layout>
  </section>
</template>

<script>
  import MainTitle from './MainTitle'
  import { JS } from '../allScripts'
  export default {
    components: {MainTitle},
    name: 'letConst',
    data () {
      return {
        infoHeader: {
          title: 'Let & Const'
        },
        result: false
      }
    },
    methods: {
      run () {
        JS.letConst()
        this.result = true
      }
    }
  }
</script>

<style scoped>
  .md-theme-default code:not(.hljs) {
    background-color: #000;
    color: lightgreen;
  }
  button {
    width: 20%;
    margin: 30px auto;
  }
  .result {
    border: 1px solid;
    padding: 12px;
  }
</style>