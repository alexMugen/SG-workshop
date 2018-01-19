<template>
  <section id="welcome">
    <md-layout class="cover">
      <img src="~assets/rock.png" alt="" width="">
    </md-layout>
    <md-layout md-align="center">
      <md-card md-with-hover v-for="(workshop, index) in workshops " :key="index" >
       <router-link :to="{name: workshop.route.name}" tag="div">
          <md-card-media>
            <div class="media"></div>
          </md-card-media>

          <md-card-header>
            <div class="md-title">{{workshop.title}}</div>
          </md-card-header>
      </router-link>
      </md-card>
    </md-layout>
  </section>
</template>

<script>
import HeaderApp from '@/components/MainTitle'
export default {
  name: 'welcome',
  data () {
    return {
      workshops: [
        {
          title: 'Let & Const',
          route: {
            name: 'LetConst'
          }
        },
        {
          title: 'Arrow',
          route: {
            name: 'Arrow'
          }
        }
      ]
    }
  },
  components: {
    HeaderApp
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .cover {
    background: #FBDE34;
    border-bottom: 10px solid #333333;
    img {
      margin: 0 auto;
    }
  }
.title {
  text-align: center;
}
.md-card{
  margin: 40px 10px;
  width: 300px;
  .media{
    width: 100%;
    height: 150px;
    background: #FBDE34 no-repeat center center;
    background-size: contain;
    background-image: url('~assets/rock2.png')
  }
  .md-title {
    text-align: center;
  }
}
</style>
