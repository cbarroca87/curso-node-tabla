const fs = require('fs');
const 
crearTabla = async (base, list, hasta) => {

    let salida = '';
    for (let i = 1; i <= hasta; i++) {
        salida += `${base} X ${i} = ${base * i}\n`;
    }

    if (list){
        console.log(`=================`);
        console.log(`   Tabla del ${base}  `);
        console.log(`=================`);
        console.log(salida);
    }
    

    try {
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        // console.log(`El archivo se ha grabado correctamente`);
        return `tabla-${base}.txt`;
    } catch (e) {
        throw e;
    }
}

module.exports = {
    crearTabla
}