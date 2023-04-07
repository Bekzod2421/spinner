// domument

console.log(document)

console.log(document.getElementById('title'));

// document.getElementById('title').textContent = 'Hello DOM' 


console.log(document.getElementById('title').textContent);
console.log(document.getElementById('title').innerText);


console.log(document.getElementById('title').innerHTML);


document.getElementById('title').textContent = "<a>Link</a>";
document.getElementById('title').innerHTML = "<a href='#'>Link</a>";

console.log(document.getElementsByTagName('p')[2])

document.getElementsByTagName('p')[1].textContent = 'P 2 tegi';

console.log(document.getElementsByClassName('block')[0]);

console.log(document.getElementsByName('izoh')[1]);

document.getElementsByName('izoh')[1].value = "izoh matni"


console.log(document.querySelector('h3 a span'));
console.log(document.querySelectorAll('h3 a span')[1]);

console.log(document.body)

console.log(document.getElementById('input').value);

console.log(document.getElementById('h3').innerHTML);

document.getElementById('h3').style.color = 'red';
document.getElementById('h3').style.backgroundColor = 'yellow';
document.getElementById('h3').style.fontSize = '80px';

console.log(document.baseURI);
console.log(document.domain);
console.log(document.links);
console.log(document.title);
console.log(document.URL);

document.title = "Javascript";

console.log(document.forms)

document.getElementById('rasm').src = 'img/2.jpg';
document.getElementById('rasm').alt = '2-rasm';


// document.getElementsByClassName('block')[0].style.fontSize = '45px';
// document.getElementsByClassName('block')[0].style.color = 'red';
// document.getElementsByClassName('block')[0].style.backgroundColor = 'green';
document.getElementsByClassName('block')[0].style = "background-color: red; color: yellow; font-size: 45px; text-decoration: underline";

document.write("Hello world !!!")