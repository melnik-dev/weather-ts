import {defineStore} from 'pinia'
import {reactive} from "vue";
import axios from 'axios'
import Weather from '@/types/Weather'


export const useWeatherStore = defineStore('weatherStore', () => {
    const weather: Weather = reactive({
        city: '',
        country: '',
        list: []
    })
    const apiKey = '6313d9cc37298aba5399fe5522aba6aa'

    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Moscow&lang=ru&cnt=25&appid=${apiKey}&units=metric`)
        .then(response => {
            weather.city = response.data.city.name
            weather.country = response.data.city.country
            for (let i = 0; i <= response.data.list.length; i += 8) {
                weather.list.push(response.data.list[i])
            }
        })
        .catch(e => {
            console.log(e)
        })

    return {weather}
})