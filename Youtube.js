'use strict';

const moreBtn = document.querySelector('body .infoAndUpNext .info .metaData .title .Btn');
const title = document.querySelector('body .infoAndUpNext .info .metaData .title .text');



moreBtn.addEventListener('click', ()=> {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});