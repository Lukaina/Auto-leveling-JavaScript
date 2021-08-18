//Tengo dos listas
const frutas = ["Manzana", "Pera", "Mora"]
const verduras = ["Cebolla", "Zanahoria", "Lechuga"]

// document.write(frutas)
// document.write(verduras)

//Pero, ¿Qué pasa si quiero que sea una única lista?

// const nuevaLista = frutas + verduras;
// document.write(nuevaLista)

//Sin embargo necesito un crear un nuevo array y para eso, está el Spread Operator

const nuevaLista = [...frutas, ...verduras];
document.write(nuevaLista)


