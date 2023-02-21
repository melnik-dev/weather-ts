import {defineStore} from 'pinia'
import {reactive, ref} from "vue";
import axios from 'axios'

export const useWeatherStore = defineStore('weatherStore', () => {
    const city = reactive({
        name: '',
        country: ''
    })
    const weatherList = ref<any[]>([])
    const apiKey = '6313d9cc37298aba5399fe5522aba6aa'

    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Moscow&lang=ru&cnt=25&appid=${apiKey}&units=metric`)
        .then(response => {
            city.name = response.data.city.name
            city.country = response.data.city.country
            for (let i = 0; i <= response.data.list.length; i+=8) {
                weatherList.value.push(response.data.list[i])
            }
        })
        .catch(e => {
            console.log(e)
        })

    return { city, weatherList }
})