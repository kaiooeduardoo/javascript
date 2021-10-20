
function verificar() {
    var data = new Date() /*Cria variável data*/
    var ano = data.getFullYear() /*Variável que pega ano atual*/
    var fano = document.getElementById('txtano') /*Variável do input do ano*/
    var res = document.getElementById('res') /*Variável da Div usado de resposta [painel]*/
    if(fano.value.length == 0 || fano.value > ano) { /*Se nehum valor for digitado, exibe erro*/
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex') /*Pega a variável do Radio*/
        var idade = ano - Number(fano.value) /*Cálculo do ano atual menos ano digitado */
        var gênero = '' /*Variável para mostrar o Radio M e F */
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') /*Criando imagem com ID pelo JS, seria a mesma coisa no HTML5 -> <img id='foto'> */
        if (fsex[0].checked) { /*Se Radio = M estiver selecionado mostra Homem*/
            
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
                gênero = 'uma criança do sexo masculino'
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
                gênero = 'um jovem'
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
                gênero = 'um adulto'
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
                gênero = 'um idoso'
            }
        } else {
            
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
                gênero = 'uma criança do sexo femenino'
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
                gênero = 'uma jovem'
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
                gênero = 'uma adulta'
            } else {
                //idoso
                img.setAttribute('src', 'foto-idosa-f.png')
                gênero = 'uma idosa'
            }
        }
        res.style.textAlign = 'center'
        img.style.paddingTop = '15px'
        img.style.display = 'block'
        img.style.margin = 'auto'
        if(idade == 1){
            res.innerHTML = `Detectamos ${gênero} com ${idade} ano.`
        } else if (idade == 0){
            res.innerHTML = `Detectamos ${gênero} com meses de idade.`
        } else {
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        }
        
        res.appendChild(img) /*Adicionando o elemento, para aparecer no painel */
    }

}