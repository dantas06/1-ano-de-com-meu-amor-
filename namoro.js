let currentIndex = 0;

function showSlide(index) {
    const slider = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides img').length;

    // Loop para reiniciar slides
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;

    // Movimenta o carrossel
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Alterna automaticamente a cada 3 segundos
setInterval(nextSlide, 3000);

// Inicializa com o primeiro slide visível
showSlide(currentIndex);
