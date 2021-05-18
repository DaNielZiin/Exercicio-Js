var txtvalor= document.getElementById('txtvalor')
   var outnota1 = document.getElementById('outnota1').value
   var outnota2 = document.getElementById('outnota2').value
   var outnota3 = document.getElementById('outnota3').value

  

   txtvalor = 160

   var nota100 = 0
   var nota50 = 0
   var nota10 = 0

   while(valor >= 100){
    nota100++
}
while(valor >= 50){
 nota50++
}
while(valor >= 10){
 nota10++
}
   

console.log(nota100)
console.log(nota50)
console.log(nota10)

   
    outnota1.textContent = `${nota100} Nota(s) de R$ 100 ` 
    outnota2.textContent = `${nota50} Nota(s) de R$ 50 ` 
    outnota3.textContent = `${nota10} Nota(s) de R$ 10 `
    
    document.getElementById('btnsaque').addEventListener('click', caixa);
