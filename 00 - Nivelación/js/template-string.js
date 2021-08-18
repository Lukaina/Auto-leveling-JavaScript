const nombre = "Sara"
const edad = new Date().getFullYear() - 2000;

// document.write("Bienvenido/a " + nombre + ", tu edad es de " + edad)

//Se pueden reemplazar los + 

document.write(`Bienvenido/a ${nombre}, tu edad es de ${edad}`)
document.write(`Bienvenido/a ${nombre}, tu edad es de ${edad}`.toUpperCase()) //Así el mensaje queda todo en mayúscula 