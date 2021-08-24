const evaluar = () => {
    const edad = prompt("¿Cuál es tu edad?");

    if (edad < 18) {
        alert("Menor de edad");
        return
    } 
    alert("Mayor de edad");
}

// evaluar();
setTimeout(evaluar, 2000)