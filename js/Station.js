function ChangeSrc() {
    let text =document.getElementById("logo").src;
    let position =text.search(/logo2/i);
    if(position>0){
       document.getElementById("logo").src ="/Images/Station/logo.png";
    
    }
    else if(position<0){
       document.getElementById("logo").src ="/Images/Station/logo2.png";
    }
    
 }
 
 function validateForm() {
    var Name = document.ContactForm.Name.value
    var FamilyName = document.ContactForm.FamilyName.value
    var Adress = document.ContactForm.Adress.value
    var PhoneNumber = document.ContactForm.PhoneNumber.value
    var mail = document.ContactForm.Email.value 
    var Carnumber = document.ContactForm.Carregistrationnumber.value 
    var Visitedate = document.ContactForm.Visitedate.value 
    var maintenancefields = document.ContactForm.maintenancefields.value 
    var atposition=mail.indexOf("@");  
    var dotposition=mail.lastIndexOf(".");  
  
    if (Name.length==0)
    return alert(`Name is required`)
    if (FamilyName.length==0)
    return alert(`FamilyName is required`)
    if (Adress.length==0)
    return alert(`Adress is required`)
    if (PhoneNumber.length==0)
    return alert(`PhoneNumber is required`)
    if (mail.length==0)
    return alert(`Email is required`)
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=mail.length)
    return alert("Please enter a valid e-mail address")
    if (Carnumber.length==0)
    return alert(`Car registration number is required`)
    if (Visitedate.length==0)
    return alert(`Viiste date is required`)
    if (maintenancefields.localeCompare("--Select--")==0)
    return alert(`maintenance tyoe required`)
    ChangeSrc();
    document.getElementById("Welcome").innerHTML="Mr/Mme "+Name+" "+FamilyName+" See you on "+Visitedate + " for " + maintenancefields;
    }

    function Move(j)
    {
       string=["Soucieux du bon fonctionnement de votre voture : Nous assurons tous les travaux de réparations mécaniques","La vidange complète retera toujours le meilleur choix pour augmenter la durée de vie de votre voiture","Surveiller l'usure des plaquttes de frein afin de protéger vos disques de frein & pour rouler en toute sécurité "];
       if ((parseInt(document.getElementById("hide").innerHTML)<3)&&(j>0)){
          document.getElementById("Bienvenue").innerHTML=string[parseInt(document.getElementById("hide").innerHTML)];
           }
           else if(j>0){
          document.getElementById("Bienvenue").innerHTML=string[parseInt(document.getElementById("hide").innerHTML)%3];
           }
    
       for(var i=0;i<145;i++){
       document.getElementById("Logo2").style.left=document.getElementById("Logo2").offsetLeft+10*i*j+"px";
       document.getElementById("Logo3").style.left=document.getElementById("Logo3").offsetLeft+10*i*j+"px";
       document.getElementById("hide").style.left=document.getElementById("hide").offsetLeft+10*i*j+"px";
       document.getElementById("hide").style.width=document.getElementById("hide").offsetWidth-10*i*j+"px";
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
    }