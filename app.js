const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


consultarInformacion = async(direccion) => {
    try {
        const cordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(cordenadas.latitud, cordenadas.longitud);
        return `El clima de ${cordenadas.lugar} es de ${temperatura}.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

consultarInformacion(argv.direccion).then(console.log).catch(console.log);