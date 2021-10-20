let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) //Adiciona um valor no final do vetor
        let item = document.createElement('option') //Cria o option do select
        item.text = `Valor ${num.value} adicionado` //Transforma em texto o option
        lista.appendChild(item) //Insere o option no select
        res.innerHTML = '' //Limpar o res ao adicionar novo número
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' /*num = input de entrada. Limpar o imput após clicar em adicionar */
    num.focus()  /*Limpar o imput após clicar em adicionar */
}

function finalizar () {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]    
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}

function limpar (){
    
    //limpa as mensagens de resultado
    res.innerHTML = '';


//zera a lista valores
    valores= [];


//retorna ao input para add novos valores
    num.select();
    
    //Remove o item adicionado na lista 1 por 1, no caso o option //aqui explica como fazer pra remover tudo: http://devfuria.com.br/javascript/manipulando-combobox-select-com-javascript/
    let listin = document.querySelector('#flista')
    listin.remove(0);
}