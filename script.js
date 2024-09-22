document.getElementById('surpriseButton').addEventListener('click', () => {
    const message = document.getElementById('message');
    message.classList.toggle('hidden'); // Cambia entre mostrar y ocultar el mensaje
});

// Función para crear corazones flotantes
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.querySelector('.hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}

const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length; // Vuelve al inicio
    images[currentIndex].classList.add('active');
}

// Cambia la imagen cada 1 segundo
setInterval(showNextImage, 8000);

setInterval(createHeart, 300);

// Intentar reproducir el audio al cargar la página
window.addEventListener('load', () => {
    const audio = document.getElementById('backgroundMusic');

    function tryPlayAudio() {
        audio.muted = false; // Desactiva el silencio del audio
        audio.play().then(() => {
            console.log("Audio está reproduciéndose automáticamente.");
        }).catch(error => {
            console.error("Error al intentar reproducir el audio automáticamente:", error);
            document.body.addEventListener('click', tryPlayAudioOnce, { once: true });
        });
    }

    function tryPlayAudioOnce() {
        audio.play().then(() => {
            console.log("Audio se está reproduciendo después de la interacción del usuario.");
        }).catch(error => {
            console.error("Error al intentar reproducir el audio después de la interacción:", error);
        });
    }

    tryPlayAudio();
});


