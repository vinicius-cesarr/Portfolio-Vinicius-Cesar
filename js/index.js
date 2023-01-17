/*
     - passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
     - passo 2 - dar um jeito de identificar o clique no elemento da aba
     - passo 3 - quando o usuário clicar, desmarcar a aba selecionada
     - passo 4 - marcar a aba clicada como selecionado
     - passo 5 - esconder o conteúdo anterior
     - passo 6 - mostrar o conteúdo da aba selecionada
*/
const abas = document.querySelectorAll(".aba")
abas.forEach(aba => {
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        selecionarInformacao(aba)
       
    })
})
function selecionarAba(aba){
    const abaselecionado = document.querySelector(".aba.selecionado")
    abaselecionado.classList.remove("selecionado")

    aba.classList.add("selecionado");
}

function selecionarInformacao(aba){
    const informacaoSelecionada = document.querySelector(".informacao.selecionado")
    informacaoSelecionada.classList.remove("selecionado")

    const idDoElementoDeInformacaoDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacaoDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}
