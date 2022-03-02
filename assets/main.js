const main = document.querySelector('#main-card')
const heading = document.querySelector('#heading')
const plan = document.querySelector('#plan')
const content = document.querySelector('#card-content')
const mainBtn = document.querySelector('.btn-main')


main.addEventListener('mouseenter', (e) => {

    heading.style.transform = 'perspective(1000px) translateZ(100px)';
    content.style.transform = 'perspective(1000px) translateZ(50px)';
    mainBtn.style.transform = 'perspective(1000px) translateZ(50px)';
})


main.addEventListener('mouseleave', (e) => {
    heading.style.transform = 'translateZ(0px)';
    content.style.transform = 'translateZ(0px)';
    mainBtn.style.transform = 'translateZ(0px)';
})


