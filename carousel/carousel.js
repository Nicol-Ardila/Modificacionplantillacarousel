document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');
    const carouselInner = document.querySelector('.carousel-inner');
    const indicators = document.querySelectorAll('.carousel-indicators button');
    let currentIndex = 0;
    const intervalTime = 6000; // Tiempo en milisegundos (3 segundos)
    let autoSlideInterval;

    function updateCarousel(index) {
        const totalItems = document.querySelectorAll('.carousel-item').length;
        const newIndex = (index + totalItems) % totalItems;
        const offset = -100 * newIndex;

        carouselInner.style.transform = `translateX(${offset}%)`;

        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === newIndex);
        });

        currentIndex = newIndex;
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            updateCarousel(currentIndex + 1);
        }, intervalTime);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    prevButton.addEventListener('click', () => {
        stopAutoSlide();
        updateCarousel(currentIndex - 1);
        startAutoSlide(); // Restart the auto-slide after manual change
    });

    nextButton.addEventListener('click', () => {
        stopAutoSlide();
        updateCarousel(currentIndex + 1);
        startAutoSlide(); // Restart the auto-slide after manual change
    });

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            stopAutoSlide();
            updateCarousel(i);
            startAutoSlide(); // Restart the auto-slide after manual change
        });
    });

    // Start the automatic sliding
    startAutoSlide();
});


// carousel.js
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menuToggle');
    var navbarNav = document.getElementById('navbarNav');

    menuToggle.addEventListener('click', function() {
        navbarNav.classList.toggle('show');
    });
});
