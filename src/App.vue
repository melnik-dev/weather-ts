<template>
  <div class="container">
    <div class="weather__wrapper">
      <WeatherDay/>
      <WeatherWeek/>
    </div>

  </div>

</template>

<script lang="ts" setup>
import WeatherDay from './components/WeatherDay.vue'
import WeatherWeek from './components/WeatherWeek.vue'
// import axios from 'axios'
// import { ref } from 'vue';
// const posts = ref()
// const apiKey = '6313d9cc37298aba5399fe5522aba6aa'
//
// axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Moscow&lang=ru&appid=${apiKey}&units=metric`)
//     .then(response => {
//       posts.value = response.data
//     })
//     .catch(e => {
//       console.log(e)
//     })
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
