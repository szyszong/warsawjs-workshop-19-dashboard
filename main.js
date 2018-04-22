// const aside = document.querySelector('aside')
// const header = document.querySelector('.header')
// header.addEventListener('click', function () {
//     aside.classList.toggle('toggle')
// });
//




const aside = document.querySelector('aside')
const header = document.querySelector('.header')
header.addEventListener('click', function () {
    if (aside.classList.contains('toggle')) {
        aside.classList.remove('toggle')
    }
    else {
        aside.classList.add('toggle')
    }
});



//
// const aside = document.querySelector('aside');
// const header = document.querySelector('.header');
// header.addEventListener('click', function () {
//         aside.classList.remove('toggle')
// });