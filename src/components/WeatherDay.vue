<template>
  <div class="weather__day day">
    <div class="day__header">
      <h1 class="day__title">Tuesday</h1>
      <p class="day__subtitle">20 Jun 2022</p>
      <p class="day__locatio">
        <img class="day__icon-location" src="@/assets/location.png" alt="">
        Biarritz, FR</p>
    </div>
    <div class="day__footer">
      <img class="day__icon" src="http://openweathermap.org/img/wn/10d@4x.png" alt="Sunny">
      <p class="day__degrees">29 °C</p>
      <p class="day__weather">Sunny</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherDay"
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
  margin-left: -50px;
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