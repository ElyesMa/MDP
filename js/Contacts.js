function Move(j)
{
  document.getElementById("Logo1").removeAttribute("onmouseover");
  document.getElementById("Logo3").removeAttribute("onmouseover");

   let string=["Le Client satisfait c'est le moteur de notre société ","Notre formule magique = La bonne qualité * la bonne marque / le bon prix ","Cher client , l'achat réussi n'est complet qu'avec le bon entretien , Soyez le bienvenue dans notre Atelier "];
   if ((parseInt(document.getElementById("hide").innerHTML)<3)&&(j>0)){
      document.getElementById("Bienvenue").innerHTML=string[parseInt(document.getElementById("hide").innerHTML)];
       }
       else if(j>0){
      document.getElementById("Bienvenue").innerHTML=string[parseInt(document.getElementById("hide").innerHTML)%3];
       }

   for(let i=0;i<150;i++){
   document.getElementById("Logo2").style.left=document.getElementById("Logo2").offsetLeft+10*i*j+"px";
   document.getElementById("Logo3").style.left=document.getElementById("Logo3").offsetLeft+10*i*j+"px";
   document.getElementById("hide").style.left=document.getElementById("hide").offsetLeft+10*i*j+"px";
   document.getElementById("hide").style.width=document.getElementById("hide").offsetWidth-10*i*j+"px";
   document.getElementById("Logo2").style.transform = "rotate("+9.5*i*j+"deg)";
   document.getElementById("Logo3").style.transform = "rotate("+9.5*i*j+"deg)";
   }
 if(j==1) {
  setInterval(function () {
   document.getElementById("Logo1").removeAttribute("onmouseover");
   document.getElementById("Logo3").setAttribute('onmouseover', "Move(-1)");
   document.getElementById("hide").innerHTML=parseInt(document.getElementById("hide").innerHTML)+1;}
   , 3900);
 }
 else{
  setInterval(function () {
   document.getElementById("Logo3").removeAttribute("onmouseover");
   document.getElementById("Logo1").setAttribute('onmouseover', "Move(1)");}
   , 3900);
 }
}

function ChangeSrc() {
 
       document.getElementById("Middle").src ="/Images/Contacts/"+i+".jpg";
       if(i==9){
        i=1;
       }
       else{
       i++;
       }
    
}

function playAudio() { 
  myAudio.loop = true;
  myAudio.volume = 1;
  myAudio.playbackRate=1;
  myAudio.play(); 

  
} 


let str="Nos équipes de nos points de vente à votre service de lundi à vendredi de 08h:00 >>> 18h:00 et samedi de 08h:00 >>> 15h:00                                       Nos adresses : Point de vente Farht HACHED : 39, Avenue Farhat HACHED, GP1 4011 Hammam Sousse                 Point de vente Charles DEGAULLE : Immeuble EL MALEKA , Avenue Charles DEGAULLE , 4011 Hammam Sousse                              Atelier MANI GERMAN AUTOS : Route ceinture Sahloul EL GHRABI 4011 Hammam Sousse                              Vous pouvez nous contacter sur les numéros suivants : 73.324.546 - 73.362.386 - 98.643.878 - 50.808.432                       Ou par mail sur : mdp.farhat.hached@gmail.com / mdp.charles.degaulle@gmail.com                       "
let string=[];

for (let k = 0; k < str.length; k++)
{
  string[k] = str.substring(k,1+k);
}
str="";
function Tap() {
  document.getElementById("Texte").innerHTML+=string[z];
  str+=string[z];
  if(str.length==736){
    z=0;
    str="";
    document.getElementById("Texte").innerHTML="";
   }
   else if(str.length==158){
    document.getElementById("Texte").innerHTML="";
    z++;
   }
   else if(str.length==268){
    document.getElementById("Texte").innerHTML="";
    z++;
   }
   else if(str.length==397){
    document.getElementById("Texte").innerHTML="";
    z++;
   }
   else if(str.length==506){
    document.getElementById("Texte").innerHTML="";
    z++;
   }
   else if(str.length==632){
    document.getElementById("Texte").innerHTML="";
    z++;
   }
   else{
   z++;
   }

   console.log(string.length);
   console.log(str.length);
}

var i=2;
var z=0;
 window.onload = function () {
    playAudio();
    setInterval(ChangeSrc, 1000);
    setInterval(Tap, 100);
}

