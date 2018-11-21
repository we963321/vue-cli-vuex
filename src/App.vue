<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <div class="wrapper">
      <router-view/>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>

import HeaderComponent from './components/layouts/HeaderComponent'
import FooterComponent from './components/layouts/FooterComponent'

export default {
  name: 'App',
  components : { HeaderComponent, FooterComponent }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

  text-align: center;
  color: #2c3e50;

}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.wrapper{ min-height: 100%;}

</style>
