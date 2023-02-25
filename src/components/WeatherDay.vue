<template>
  <div class="weather__day day">
    <div class="day__header">
      <h1 class="day__title">{{ firstLetter(currentDay.weekLong) }}</h1>
      <p class="day__subtitle">{{ currentDay.fullDate }}</p>
      <p class="day__locatio">
        <img class="day__icon-location" src="@/assets/location.png" alt="">
        {{ city}}, {{ country }}</p>
    </div>
    <div class="day__footer">
      <img class="day__icon" :src="`http://openweathermap.org/img/wn/${ currentDay.icon }@4x.png`" alt="Sunny">
      <p class="day__degrees">{{ Math.round(currentDay.temp) }} °C</p>
      <p class="day__weather">{{ firstLetter(currentDay.description) }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {defineProps} from "vue";
import oneWeatherDay from "@/types/oneWeatherDay";

const props = defineProps<{
  city: string,
  country: string,
  currentDay: oneWeatherDay
}>()
function firstLetter(word:string):string {
  return word[0].toUpperCase() + word.slice(1)
}
</script>

<style scoped>
.weather__day{
  height: 666px;
  background: linear-gradient(152.19deg, rgba(136, 235, 239, 0.9) -0.04%, rgba(83, 91, 230, 0.9) 100%);
  border-radius: 30px;
  padding: 48px 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.weather__day p{
margin: 0;
}
.day__title {
  font-weight: 700;
  font-size: 37px;
  line-height: 45px;
  margin: 0;
  margin-bottom: 20px;
}
.day__locatio {
  display: flex;
  align-items: center;
}
.day__icon-location {
  width: 18px;
  margin-right: 6px;
}
.day__subtitle {
  font-size: 22px;
  line-height: 27px;
  margin-bottom: 10px!important;
}
.day__icon {
  margin-left: -30px;
  margin-bottom: -40px;
}
.day__degrees {
  font-weight: 700;
  font-size: 50px;
  line-height: 61px;
}
.day__weather {
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
}

</style>