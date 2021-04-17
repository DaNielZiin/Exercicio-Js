
  // 1 - Elaborar um programa para uma revenda de veículos. O programa deve ler o modelo e o preço do veículo.
   //Deve, então, apresentar como resposta o valor da entrada (50%) e restante em 12x.

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
      
      




   //2 - Elaborar um programa para um restaurante que leia o preço por kg e o consumo em gramas de um cliente.
   //Exiba o valor a ser pago.

   function calc(){

    
      var txtKilo = document.getElementById('txtKilo');
      var txtgrama = document.getElementById('txtgrama');
      
      var kilo = Number(txtKilo.value);
      var grama = Number(txtgrama.value);
  
      var precototal = (grama * kilo) / 1000;
  
      outgrama.textContent = ` Valor a pagar R$ ${precototal}`
      
  }





   //3 - Elaborar um programa para uma lan house de um aeroporto. 
   //O programa deve ler o valor de cada 15 min de uso de um computador e o tempo de uso por um cliente em minutos.
   //Informe o valor a ser pago pelo cliente, sabendo que as frações de 15 minutos devem ser cobradas de forma integral. 
   
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
