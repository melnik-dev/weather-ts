<template>
  <button class="week__btn-setday">
    <img class="week__btn-icon" src="http://openweathermap.org/img/wn/10d@2x.png" alt="day">
    <span class="week__btn-title">Tue</span>
    <span class="week__btn-degrees">30 °C</span>
  </button>
</template>

<script>
export default {
  name: "WeatherWeekOneDay"
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