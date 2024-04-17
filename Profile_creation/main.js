


function addProfile(){


var name=document.getElementById('name').value;
var betch=document.getElementById('betch').value;
var email=document.getElementById('email').value;

var profileBox=document.querySelector('.profileBox');
const div=document.createElement('div');
div.className='profile';
const h3=document.createElement('h3');
h3.innerHTML=name;
const h4=document.createElement('h4');
h4.innerHTML=email;
const button=document.createElement('button');
button.className='btn';
button.innerHTML='ViewMore';
var img=document.createElement('img');
img.src='bg.jpg';

profileBox.appendChild(div);
div.appendChild(img)
div.appendChild(h3);
div.appendChild(h4);
div.appendChild(button);


}

