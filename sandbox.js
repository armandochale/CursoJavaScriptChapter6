/*const para = document.querySelector('body > h1');
console.log(para);*/

/*const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');*/

/*paras.forEach(para => {
    console.log(para);
})*/

//console.log(errors);

// get an element by ID

/*const title = document.getElementById('page-title');
console.log(title);*/

// get elements by their class name

/*const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);*/
/*errors.forEach(error => {
    console.log(error);
});*/

// get elements by their tag name

/*const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);*/

//const para = document.querySelector('p');

//console.log(para.innerText);
//para.innerText = 'ninjas are awesome';

//const paras = document.querySelectorAll('p');

/*paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text';
});*/

//const content = document.querySelector('.content');

//console.log(content.innerHTML);
//content.innerHTML += '<h2>THIS IS A NEW H2</h2>';

/*const people = ['mario','luigi','yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});

*/

/*const link = document.querySelector('b');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://github.com/');
link.innerText = 'GitHub';

const msg = document.querySelector('a');

console.log(msg.getAttribute('class'));
msg.setAttribute('class','clear');
msg.setAttribute('style','color: pink;');*/

//const title = document.querySelector('h2');

//title.setAttribute('style','background-color: orange;');

/*console.log(title.style);
console.log(title.style.color);

title.style.backgroundColor = 'black';
title.style.color = 'blue';
title.style.fontFamily = 'Arial, Helvetica, sans-serif';*/

/*const styles = document.querySelector('p');
console.log(styles.classList);
styles.classList.add('first');
styles.classList.remove('second');*/
const para = document.querySelectorAll('p');

para.forEach(element => {
    if(element.textContent.includes('first')){
        element.classList.add('first')
    }
    if(element.innerText.includes('second')){
        element.classList.add('second');
    }
});

const title = document.querySelector('.title');

title.classList.toggle('example');
title.classList.toggle('example');