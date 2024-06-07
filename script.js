function changeBg(color){

    
  document.body.style.backgroundColor=color;
  
  if(color =="#000000"){
    for(let elm of txt){
    var txt= document.getElementsByClassName("text");
    
    elm.style.color="white";
  }  
}
   else{
    for(let elm of txt){
    elm.style.color="black";
   
    
   }

}
}

