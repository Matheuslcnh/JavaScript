let num = [5, 8, 2, 9]
num[2] = 3
num.push(10) // = adiciona
num.length // = Posiçoes
num.sort() // = Ordem Crescente
console.log('Vetor: ' +num)

for(var pos = 0; pos<num.length; pos++){
    console.log('Posição ' +pos + ' tem ' + num[pos])
}

// ouuu

for(var pos in num){
    console.log('Posição ' +pos + ' tem ' + num[pos])
}
var p = num.indexOf(11) // 11 nao tem, sendo assim ele retorna -1
if(p == -1){
    console.log('o valor nao foi encontrado')
}
console.log(p) 