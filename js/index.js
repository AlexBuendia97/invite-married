'use strict'
const myElement = document.querySelector('#cuenta');
const mainSection = document.querySelector('#main-photo');
const whereWhen = document.querySelector('#where-section');
const nosotros = document.querySelector('#nosotros');
const confirm = document.querySelector('#confirm');
const toggler = document.querySelector('.navbar-toggler');
const navItem1 = document.querySelector('#navItem1');
const navItem2 = document.querySelector('#navItem2');
const navItem3 = document.querySelector('#navItem3');
const navItem4 = document.querySelector('#navItem4');
const btnMapa1 = document.querySelector('#mapa1');
const btnMapa2 = document.querySelector('#mapa2');
const modalContent1 = document.querySelector('#modalContent1');
const modalContent2 = document.querySelector('#modalContent2');


simplyCountdown(myElement, {
    year: 2022, // required
    month: 4, // required
    day: 22, // required
    hours: 20, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'día', plural: 'días' },
        hours: { singular: 'hr', plural: 'hrs' },
        minutes: { singular: 'min', plural: 'mins' },
        seconds: { singular: 'seg', plural: 'seg' }
    },
    plural: true, //use plurals
    inline: true, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: false,
    onEnd: function () {
        // your code
        return;
    },
    refresh: 1000, //default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false, // enable count up if set to true
});

function scrollIntoViewOffset(element) {
    let headerOffset = 75;
    let elPosition = element.getBoundingClientRect().top;
    let offsetPosition = elPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
   });
}

navItem1.addEventListener('click', () => {
    scrollIntoViewOffset(mainSection);
    toggler.click();
});
navItem2.addEventListener('click', () => {
    scrollIntoViewOffset(whereWhen);
    toggler.click();
});
navItem4.addEventListener('click', () => {
    scrollIntoViewOffset(nosotros);
    toggler.click();
});

navItem3.addEventListener('click', () => {
    scrollIntoViewOffset(confirm);
    toggler.click();
});

btnMapa1.addEventListener('click', () => {
    modalContent1.style.display = 'block';
    modalContent2.style.display = 'none';
});

btnMapa2.addEventListener('click', () => {
    modalContent1.style.display = 'none';
    modalContent2.style.display = 'block';
});