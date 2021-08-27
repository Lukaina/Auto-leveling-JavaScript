axios
    .get("https://jsonplaceholder.typicode.com/users/2")
    .then(({data}) => console.log(data.username)); //Destructuring