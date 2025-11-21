//variaveis globais
let qtdCliques = 0;
let segundos = 0;
let cliquePorMinuto = 0;

// Ao carregar a página, executa a função cronometro
window.onload = ()=>{
    cronometro();
}

//Função para lidar com o clique do botão
function handleClick(){
    qtdCliques++; //Mesma coisa que qtdCliques = qtdCliques + 1
    atualizaContador();
}

function atualizaContador(){
    let container = document.getElementById('quantidade-cliques');
    console.log(container)
    container.innerText = qtdCliques;

}

//cronometro de execução
function cronometro(){
    sentTimeout(()=>{
        segundos++;
        calculaCliquesPorMinutos()
        cronometro();
    },1000)
}


function atualizaCronometro(){
    let elemento_cronometro = document.getElementById('cronometro')
    elemento_cronometro.innerText(segundos);
}

//Calcular Cliques por minuto
function calculaCliquesPorMinutos(){
    cliquePorMinuto = cliques/(segundos/60)
}

//Atualiza o CPM
function atualizaCPM(){
    let cpm = document.getElementById('cpm')
    cpm.innerText = cliquePorMinuto;
}