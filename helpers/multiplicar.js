const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, listar = false, hasta) => {
    try{
        let salida, consola = '';

        for(let i = 1; i <= hasta; i++) {
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }

        if (listar) {
            console.log('================================'.green);
            console.log('Tabla del ', colors.blue(base));
            console.log('================================'.green);
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/table-${ base }.txt`, salida);
        
        return `table-${ base }.txt`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};