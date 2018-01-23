<template>
  <div id="app" class="md-container">
    <transition><router-view></router-view></transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  margin-bottom: 60px;

  section{
    width: 100%
  }
}
.v-enter-active, .v-leave-active {
   transition: all .3s;
   transform: translate3D(0, 0, 0);
   opacity: 0;
}
.v-enter, .v-leave-active {
  transform: translate3D(-100%, 0, 0);
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.wrap{
  padding: 0 30px;
}
.conclusion {
  text-align: center;
}
.md-theme-default.md-icon.md-accent {
  color: mediumseagreen;
}
.md-theme-default a:not(.md-button) {
  color: #FBDE34;
  margin: 0 20%;
}
.md-theme-default.md-button:not([disabled]).md-fab {
  color: rgba(255, 255, 255, .87);
  background-color: #333333;
}
.md-theme-default code:not(.hljs) {
  background-color: #000;
  color: lightgreen;
}
.result {
  border: 1px solid;
  padding: 12px;
}
</style>
