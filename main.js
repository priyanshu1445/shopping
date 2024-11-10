

var menuList = document.getElementById('menuList');
menuList.style.maxHeight="0px";


function toggleMenu(){
   if(menuList.style.maxHeight=="0px"){
       menuList.style.maxHeight="500px" 
   }

   else{
       menuList.style.maxHeight="0px"
   }
}

var show = document.getElementById('show');
var diva = document.getElementById('diva');
var divb = document.getElementById('divb');
var divc = document.getElementById('divc');

function about(){

  show.style.display="block";
  diva.style.display="block";

  divb.style.display="none";
  divc.style.display="none";
}


function choose(){

  show.style.display="block";
  diva.style.display="none";

  divb.style.display="block";
  divc.style.display="none";
}






