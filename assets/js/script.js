const elementSelect = selector =>  {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Selector '${selector}'not available, make sure you write the selector correctly`);
}


const btnToggle = elementSelect('#toggle');
const asideSidebar = elementSelect('#sidebar');
const content = elementSelect('.content');

btnToggle.addEventListener('click', () => {
   asideSidebar.classList.toggle('slideSidebar');
   content.classList.toggle('slideContent');
});


// Progress Bar HTML

const progressBarHtml = elementSelect('.circular-html')
const valueProgressContainerHtml = elementSelect('.progress-html')
const progressValueEndHtml = valueProgressContainerHtml.innerHTML;
let progressValueHtml = 0;
const progressHtml = setInterval(() => {
    progressValueHtml++;
    valueProgressContainerHtml.textContent = `${progressValueHtml}%`;
    progressBarHtml.style.background = `conic-gradient(
    #ff9933 ${progressValueHtml * 3.6}deg,
    #cadcff ${progressValueHtml * 3.6}deg
)`;

    if ( progressValueHtml == progressValueEndHtml ){
        clearInterval(progressHtml);
    }
}, 50)         

// Progress Bar Css

const progressBarCss = elementSelect('.circular-css')
const valueProgressContainerCss = elementSelect('.progress-css')
const progressValueEndCss = valueProgressContainerCss.innerHTML;
let progressValueCss = 0;
const progressCss = setInterval(() => {
    progressValueCss++;
    valueProgressContainerCss.textContent = `${progressValueCss}%`;
    progressBarCss.style.background = `conic-gradient(
    #3366cc ${progressValueCss * 3.6}deg,
    #cadcff ${progressValueCss * 3.6}deg
)`;

    if ( progressValueCss == progressValueEndCss ){
        clearInterval(progressCss);
    }
}, 50) 

// Progress Bar JS

const progressBarJs = elementSelect('.circular-js')
const valueProgressContainerJs = elementSelect('.progress-js')
const progressValueEndJs = valueProgressContainerJs.innerHTML;
let progressValueJs = 0;
const progressJs = setInterval(() => {
    progressValueJs++;
    valueProgressContainerJs.textContent = `${progressValueJs}%`;
    progressBarJs.style.background = `conic-gradient(
    #ccff00 ${progressValueJs * 3.6}deg,
    #cadcff ${progressValueJs * 3.6}deg
)`;

    if ( progressValueJs == progressValueEndJs ){
        clearInterval(progressJs);
    }
}, 50) 

// Progress Bar Php

const progressBarPhp = elementSelect('.circular-php')
const valueProgressContainerPhp = elementSelect('.progress-php')
const progressValueEndPhp = valueProgressContainerPhp.innerHTML;
let progressValuePhp = 0;
const progressPhp = setInterval(() => {
    progressValuePhp++;
    valueProgressContainerPhp.textContent = `${progressValuePhp}%`;
    progressBarPhp.style.background = `conic-gradient(
    #F54768 ${progressValuePhp * 3.6}deg,
    #cadcff ${progressValuePhp * 3.6}deg
)`;

    if ( progressValuePhp == progressValueEndPhp ){
        clearInterval(progressPhp);
    }
}, 50) 