<template>
  <section id="main-title">
    <h1 class="md-display-3">
      <router-link :to="{name: 'welcome'}">
        <md-button class="md-fab">
          <md-icon>home</md-icon>
        </md-button>
      </router-link>
      {{infoHeader.title}}
    </h1>

    <p class="md-display-1 title">{{infoHeader.subtitle}}</p>

  </section>
</template>
<script>
  export default {
    props: {
      infoHeader: {
        required: true,
        default () {
          return {
            imgUrl: '',
            title: 'Title',
            subtitle: 'subtitle'
          }
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  section {
    background: #FBDE34;
    border-bottom: 10px solid #333333;
    .md-display-3{
      padding: 35px;
      margin: 0;
      text-align: center;
      color: #000;
      a {
        margin: 0;
        float: left;
      }
    }
    .title {
      text-align: center;
    }
  }
</style>
