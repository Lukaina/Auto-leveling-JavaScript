const sumar = (a, b) => {
    return new Promise( (resolve, reject) => {
        if (a < 0 || b < 0) {
            reject("Esto no es válido")
        } else {
            resolve(a + b)
        }
    })
}

const result = sumar(-3, 5) //Si pongo -3 me dice "Esto no es válido" y con 3 será 8
    .then((res) => { 
    document.write(res);
    // console.log(res);
})
    .catch((error) => {
    document.write(error);
    // console.log(error)
});
    // console.log(result);

