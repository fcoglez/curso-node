//¿que son los modulos en node?
//Es una funcionalidad organizada en uno o varios archivos Javascript que puede ser reutilizada en una aplicacion.

//Cada fichero que tenemos, le podemos llamar modulo.


//Para exportar modulos-funciones

// module.exports.saludo = saludar     podemos usar esta línea para exportar solo una funcion

// Si queremos exportar varias funciones, creamos un nuevo objeto
module.exports = {
    saludo:saludar,
    holaMundo:saludarHolaMundo,
}


function saludar(nombre){
    return `Hola ${nombre}`;
}

function saludarHolaMundo(){
    return '¡Hola Mundo!';
}