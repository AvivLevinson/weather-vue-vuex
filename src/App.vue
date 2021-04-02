<template>
  <div id="app">
    <main>
      <SearchBox/>
      <Weather/>
      <Table/>
    </main>
  </div>
</template>

<script>
import SearchBox from './components/SearchBox';
import Weather from './components/Weather'
import Table from './components/Table'


export default {
    components: {
    SearchBox,
    Weather,
    Table

  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family:'montsrrat', sans-serif;
}

#app{
  background-image: url('./assets/cold-bg.jpg');
  background-size: cover;
  background-position: bottom;

}

main {
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}


</style>