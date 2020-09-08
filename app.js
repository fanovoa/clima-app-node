const colors = require('colors');
const { argv } = require('./config/yargs');
const { getLugarLatLog } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');


const { direccion } = argv;

const getInfo = async(direccion) => {

        try {

            const coords = await getLugarLatLog(direccion);
            const clima = await getClima(coords.lat, coords.long);

            return `${colors.brightGreen(`El clima de ${ coords.direccion }  es :`)}
            temperatura: ${colors.brightYellow(`${clima.temp}°C` )}
            Sensación: ${colors.brightYellow(`${clima.feels_like}°C` )}
            temperatura máxima: ${colors.brightYellow(`${clima.temp_max}°C` )}
            temperatura mínima: ${colors.brightYellow(`${clima.temp_min}°C` )}
            humedad: ${colors.brightYellow(`${clima.humidity}%` )}
            presión: ${colors.brightYellow(`${clima.pressure} hPa` )}
            `;

    } catch (error) {

        return ` No se pudo determinar el clima de ${direccion}`;
    }
}


getInfo(direccion)
    .then(console.log)
    .catch(console.log);