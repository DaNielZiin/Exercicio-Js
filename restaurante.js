function calc(){

    
    var txtKilo = document.getElementById('txtKilo');
    var txtgrama = document.getElementById('txtgrama');
    
    var kilo = Number(txtKilo.value);
    var grama = Number(txtgrama.value);

    var precototal = (grama * kilo) / 1000;

    outgrama.textContent = ` Valor a pagar R$ ${precototal}`
    
}