<template>
  <div
    class="weather-warp" v-if="typeof $store.state.weather.description !== 'undefined'">
    <div class="location-box">
      <div class="location">
        {{ $store.state.weather.cityName }}, {{ $store.state.weather.country }}
      </div>
      <div class="date">{{ buildDate() }}</div>
    </div>
    <div class="weather-box">
      <div class="temp">{{ $store.state.weather.temp }} °C</div>
      <div class="weather">{{ $store.state.weather.description }}</div>
    </div>
  </div>
</template>
<script>
import { getDate } from "../utils";
export default {
  name: "Weather",
  methods: {
    buildDate: function () {
      const { day, date, month, year } = getDate();
      return `${day} ${date} ${month} ${year}`;
    },
  },
};
</script>
<style scoped>
.location-box .location {
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.location-box .date {
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  font-style: italic;
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 102px;
  font-weight: 900;

  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);

  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .weather {
  padding: 10px 25px;
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  font-style: italic;
}
</style>