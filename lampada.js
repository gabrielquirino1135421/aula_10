var lampOn=false;

function btnLampClick(){
    var imagem=document.getElementById('imgLamp');

    lampOn = !lampOn;

    if(lampOn){
        console.log("ligada");
    }
    else{
        console.log("disligada")
    }
}