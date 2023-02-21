<template>
  <div class="weather__week week">
    <div class="week__option-wrapper">
    <div class="week__option">
      <span class="week__option--title">PRECIPITATION</span> <span class="week__option--sybtitle">0%</span>
    </div>
    <div class="week__option">
      <span class="week__option--title">HUMIDITY</span> <span class="week__option--sybtitle">42%</span>
    </div>
    <div class="week__option">
      <span class="week__option--title">WIND</span> <span class="week__option--sybtitle">3 km/h</span>
    </div>
    </div>
    <div class="week__change-week">
      <WeatherWeekOneDay/>
      <WeatherWeekOneDay/>
      <WeatherWeekOneDay/>
      <WeatherWeekOneDay/>
    </div>
    <div class="week__change-location">
      <button class="week__btn-location">
        <img class="week__icon-location" src="@/assets/location.png" alt="">
        Change Location</button>
    </div>
  </div>
</template>

<script>
import WeatherWeekOneDay from './WeatherWeekOneDay.vue'
export default {
  name: "WeatherWeek",
  components: {
    WeatherWeekOneDay
  }
}
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
  font-size: 28px;
  line-height: 34px;
}
.week__option--sybtitle {
  font-weight: 500;
  font-size: 28px;
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