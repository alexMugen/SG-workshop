<template>
  <section id="Destructuring">
    <main-title :infoHeader="infoHeader"></main-title>
    <md-layout class="wrap" md-column>
      <p class="md-headline">4. SPREAD operator</p>
      <p class="md-subheading">Le <strong>spread</strong> permet de decomposer nos iterables</p>
      <p class="">Exemple avec la function <strong>Math</strong></p>
      <code type="javascript">
        <pre>
          //ES5
          var arr = [1, 2, 3, 4, 5];
          var max = Math.max.apply(Math, arr);
          console.log(max);

          //ES6
          let arr = [1,2,3,4,5]
          let max = Math.max(...arr)
          console.log(max)
        </pre>
      </code>
      <p class="">
        <md-icon class="md-warn">warning</md-icon><strong>Spread</strong> ne s'applique qu'aux iterables</p>
      <code type="javascript">
        <pre>
          let obj = {'key1': 'value1'};
          let array = [...obj]; // TypeError: obj is not iterable
        </pre>
      </code>
      <p class="">Pour <strong>concatener</strong> des arrays</p>
      <code type="javascript">
        <pre>
          //ES5
          var arr1 = [0, 1, 2];
          var arr2 = [3, 4, 5];

          var nouveauTableau = arr1.concat(arr2);

          //ES6
          let arr1 = [0, 1, 2];
          let arr2 = [3, 4, 5];
          arr1 = [...arr1, ...arr2];
        </pre>
      </code>
      <p class="">Autre exemple, tout argument passé à une fonction peut être décomposé </p>
      <code type="javascript">
        <pre>
          function foo(x, y, z) {
              console.log(x, y, z);
          }

          let arr = [1, 2, 3];
          foo(...arr); // 1 2 3
        </pre>
      </code>

      <p class="md-subheading"><strong>Destructuring + Spread</strong>, on peut mixer les deux</p>
      <code type="javascript">
      <pre>
        const words = ["foo", "bar", "baz"];
        // ES5
        const first = words[1]; // foo

        // ES6 / ES2015
        const [first, ...rest] = words;
        console.log(...rest) // bar baz
      </pre>
      </code>
    </md-layout>

    <md-layout md-align="center">
      <router-link :to="{name: 'Destructuring'}">
        <md-button class="md-fab">
          <md-icon>arrow_back</md-icon>
        </md-button>
      </router-link>
    </md-layout>
  </section>
</template>

<script>
  import MainTitle from './MainTitle'
  export default {
    components: {MainTitle},
    name: 'Spread',
    data () {
      return {
        infoHeader: {
          title: 'Spread'
        }
      }
    }
  }
</script>