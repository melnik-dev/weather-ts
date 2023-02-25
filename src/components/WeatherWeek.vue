<template>
  <div class="weather__week week">
    <div class="week__option-wrapper">
      <div class="week__option">
        <span class="week__option--title">ДАВЛЕНИЕ</span>
        <span class="week__option--sybtitle">{{ pressure }}  мм/рт/ст</span>
      </div>
      <div class="week__option">
        <span class="week__option--title">ВЛАЖНОСТЬ</span>
        <span class="week__option--sybtitle">{{ humidity }}%</span>
      </div>
      <div class="week__option">
        <span class="week__option--title">ВЕТЕР</span>
        <span class="week__option--sybtitle">{{ wind }} м/cек</span>
      </div>
    </div>
    <div v-if="weatherStore.weather.city"  class="week__change-week">
      <WeatherWeekOneDay
          v-for="(day,i) in weatherStore.weather.list"
          :day="day"
          :key="i"
          :id="i"
          @onChangeDate="onChangeDate"
          @click="changeActiveDay(i)"
          :isActiveDay="isActiveDay[i]"
      />
    </div>
    <div class="week__change-location">
      <button class="week__btn-location">
        <img class="week__icon-location" src="@/assets/location.png" alt="">
        Change Location
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import WeatherWeekOneDay from './WeatherWeekOneDay.vue'
import {defineEmits, ref} from "vue";
import {useWeatherStore} from "@/stores/WeatherStore";
import oneWeatherDay from "@/types/oneWeatherDay";

const weatherStore = useWeatherStore()

const emit = defineEmits<{
  (e: 'onChangeDate', payload: oneWeatherDay): void
}>()

const pressure = ref(0)
const humidity = ref(0)
const wind = ref(0)
const isActiveDay = ref([true, false, false,false])
function onChangeDate(payload: oneWeatherDay) {
  if(payload.pressure && payload.humidity && payload.wind){
    pressure.value = payload.pressure
    humidity.value = payload.humidity
    wind.value = payload.wind
  }
  emit('onChangeDate', payload)
}

function changeActiveDay(i: number): void {
  isActiveDay.value = [false, false, false, false]
  isActiveDay.value[i] = true
}
// const changeEmitName = 'onChangeDay';
// const emit = defineEmits<{(e: typeof changeEmitName, id: number): void }>();
// const onChangeDay = (event: Event) => {
//   const target = event.target as HTMLInputElement;
//   emit(changeEmitName, target.value);
// }
</script>

<style scoped>
.weather__week {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 623px;
  align-self: center;
  background: #222831;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 55px;
}

.week__option {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.week__option--title {
  font-weight: 700;
  font-size: 26px;
  line-height: 34px;
}

.week__option--sybtitle {
  font-weight: 500;
  font-size: 22px;
  line-height: 34px;
}

.week__change-week {
  display: flex;
  align-items: center;
}

.week__btn-location {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  width: 100%;
  border: none;
  padding: 15px;
  background: linear-gradient(90.8deg, rgba(144, 217, 224, 0.9) 0.2%, rgba(84, 96, 230, 0.9) 100%);
  border-radius: 10px;
  color: inherit;
  cursor: pointer;
}

.week__icon-location {
  width: 23px;
  margin-right: 8px;
}
</style>