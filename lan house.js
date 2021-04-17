function lan(){

    var txtMinutos = document.getElementById('txtMinutos');
    var txtClim = document.getElementById('txtClim');
    var outValor = document.getElementById('outValor');
    var outCliente = document.getElementById('outCliente');

    var preco = Number(txtMinutos.value);
    var tempodeuso = Number(txtClim.value);

    var total = tempodeuso / 15
    var total2 = Math.ceil(total)
    var final = total2 * preco
    

    outValor.textContent = final


}