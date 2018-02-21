<template>
  <section id="Destructuring">
    <main-title :infoHeader="infoHeader"></main-title>
    <md-layout class="wrap" md-column>
      <p class="md-headline">4. Destructuring {} & []</p>
      <p class="md-subheading">Avant ES6</p>
      <code type="javascript">
      <pre>
        var citizen = {
          firstName: 'foo',
          lastName: 'foo',
          age: '25',
          job: 'dev'
        }
        var firstName = citizen.firstName
        var lastName = citizen.lastName
        var age = citizen.age
      </pre>
      </code>
      <p class="md-subheading">ES6 </p>
      <code type="javascript">
        <pre>
          const citizen = {
            firstName: 'foo',
            lastName: 'foo',
            age: '25',
            job: 'dev'
          }
          let {firstName, lastName, job} = citizen

          // on peut aussi reassigner une variable
          let {firstName, lastName : name, job} = citizen
        </pre>
      </code>

      <p class="md-subheading">Meme chose avec les Tableaux</p>
      <code type="javascript">
        <pre>
          const citizen = [1,2,3,4,5]
          let [firstName, lastName, job] = citizen
        </pre>
      </code><br>
      <p class="md-subheading conclusion"><md-icon class="md-accent">forward</md-icon><strong>Le Destructuring</strong> permet d'éviter les variables temporaires </p><p class="md-subheading conclusion"><md-icon class="md-accent">forward</md-icon>On peut <strong>changer directement </strong> le nom de la variable</p>

    </md-layout>
    <md-layout md-align="center">
      <router-link :to="{name: 'Arrow'}">
        <md-button class="md-fab">
          <md-icon>arrow_back</md-icon>
        </md-button>
      </router-link>
      <router-link :to="{name: 'Spread'}">
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
    name: 'Destructuring',
    data () {
      return {
        infoHeader: {
          title: 'Destructuring'
        }
      }
    }
  }
</script>

<style scoped>

</style>