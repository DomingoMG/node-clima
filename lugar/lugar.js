const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    // Convertimos los datos para la url de forma segura
    const encodeURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: {
            'x-rapidapi-key': '989c6f867emsh8433cb5106594b2p149861jsn065843d73781',
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
    });

    const respuesta = await instance.get();

    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = respuesta.data.Results[0];
    const lugar = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        lugar,
        latitud,
        longitud
    }
}

module.exports = {
    getLugarLatLng
};