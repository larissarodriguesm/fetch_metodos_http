// function getPosts(){    
//     fetch('https://jsonplaceholder.typicode.com/posts')
        // then trata a promise
        // .then(function(response){
        //     return response.json()
        // })
//         .then(response => response.json())
//         .then(json => console.log(json))
// }

// getPosts();

// let getPosts = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(json => console.log(json))
// };

// getPosts();

// Resolver tudo em uma linha só:
// let getPosts = () => 
//     fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(json => console.log(json))

// getPosts();

// Criando um get mmais dinâmico
// let getPosts = (url) => {
//     fetch(url)
//         .then(response => response.json())
//         .then(json => console.log(json))
// };

// getPosts('https://jsonplaceholder.typicode.com/posts');


let getById = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(json => console.log(json))
    // catch captura erro
    .catch(error => console.log(error))
    .finally(() => console.log('Terminou'))

}
getById(1);
//getById(2);




