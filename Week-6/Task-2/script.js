document.addEventListener('DOMContentLoaded', () => {
    const drumButtons = document.querySelectorAll('.drum');

    drumButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sound = button.getAttribute('data-sound');
            const audio = new Audio(sound);
            audio.play();
            button.classList.add('playing');
            setTimeout(() => button.classList.remove('playing'), 100);
        });
    });

    document.addEventListener('keydown', (e) => {
        const key = e.key.toUpperCase();
        const button = document.querySelector(`button[data-key="${key}"]`);
        if (button) {
            const sound = button.getAttribute('data-sound');
            const audio = new Audio(sound);
            audio.play();
            button.classList.add('playing');
            setTimeout(() => button.classList.remove('playing'), 100);
        }
    });
});