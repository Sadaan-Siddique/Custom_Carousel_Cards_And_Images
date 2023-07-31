// Carousel Cards Slides

const cards = document.querySelectorAll(".card");
console.log(cards);
let chng_card = 0;

cards.forEach((card, index) => {
    card.style.left = `${index * 33.3}%`
})

const slide_cards = () => {
    cards.forEach((card) => {
        card.style.transform = `translateX(${-chng_card * 100}%)`;
    })
}
document.querySelector('.carousel_cards .prev_btn').addEventListener('click', () => {
    chng_card--;
    if (chng_card < 0) {
        chng_card = cards.length - 3;
    }
    slide_cards();
    console.log(chng_card);
})
document.querySelector('.carousel_cards .next_btn').addEventListener('click', () => {
    chng_card++;
    if (chng_card >= cards.length - 2) {
        chng_card = 0;
    }
    slide_cards();
    console.log(chng_card);
})

// Carousel Images Slides

const images = document.querySelectorAll('.img_slides');
let slide_num = 0;
console.log(images);

const imgSliding = () => {
    images.forEach((slides, index) => {
        slides.style.left = `${index * 100}% `;
    })
};
imgSliding();

const chngImgSlides = () => {
    images.forEach((slides) => {
        slides.style.transform = `translateX(${-slide_num * 100}%)`;
    });
};

document.querySelector('.carousel_images .prev_btn').addEventListener('click', () => {
    slide_num--;
    if (slide_num < 0) {
        slide_num = images.length - 1;
    }
    chngImgSlides();
    console.log('Carousel Images', slide_num);
});

document.querySelector('.carousel_images .next_btn').addEventListener('click', () => {
    slide_num++;
    if (slide_num >= images.length) {
        slide_num = 0;
    }
    chngImgSlides();
    console.log('Carousel Images', slide_num);
});
