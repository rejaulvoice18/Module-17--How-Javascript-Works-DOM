
// var first = document.getElementById('first');
// first.style.backgroundColor = 'yellow';
// first.style.color = 'green';
// first.style.fontSize = '45px';
// first.style.border = '2px solid orange';
// first.style.padding = '10px 20px';
// first.style.borderRadius = '10px';

// var authors = document.getElementsByClassName('author');
// for(var i = 0; i< authors.length; i++){
//     var element = authors[i];
//     element.style.backgroundColor = 'green';
//     element.style.padding = '10px';
//     element.style.color = 'white';
//     element.innerHTML = 'Lekhok-' + (i+1);
// }
//     document.body.style.background = 'lightblue'
// var authors = document.querySelectorAll('.special h3');
// for(var i = 0; i< authors.length; i++){
//     var element = authors[i];
//     element.style.backgroundColor = 'green';
//     element.style.padding = '10px';
//     element.style.color = 'white';
//     element.innerHTML = 'Lekhok-' + (i+1);
//     element.setAttribute('title', 'all author is same')
// }

// var authors = document.getElementsByClassName('author');
// for(var i = 0; i<authors.length; i++){
//     var element = authors[i];
//     element.style.backgroundColor = 'green';
//     element.style.padding = '10px';
//     element.style.color = 'white';
//     // element.innerHTML = 'Rejaul-' + (i+1);
// }

var author = document.getElementsByClassName('author');
for(var i =0; i<author.length; i++){
    var element = author[i];
    element.style.backgroundColor = 'green';
    element.style.padding = '10px';
    element.style.color = 'white';
    element.innerHTML = 'Rejaul-' + (i+1) 
}
// Article change
// var articleChange = document.querySelectorAll('.special h3');
// for(var i=0; i<articleChange.length; i++){
//     var element = articleChange[i];
//     element.style.backgroundColor = 'tomato';
//     element.style.padding = '10px';
//     element.style.color = 'white';
//     element.innerHTML = 'Karim-' + (i+1);
// }

//Article Change

var articleChange2 = document.querySelectorAll('.special h3');
for(var i = 0; i< articleChange2.length; i++){
    var element = articleChange2[i];
    element.style.backgroundColor = 'tomato';
    element.style.padding = '10px';
    element.style.color = 'white';
}

//Paragraph styling

// const paragraphList = document.getElementsByClassName('description');
// for(let i=0; i<paragraphList.length; i++){
//     let element = paragraphList[i];
//     element.style.border = '2px solid tomato';
//     element.style.padding = '5px';
// }

const paragraphList2 = document.getElementsByClassName('description');
for(var i= 0; i < paragraphList2.length; i++){
    let element = paragraphList2[i];
    element.style.border = '2px solid tomato';
    element.style.padding = '10px';
}
const article = document.getElementById('first-article');

const newParagraph = document.createElement('p');
newParagraph.innerHTML = 'This element added by javaScript';
article.appendChild(newParagraph);

//adding one more item on grocery list.

const ul = document.getElementById('gift-list');
const li = document.createElement('li');
li.innerHTML = 'brand ne item added';
ul.appendChild(li);
