const axios = require('axios');
const { token_location } = require('../config/token');

const getLugarLatLog = async(direccion) => {

    const encodeUrl = encodeURI(direccion);
    const resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeUrl}.json?access_token=${token_location}`)

    if (resp.data.features.length === 0) {

        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.features[0];
    const { place_name, center } = data;


    return {
        direccion: place_name,
        long: center[0],
        lat: center[1]
    }
}

module.exports = {
    getLugarLatLog
}