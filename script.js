
// const registerForm = document.querySelector('#register-form');
// console.log(registerForm);

// // handle form submit event
// registerForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     // collect username

//     const formData = new FormData(registerForm);  
//     const messageH1 = document.querySelector('#message');
//     messageH1.textContent = 'Account registered succussfully!'
// })
// // declare age virable
// const age = 44;
// // square of age
// function squareAge(age) {
//     const squareAge = age ** 2
//     return squareAge;
// } 

let clickEl = document.getElementById('#click-el')

function click(){
clickEl.textContent = 'fffffffffffffffffffffffff'
}






document.getElementById("fetchMoviesBtn").addEventListener("click", fetchMovies);

async function fetchMovies() {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ca8c800ebcmsh056e55ba363e9f7p1226a9jsne420a294dbb6',  // Replace with your RapidAPI key
            'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();  // Parse the JSON data
        displayMovies(data);  // Display the movies on the webpage
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

function displayMovies(movies) {
    const moviesDiv = document.getElementById("movies");
    moviesDiv.innerHTML = '';  // Clear previous movies

    movies.forEach(movie => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");

        movieDiv.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Rating: ${movie.rating}</p>
        `;
        
        moviesDiv.appendChild(movieDiv);
    });
}





