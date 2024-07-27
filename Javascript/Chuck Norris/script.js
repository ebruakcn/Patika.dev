document.addEventListener('DOMContentLoaded', (event) => {
    const jokeElement = document.getElementById('joke');
    const newJokeButton = document.getElementById('newJokeButton');

    async function fetchJoke() {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await response.json();
            jokeElement.textContent = data.value;
        } catch (error) {
            jokeElement.textContent = 'Şaka yüklenirken bir hata oluştu. Lütfen tekrar deneyin.';
        }
    }

    newJokeButton.addEventListener('click', fetchJoke);

    // Sayfa yüklendiğinde bir şaka çek
    fetchJoke();
});
