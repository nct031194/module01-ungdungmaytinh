let giatria = document.getElementById('a').value;
let giatrib = document.getElementById('b').value;

function Cong(){
   giatria = document.getElementById('a').value;
   giatrib = document.getElementById('b').value;
   document.getElementById('c').innerHTML = (parseInt(giatria) + parseInt(giatrib));
}
function Tru(){
   giatria = document.getElementById('a').value;
   giatrib = document.getElementById('b').value;
   document.getElementById('c').innerHTML = (parseInt(giatria) - parseInt(giatrib));
}
function Nhan(){
   giatria = document.getElementById('a').value;
   giatrib = document.getElementById('b').value;
   document.getElementById('c').innerHTML = (parseInt(giatria) * parseInt(giatrib));
}
function Chia(){
   giatria = document.getElementById('a').value;
   giatrib = document.getElementById('b').value;
   document.getElementById('c').innerHTML = (parseInt(giatria) / parseInt(giatrib));
}

