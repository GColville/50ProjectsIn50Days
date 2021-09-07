const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

// using async await
async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com/', config);

    const data = await res.json();

    jokeElement.innerHTML = data.joke;
}

// use fetch to get jokes, this goes inside the above method if used
// fetch('https://icanhazdadjoke.com/', config)
//     .then(res => res.json())
//     .then(data => {
//         jokeElement.innerHTML = data.joke;
// });