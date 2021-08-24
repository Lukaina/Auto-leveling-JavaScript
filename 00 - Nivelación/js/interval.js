//Función que me permitirá crear un intervalo de tiempo
const saludo = () => {
    document.write("<li>Hola mundo</li>");
}

document.write("<ol>");

setInterval(saludo, 2000); //2 Milisegundos

document.write("</ol>");


