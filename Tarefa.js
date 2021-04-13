//ExercÃ­cios Entrada Processamento Saida JS

/*

    1 - Elaborar um programa que leia o valor de um jantar. 
    Calcule e informe o valor da taxa do garÃ§om (10%) e o valor total a ser pago

    Ex:
        Valor do Jantar: R$ 80.00
        Taxa do GarÃ§om: R$ 8.00
        Total a pagar: R$ 88.00
*/
var valor = Number (prompt('valor do jantar'));

var taxa = valor / 10;
var total = valor + taxa;

alert(`valor da taxa: ${taxa}`);
alert(`valor total: ${total}`);


/*

    2 - Elaborar um programa que leia a duraÃ§Ã£o de uma viagem em dias e horas.
    Calcule e informe a duraÃ£o total da viagem em nÃºmero de horas.


    Ex:
        NÂº Dias: 2
        NÂº Horas: 5
        Total de Horas: 53

*/
var numeroDias = Number(prompt("Informe o número de dias de duração da viagem:"));
var numeroHoras = Number(prompt("Informe o número de horas:"));
var horasTotais = (numeroDias * 24) + numeroHoras;
alert("O total de horas da viagem é de: "+horasTotais);



/*
    3 - Elaborar um programa que leia um nÃºmero.
    Calcule e informe os seus vizinhos, ou seja, o nÃºmero anterior e o nÃºmero posterior  

    Exemplo:
        NÃºmero: 15
        Vizinhos: 14 e 16

*/
var numeroInicial = Number(prompt("Informe um número:"));
var numeroAnterior = numeroInicial - 1;
var numeroPosterior = numeroInicial + 1;
alert("Seus vizinhos sao " +(numeroAnterior) +" e " +(numeroPosterior));

/*
    4 - Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vÃ£o pagÃ¡-la.
    Calcule e informe o valor a ser pago por cliente.

    Exemplo:
        Valor da conta: R$ 90.00
        NÃºmero de clientes: 3
        Valor por cliente: 30.00
*/
var valorConta = Number(prompt("Valor total da pizza: "));
var numeroCliente = Number(prompt("Número de clientes a pagar: "));
alert("Valor por cliente: " +valorConta/numeroCliente);



/*
    5 - Elaborar um programa para uma loja, o qual leia o preÃ§o de um prouto e informe as opÃ§Ãµes de pagamento.
    Calcule e informe o valor para pagamento Ã  vista com 10% de desconto e o valor em 3x.

    Exemplo:
        PreÃ§o: R$ 60.00
        Ã€ vista: R$ 54.00
        Ou 3x de R$: 20.00
*/
var precoProduto = Number(prompt("Informe o valor do produto: "));
var precoAVista = precoProduto*0.9;
var precoParcelado = precoProduto/3;
alert("Preço à vista: " +(precoAVista));
alert("Preço em 3x: " +(precoParcelado));
/*
    6 - Elaborar um programa que leia 3 notas de um aluno em uma determinada disciplina.
    Calcule e informe a mÃ©dia das notas.

    Exemplo:
        1Âª Nota: 7.5
        2Âª Nota: 8.0
        3Âª Nota: 6.4
        MÃ©dia: 7.3
*/
var nota1 = Number(prompt("Informe a primeira nota do aluno"));
var nota2 = Number(prompt("Informe a segunda nota do aluno"));
var nota3 = Number(prompt("Informe a terceira nota do aluno"));
alert("A média do aluno foi de: " +(nota1+nota2+nota3)/3);