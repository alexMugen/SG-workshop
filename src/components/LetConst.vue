<template>
  <section id="LetConst">
    <main-title :infoHeader="infoHeader"></main-title>
    <br>
    <md-layout class="wrap" md-column>
      <span class="md-headline">1 - <i>LET</i><strike> VAR</strike></span>
      <p class="md-subheading">
        <md-icon class="md-warn">warning</md-icon> On oublie <strong>var </strong>et on passe à <strong>let</strong> mais
        <strong>ce n'est pas seulement un changement de nom</strong>
      </p>
      <p class="md-subheading"><md-icon class="md-primary">feedback</md-icon> <strong> VAR </strong>permet de définir une variable globale ou locale à une fonction (sans distinction des blocs utilisés dans la fonction) :</p>
      <code type="javascript">
        <pre>
          var x = 1;
          let y = 1;

          if (true) {
            var x = 2;
            let y = 2;
          }
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

    <md-layout class="wrap" md-column>
      <span class="md-headline">2 - <i>CONST</i></span>
      <p class="md-subheading">
        <strong>CONST</strong> permet de créer une constante accessible en lecture. <br>
        <md-icon class="md-warn">warning</md-icon> La valeur n'est pas immuable, <strong>c'est l'identifiant</strong> qui ne peut pas etre réaffecter. <strong>CONST</strong> doit etre initialisé.
      </p>
      <code type="javascript">
        <pre>
          ---EX 1---
          const B = 5;
          B = 10;

          ---EX 2---
          const TOTO;
        </pre>
      </code>
      <md-button class="md-raised md-primary" @click="run('const')" v-if="!results.const"><span>Execute code</span></md-button>
      <div v-else>
        <pre class="result">
          ---EX 1---
            TypeError: Assignment to constant variable
          ---EX 2---
            SyntaxError: Missing initializer in const
        </pre>
        <p class="md-subheading conclusion"><md-icon class="md-accent">forward</md-icon><strong>CONST</strong> crée une référence en lecture seule vers une valeur. La valeur référencée <strong>peut être modifiée</strong></p>
        <p class="md-subheading conclusion"><md-icon class="md-accent">forward</md-icon>On déclare une seule fois une constante.</p>
        <p class="md-subheading conclusion"><md-icon class="md-accent">forward</md-icon><strong>CONST </strong>fait partie de la portée du bloc ( comme LET )</p>
        <p class="md-subheading conclusion"><md-icon class="md-accent">forward</md-icon>Quand la constante est déclarée de <strong>manière globale</strong>, elle n'est pas une propriété de l'objet <strong>window</strong> (contrairement à <i>VAR</i>)</p>
        <p class="md-subheading conclusion"><md-icon class="md-accent">forward</md-icon>Il est préférable d'utiliser <strong>des majuscules</strong></p>
        <p class="md-subheading conclusion"><md-icon class="md-accent">forward</md-icon><strong>Const</strong> doit etre initialisé lors de sa déclaration </p>
      </div>
    </md-layout>
    <md-layout md-align="center">
      <router-link :to="{name: 'welcome'}">
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
  import { JS } from '../allScripts'
  export default {
    components: {MainTitle},
    name: 'letConst',
    data () {
      return {
        infoHeader: {
          title: 'Let & Const'
        },
        results: {
          let: false,
          const: false
        }
      }
    },
    methods: {
      run (str) {
        JS.letConst()
        if (str === 'let') {
          this.results.let = true
        } else {
          this.results.const = true
        }
      }
    }
  }
</script>

<style scoped>
  button {
    width: 20%;
    margin: 30px auto;
  }
</style>