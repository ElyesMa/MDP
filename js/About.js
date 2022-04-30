function ChangeSrc(i) {

   if(i=="option1"){
      document.getElementById("Video").src ="/Media/MDP.mp4";
      }
   else  if(i=="option2"){
      document.getElementById("option1").classList.remove("active");
      document.getElementById("Video").src ="/Media/MGA.mp4";
   }
   console.log(i);
}

function Move(j)
{
   string=["Le Client satisfait c'est le moteur de notre société ","Notre formule magique = La bonne qualité * la bonne marque / le bon prix ","Cher client , l'achat réussi n'est complet qu'avec le bon entretien , Soyez le bienvenue dans notre Atelier "];
   if ((parseInt(document.getElementById("hide").innerHTML)<3)&&(j>0)){
      document.getElementById("Bienvenue").innerHTML=string[parseInt(document.getElementById("hide").innerHTML)];
       }
       else if(j>0){
      document.getElementById("Bienvenue").innerHTML=string[parseInt(document.getElementById("hide").innerHTML)%3];
       }

   for(var i=0;i<152;i++){
   document.getElementById("Logo2").style.left=(document.getElementById("Logo2").offsetLeft+10*i*j)/19.2+"VW";
   document.getElementById("Logo3").style.left=(document.getElementById("Logo3").offsetLeft+10*i*j)/19.2+"VW";
   document.getElementById("hide").style.left=(document.getElementById("hide").offsetLeft+10*i*j)/19.2+"VW";
   document.getElementById("hide").style.width=(document.getElementById("hide").offsetWidth-10*i*j)/19.2+"VW";
   document.getElementById("Logo2").style.transform = "rotate("+9.5*i*j+"deg)";
   document.getElementById("Logo3").style.transform = "rotate("+9.5*i*j+"deg)";
   }
 if(j==1){
   document.getElementById("Logo1").removeAttribute("onmouseover");
   document.getElementById("Logo3").setAttribute('onmouseover', "Move(-1)");
   document.getElementById("hide").innerHTML=parseInt(document.getElementById("hide").innerHTML)+1;
 }
 else{
   document.getElementById("Logo3").removeAttribute("onmouseover");
   document.getElementById("Logo1").setAttribute('onmouseover', "Move(1)");
 }
   console.log(document.getElementById("hide").innerHTML);
}.2