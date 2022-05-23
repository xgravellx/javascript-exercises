const myForm = document.querySelector('#form');
const isim = document.querySelector('#ad');
myForm.addEventListener('submit', eventiYakala);

function eventiYakala(e) {
    console.log(isim.value);
    console.log('Event names:' + e.tyoe)
    e.preventDefaul();
}