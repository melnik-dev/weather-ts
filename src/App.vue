<template>
  <div class="container">
    <div class="weather__wrapper">
      <WeatherDay
          :city="weatherStore.weather.city"
          :country="weatherStore.weather.country"
          :currentDay="currentDay"
      />
      <WeatherWeek @onChangeDate="onChangeDate"/>
    </div>
  </div>

</template>

<script lang="ts" setup>
import WeatherDay from './components/WeatherDay.vue'
import WeatherWeek from './components/WeatherWeek.vue'
import {useWeatherStore} from "@/stores/WeatherStore";
import {ref} from "vue";
import oneWeatherDay from "@/types/oneWeatherDay";

const weatherStore = useWeatherStore()

const currentDay = ref<oneWeatherDay>({
  fullDate: '25 февр. 2023 г.',
  weekLong: 'суббота',
  icon: '01d',
  temp: 22,
  description: 'солнечно',
})

function onChangeDate(payload: oneWeatherDay) {
  currentDay.value = payload
}
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
