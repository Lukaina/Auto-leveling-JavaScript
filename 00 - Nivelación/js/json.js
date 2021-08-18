//Antes

// var animal = {
//     color: "amarillo",
//     patas: 4,
//     suave: false,
//     setTextura: function() {
//         this.suave = true
//     }
// }

// console.log(animal);


//Ahora

// const usuario = { //Igual a un objeto
//     nombre: "Julia",
//     edad: 3,
//     personalidad: "Alegre"
// }

// document.write(usuario.edad)


//Object Destructuring

// const usuario = { //Igual a un objeto
//         nombre: "Julia",
//         edad: 3,
//         personalidad: "Alegre"
//     }
    
// document.write(usuario.nombre)
// document.write(usuario.edad)
// document.write(usuario.personalidad)

//Para no tener que escribir usuario. una y otra vez, usamos el destructuring

const {nombre, edad, personalidad} = { 
        nombre: "Julia",
        edad: 3,
        personalidad: "Alegre"
    }
    
// document.write(nombre)
// document.write(edad)
// document.write(personalidad)
document.write(nombre, edad, personalidad)

    