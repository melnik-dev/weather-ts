<template>
  <div class="container">
    <div class="weather__wrapper">
      <WeatherDay/>
      <WeatherWeek/>
    </div>
    {{ weatherList }}
  </div>

</template>

<script lang="ts" setup>
import WeatherDay from './components/WeatherDay.vue'
import WeatherWeek from './components/WeatherWeek.vue'
import {useWeatherStore} from "@/stores/WeatherStore";
const weatherStore = useWeatherStore()
setTimeout(() => {
  console.log(weatherStore.weatherList)
  console.log(weatherStore.city)
}, 500)

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');
* {
  box-sizing: border-box;
}
body {
  background: #343D4B;
  font-family: 'Montserrat';
  font-weight: 500;
  color: #FFFFFF;
}

.container {
  max-width: 1010px;
  margin: 0 auto;
  padding-top: 100px;
}

.weather__wrapper {
  display: grid;
  grid-template-columns: 490px 520px;
}
</style>
