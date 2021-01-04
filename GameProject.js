var th = document.getElementsByTagName("th");

function cambiarMarcador(){
  console.log("HOLA");
  if(this.textContent === " "){
    this.textContent ='X';
  }else if(this.textContent === "X"){
    this.textContent='O';
  } else{
    this.textContent =' ';
  }
}

for(var i=0; i < th.length; i++){
  th[i].addEventListener("click",cambiarMarcador);
}
