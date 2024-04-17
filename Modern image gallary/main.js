
var fullImgbx=document.getElementById('fullImgbx');
var FullImg=document.getElementById('fullImg');

function showImage(src){

      fullImgbx.style.display='flex';
      FullImg.src=src;
}


function closeBox(){
    fullImgbx.style.display='none';
}