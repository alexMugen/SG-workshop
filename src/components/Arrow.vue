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
      <br>
      <code type="javascript">
        <pre>
          let arr = ['toto', 'tata', 'titi'];

          let team = arr.map(member => {
              return member + '!';
          });
        </pre>
      </code>
      <p class="md-headline">2- Mais pas que...</p>
      <p class="md-subheading">les <i>functions arrows</i> jouent un role sur le contexte de <strong>THIS</strong></p>
      <p class="md-subheading">avant ES6 (le code ne va pas marcher il faut utiliser une petite astuce bien connue..)</p>
      <code type="javascript">
        <pre>
          function Person() {
          this.age = 0;

          setInterval(function growUp() {
            this.age++;
            console.log(this.age)
          }, 1000);
        }
        var p = new Person()
        </pre>
      </code>
      <md-button class="md-raised md-primary" @click="run('ex1')" v-if="!results.ex1"><span>Execute code</span></md-button>
      <div v-else="results.ex1">
        <pre class="result" >
          NaN
        </pre>
      </div>

      <p class="md-subheading">Avant ES6, il fallait faire</p>
      <code type="javascript">
        <pre>
         function Person() {
            var self = this;
            self.age = 0;

            setInterval(function growUp() {
              // La fonction de rappel refère à la variable `self` dont
              // la valeur est l'objet espéré.
              self.age++;
            }, 1000);
          }
          var p = new Person()
        </pre>
      </code>

      <p class="md-subheading">ES6 dans ta face !</p>
      <code type="javascript">
        <pre>
          function Person() {
              this.age = 0;

              setInterval(() => {
                setTimeout(() => {
                  this.age++; // `this` referre proprement à l'objet person
                }, 1000);
              }, 1000);
            }

            var p = new Person();
        </pre>
      </code>
      <p class="md-headline">3. les params</p>
      <p class="md-subheading">Avant ES6</p>
      <code type="javascript">
        <pre>
          'use strict';

          var getFullName = function getFullName() {
            var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'El';
            var last = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'patron';
            return 'your name is ' + first + ' ' + last;
          };
          var fullName = getFullName();
          console.log(fullName);
        </pre>
      </code>

      <p class="md-subheading">ES6 dans ta face !</p>
      <code type="javascript">
        <pre>
          let getFullName = (first = 'El', last = 'patron') => `your name is ${first} ${last}`
          let fullName = getFullName();
          console.log(fullName)
        </pre>
      </code>
    </md-layout>
    <md-layout md-align="center">
      <router-link :to="{name: 'LetConst'}">
        <md-button class="md-fab">
          <md-icon>arrow_back</md-icon>
        </md-button>
      </router-link>
      <router-link :to="{name: 'Destructuring'}">
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
          ex1: false
        }
      }
    },
    methods: {
      run (str) {
        if (str === 'ex1') {
          this.results.ex1 = true
        } else {
          this.results.ex2 = true
        }
      }
    }
  }
</script>