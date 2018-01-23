<template>
  <section id="Arrow">
    <main-title :infoHeader="infoHeader"></main-title>
    <br>
    <md-layout class="wrap" md-column>
      <p class="md-headline">1 - Un raccourci sympa</p>
      <code type="javascript">
        <pre>
          // Avant                                    // Après
          let addition = function(a, b) {             let addition = (a, b) => a + b;
            return a + b;
          };
        </pre>
      </code>
      <p class="md-headline">2- Mais pas que...</p>
      <code type="javascript">
        <pre>
          // Avant                                    // Après
          let addition = function(a, b) {             let addition = (a, b) => a + b;
            return a + b;
          };
        </pre>
      </code>
      <md-button class="md-raised md-primary" @click="run('let')" v-if="!results.let"><span>Execute code</span></md-button>
      <div v-else="results.let">
        <pre class="result" >
          console.log(x);
          // expected output: 2

          console.log(y);
          // expected output: 1
        </pre>
        <p class="md-subheading conclusion"><md-icon class="md-accent">forward</md-icon><strong>LET</strong> permet de déclarer des variables dont la portée est limitée à celle du bloc dans lequel elles sont déclarées. </p><p class="md-subheading conclusion"><md-icon class="md-accent">forward</md-icon>la seule différence <strong>LET </strong> fonctionne avec les portées de bloc et <strong>VAR </strong> avec les portées des fonctions</p>

      </div>
    </md-layout>
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
  import MainTitle from './MainTitle'
  export default {
    components: {MainTitle},
    name: 'Arrow',
    data () {
      return {
        infoHeader: {
          title: 'Arrow'
        },
        results: {

        }
      }
    }
  }
</script>

<style scoped>

</style>