<template >
  <div class="warper-table"  v-if="typeof $store.state.weather.description !== 'undefined'">
    <table>
      <thead>
        <tr>
          <th>Search Time:</th>
          <th>City:</th>
          <th>Temp:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for= "item in $store.state.searchHistory" :key="item.key" >
          <td>{{item.date.day }}, {{item.date.date}} {{item.date.month}},{{item.date.year}}</td>
          <td>{{item.cityName}}</td>
          <td>{{item.temp }}°C</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: "Table",
};
</script>
<style scoped>
.warper-table {
  display: flex;
  color: #fff;
  font-size: 30px;
  font-weight: 200;
  margin: 30px 0px;
  justify-content: center;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
table {
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
}
</style>