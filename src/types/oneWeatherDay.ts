interface oneWeatherDay {
    fullDate: string,
    weekLong: string,
    icon: string,
    temp: number,
    description: string,
    pressure?: number,
    humidity?: number,
    wind?: number
}

export default oneWeatherDay