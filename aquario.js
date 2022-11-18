function calculadora(){
    var alt = parseFloat(document.getElementById("altura").value);
    var larg = parseFloat(document.getElementById("largura").value);
    var compr = parseFloat(document.getElementById("comprimento").value);

    var volume = alt*larg*compr;  
    var litro =  volume/1000;
    var aux = Math.ceil(litro/50)  
    var aquecedor = (aux)*50;
    var bomba = (litro*6); 



    document.getElementById("volume").innerHTML = litro.toFixed(2) +'L ' + 'litros' 
    document.getElementById("bomba").innerHTML = bomba.toFixed(2) + 'L/h '+ 'bomba'  
    document.getElementById("aquecedor").innerHTML = aquecedor.toFixed(2) + 'W ' + 'aquecedor'

}