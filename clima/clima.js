const axios = require('axios');

const getClima = async(latitud, longitud) => {
    const respueta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=73a17bb41c39baca9a15693e7900dfb7&units=metric`);
    return respueta.data.main.temp;
}

module.exports = {
    getClima
}