
const agora = new Date()
const hora = agora.getHours()

if (hora > 6 && hora <= 12){
    document.getElementById('d1').innerHTML = (`Agora sao ${hora}Hrs, Bom Dia`)
}else if (hora <= 18){
    document.getElementById('d1').innerHTML = (`Agora sao ${hora}Hrs, Boa Tarde`)
}else if (hora <= 23){
    document.getElementById('d1').innerHTML = (`Agora sao ${hora}Hrs, Boa Noite`)
}else {
    document.getElementById('d1').innerHTML = (`Agora sao ${hora}Hrs , Boa Madrugada`)
} 

