let num = [10, 12, 15, 40, 54]
num[5]=150 //Adicionar um número dentro do vetor indicando onde
num.push(19) //Adiciona um número dentro do vetor no final da fila
num.length
num.sort()

console.log(`Nosso vetor é o ${num}`)

 let pos = num.indexOf(0)
 if (pos == -1) {
     console.log('O valor não foi encontrado!')
 } else {
     console.log(`O valor 10 está na posição ${pos}`)
 }
