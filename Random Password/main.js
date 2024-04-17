var lengthOfpass=10;

var CapitalLetter='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var SmallLetter='abcdefghijklmnopqrstuvwxyz';
var Number='0123456789';
var symbols='~@#$%^&*()?/[]{}<>!';

var container=CapitalLetter+SmallLetter+Number+symbols;
var inputBox=document.getElementById('input');
function generatePassword(){
 
  

var password='';
 password = password+=CapitalLetter[Math.floor(Math.random()*CapitalLetter.length)];
 password = password+=SmallLetter[Math.floor(Math.random()*SmallLetter.length)];
 password = password+=Number[Math.floor(Math.random()*Number.length)];
 password = password+=symbols[Math.floor(Math.random()*symbols.length)];

while(lengthOfpass>password.length){
    password=password+=container[Math.floor(Math.random()*container.length)]
}

inputBox.value=password;

}


///copy button


function copypass(){
    document.getElementById('copy').addEventListener('click',()=>{
        inputBox.select();
        document.execCommand("copy");
        var audio=new Audio();
        audio.play();
    
     })
}