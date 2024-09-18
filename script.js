document.addEventListener('DOMContentLoaded', () => {
    const images = [
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
        './img/5.jpg',
        './img/6.jpg',
        './img/7.jpg',
        './img/8.jpg',
        './img/9.jpg',
        './img/10.jpg',
        './img/11.jpg',
        './img/12.jpg',
        './img/13.jpg',
        './img/14.jpg',
        './img/15.jpg',
    ];

    const button = document.getElementById('generate-btn');
    const imageWrapper = document.getElementById('image-wrapper');
    const randomImage = document.getElementById('random-image');

    randomImage.src = ''; 
    randomImage.classList.add('hidden'); 
    button.addEventListener('click', () => {

        imageWrapper.classList.add('shuffling');
        randomImage.classList.add('hidden');

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * images.length);
            randomImage.src = images[randomIndex];
            randomImage.classList.remove('hidden');
            imageWrapper.classList.remove('shuffling');
        }, 3000); 
    });
});
