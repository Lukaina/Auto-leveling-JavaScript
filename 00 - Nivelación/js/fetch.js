// //AJAX
// XMLHttpRequest()

// //SOAP Arquitectura
// <xml>
//     Toda la info XML
// </xml>

//REST Arquitectura (Con lo que más se trabaja ahora y es con json)

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
