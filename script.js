const arrow_right_m = document.querySelector(".mobile .fa-chevron-right");    
const arrow_left_m = document.querySelector(".mobile .fa-chevron-left");
const arrow_right_d = document.querySelector(".desktop .fa-chevron-right");
const arrow_left_d = document.querySelector(".desktop .fa-chevron-left");
const home_image = document.querySelector(".grid__home__image img");
const grid__description_main = document.querySelector(".grid__description-main");
const grid__description_text = document.querySelector(".grid__description-text");
const mobile__nav__menus = document.querySelector(".mobile__nav__menus");
const nav__links = document.querySelector(".nav__links");
const nav__links__close = document.querySelector(".nav__links__close");
const overlay = document.querySelector(".overlay");

const images = [
    "images/desktop-image-hero-1.jpg",
    "images/desktop-image-hero-2.jpg",
    "images/desktop-image-hero-3.jpg",
];
const images_mobile = [
    "images/mobile-image-hero-1.jpg",
    "images/mobile-image-hero-2.jpg",
    "images/mobile-image-hero-3.jpg",
];

const main = [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials"
];
const text = [
    `We provide unmatched quality, comfort, and style for property owners across the country.
    Our experts combine form and function in bringing your vision to life. Create a room in your
    own style with our collection and make your property a reflection of you and what you love.`,
    `With stores all over the world, it's easy for you to find furniture for your home or place of business.
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
    store locator. Any questions? Don't hesitate to contact us today.`,
    `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
    to ensure that every product is made as perfect and as consistent as possible. With three decades of
    experience in this industry, we understand what customers want for their home and office.`
];



var x = window.matchMedia("(max-width: 35rem)")
x.addListener(isMoble) // Attach listener function on state changes

function isMoble() {
    return x.matches
}

var selected_index = 0;

const handleRight = () => {
    if (selected_index < images.length - 1) {
        selected_index++;
    } else {
        selected_index = 0;
    }
    updateContent();
};

const handleLeft = () => {
    if (selected_index == 0) {
        selected_index = 2;
    } else {
        selected_index--;
    }
    updateContent();
};

arrow_right_m.addEventListener("click", handleRight)
arrow_right_d.addEventListener("click", handleRight)

arrow_left_m.addEventListener("click", handleLeft)
arrow_left_d.addEventListener("click", handleLeft)

mobile__nav__menus.addEventListener("click", () => {
    nav__links.style.display = 'flex';
    nav__links__close.style.display = 'block';
    overlay.style.display = 'block';
})

nav__links__close.addEventListener("click", () => {
    nav__links.style.display = 'none';
    nav__links__close.style.display = 'none';
    overlay.style.display = 'none';
})

function updateContent() {
    home_image.src = isMoble() ? images_mobile[selected_index] : images[selected_index];
    grid__description_main.innerHTML = main[selected_index];
    grid__description_text.innerHTML = text[selected_index];
}

updateContent();
