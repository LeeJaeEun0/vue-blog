<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vuelog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container mt-4">
  <h5>Vue 개발자의 블로그 입니다.</h5>
  <p>- Vue로 만들었음 -</p>
</div>

<!-- <List :블로그글="블로그글"/> -->

<router-view :블로그글="블로그글">  </router-view>
<!-- 
<router-link to="/list">리스트페이지</router-link>
<router-link to="/home">홈페이지</router-link> -->

</template>

<script>
// import List from './components/List.vue';
import blog from './assets/blog.js';
export default {
  name: 'App',
  data(){
    return{
      블로그글 : blog
    }
  },
  components: {
    // List: List,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
