/*
index2.html dpsyasonon içerisinde yer alan listelerin sonuna "Ankara" isimli madde ekleyiniz.
*/

const newListElement = document.createElement('li');

newListElement.className = 'liste-item';
newListElement.textContent = 'Ankara';

document.querySelector('ul').appendChild(newListElement);
