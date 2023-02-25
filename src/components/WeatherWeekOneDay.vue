<template>
  <button
      class="week__btn-setday"
      :class="{'week__btn-setday--active': isActiveDay}"
      @click="onChangeDate(currentDay)">
    <img class="week__btn-icon" :src="`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`" alt="day">
    <span class="week__btn-title">{{ weekShort }}</span>
    <span class="week__btn-degrees">{{ Math.round(day.main.temp) }} °C</span>
  </button>
</template>

<script lang="ts" setup>
import {defineEmits, defineProps, ref} from "vue";
import oneWeatherDay from "@/types/oneWeatherDay";

const props = defineProps<{
  day: any
  id: number
  isActiveDay: boolean
}>()
const emit = defineEmits<{
  (e: 'onChangeDate', payload: oneWeatherDay): void
}>()

let date = new Date(props.day.dt_txt)
let optionWeekLong = {weekday: 'long'} as const
let optionWeekShort = {weekday: 'short'} as const
let optionFullDate = {day: 'numeric', month: 'short',  year: 'numeric'} as const
let weekLong = new Intl.DateTimeFormat('ru', optionWeekLong).format(date);
let weekShort = new Intl.DateTimeFormat('ru', optionWeekShort).format(date);
let fullDate = new Intl.DateTimeFormat('ru', optionFullDate).format(date);

const currentDay = ref({
  fullDate,
  weekLong,
  icon: props.day.weather[0].icon,
  temp: props.day.main.temp,
  description: props.day.weather[0].description,
  pressure: props.day.main.pressure,
  humidity: props.day.main.humidity,
  wind: props.day.wind.speed
})
function onChangeDate(payload: oneWeatherDay) {
  emit('onChangeDate', payload)
}
if(props.id === 0) {
  onChangeDate(currentDay.value)
}
</script>

<style scoped>
.week__btn-setday {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 103px;
  height: 165px;
  background: #272E37;
  box-shadow: 1px 2px 4px #222831;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  color: #FFFFFF;
}
.week__btn-setday:hover {
  transform: scale(1.1);
}
.week__btn-setday--active {
  width: 104px;
  height: 168px;
  background: #FFFFFF;
  border-radius: 10px;
  color: #000000;
}
.week__btn-icon {
  filter: drop-shadow(2px 2px 5px #FFFFFF);
}
.week__btn-setday--active .week__btn-icon {
  filter: drop-shadow(2px 2px 5px #222831);
}
.week__btn-title {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
}
.week__btn-degrees {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
}
</style>