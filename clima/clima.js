const axios = require('axios');
const { token_weather } = require('../config/token');

const getClima = async(lat, long) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${token_weather}&units=metric`);


    const { temp, feels_like, temp_min, temp_max, pressure, humidity } = resp.data.main;

    return {

        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity
    }

}

module.exports = {
    getClima
}