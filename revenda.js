function Concluir(){
//campos
    var txtVeiculo = document.getElementById('txtVeiculo');
    var txtPreco = document.getElementById('txtPreco');
    var outVeiculo = document.getElementById('outVeiculo');
    var outPreco = document.getElementById('outPreco');

    //valores
    var veiculo = txtVeiculo.value;
    var preco = Number(txtPreco.value);

    //conv reultados
    var preco1 = preco / 2
    var preco2 = Math.ceil (preco1 / 12)

    //resultados
    outVeiculo.textContent = veiculo 
    outPreco.textContent = ` Entrada de ${preco1} + 12x de: ${preco2}`

}

