function tabuada() {
    let num = document.getElementById('txtn') //Cria a variável do input número
    let tab = document.getElementById('seltab') //Cria a variável do select
    if(num.value.length == 0){ //Se não houver nenhum valor digitado aparece mensagem de erro
        window.alert('Por favor, digite um número!')
    }else { //Se algum número for digitado assume as condições abaixo:
        let n = Number(num.value) //Pega o valor inserido no número
        let c = 1 //Contador iniciar no 1 e não no 0
        tab.innerHTML = '' //Limpar os options sempre que for simular um novo número para gerar tabuada
        while (c <= 10) { //contador para adicionar a tabuada inteira
            let item = document.createElement('option') // Cria o elemento Option dinamicamente para inserir no select
            item.text = `${n} X ${c} = ${n*c}` //O texto da option será esses valores
            item.value = `tab${c}` //serve para identificar item selecionado para o PHP
            tab.appendChild(item) //O select vai adicionar um elemento filho que é o Option
            c++ //Contar após o loop
        }
    }
}