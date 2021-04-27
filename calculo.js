function exibir()
{
    var txtaluno = document.getElementById("txtaluno");
    var txtav1 = document.getElementById("txtav1");
    var txtav2 = document.getElementById("txtav2");
    var txtav3 = document.getElementById("txtav3");
    var outresultado = document.getElementById('outresultado');
    
    var aluno = (txtaluno.value);
    var av1 = Number(txtav1.value);
    var av2 = Number(txtav2.value);
    var av3 = Number(txtav3.value);

    outav1.textContent = `Av1 = ${av1}`
    outav2.textContent = `Av2 = ${av2}`
    outav3.textContent = `Av3 = ${av3}`

   
    if(av1 < av3){av3 = av1}
    if(av2 < av3){av3 = av2}

    var media = (av1 + av2) / 2
    if (av1 < 4 || av2 < 4 || media < 6) {outresultado.textContent= `${aluno}, Que pena mas  você foi reprovado.`}
    else{outresultado.textContent= `Parabéns ${aluno}, você foi aprovado.`}
}

document.getElementById("btnexibir").addEventListener('click' ,exibir) 