function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res') 
if (fano.value.length == 0 || fano.value > ano) {
    alert('Erro - verifique seus dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebe.jpg')
            } else if (idade < 26){
                //adolescente
                img.setAttribute('src', 'adolescentem.jpg')
            } else if (idade < 35){
                //Jovem
                img.setAttribute('src', 'homem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'velho.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'idosom.jpg')
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >=0 && idade < 10) {
                    //Criança
                    img.setAttribute('src', 'jovem.jpg')
                } else if (idade < 25){
                    //adolescente
                    img.setAttribute('src', 'adolescente.jpg')
                } else if (idade < 35){
                    //Jovem
                    img.setAttribute('src', 'mulher.jpg')
                } else if (idade < 50) {
                    //Adulto
                    img.setAttribute('src', 'velha.jpg')
                } else {
                    //idoso
                    img.setAttribute('src','idoso.jpg')
                }
            }
        res.style.textAlign = 'center'
        res.innerHTML =" Detectamos " + genero + " com " + idade + " anos."
        res.appendChild(img)
    }
}
