//#region variaveis
let nome = "jefferson";
let idade = 18;
//#endregion

//#region funcoes
function exibirMensagem() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let mensagem = `Olá ${nome}, você tem ${idade} anos.`;
    document.getElementById("mensagem").innerText = mensagem;
}
//#endregion funcoes


exibirMensagem();