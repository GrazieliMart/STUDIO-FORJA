document.addEventListener('DOMContentLoaded', () => {
    const detailedSlides = document.querySelector('.detailed-slides');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');

    if (!detailedSlides || !prevArrow || !nextArrow) {
        console.error('Elementos não encontrados. Verifique os seletores.');
        return;
    }

    let currentIndex = 0;

    prevArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = detailedSlides.children.length - 1;
        }
        updateSlider();
    });

    nextArrow.addEventListener('click', () => {
        if (currentIndex < detailedSlides.children.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    });

    function updateSlider() {
        detailedSlides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});
