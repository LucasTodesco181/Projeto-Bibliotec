const livros = document.querySelectorAll(".livro")

const botaoAnterior = document.getElementById("pagina-anterior");
const botaoProxima = document.getElementById("proxima-pagina");
const numeroPagina = document.querySelector(".pagina-atual");
const quantidadeLivros = document.querySelector(".quantidade-livros");



//* Configuração da paginação

//Define em quantos livros serão mostrados em cada página
const livrosPorPagina = 4;

//Guarda qual página está sendo exibida, começando na página 1
let paginaAtual = 1;


//*Calculando o total de páginas
//Divide a quantidade total de livros pela quantidade de livros por página
//Math.ceil() -> arredonda o resultado para cima

//Exemplo
//10 livros / 4 por página = 2.5
//Math.ceil() = 2.5 arrendondando para cima -> 3 páginas

const totalPaginas = Math.ceil(livros.length / livrosPorPagina)

//*Função responsavel por mostrar a página (atualizar os elementos)

function mostrarPagina() {

    //Descobre o indice do primeiro livro que deve aparecer

    //Página 1:
    // (1-1) * 4 = 0

    //Página 2
    // (2-1) * 4

    //livros = [1, 2, 3, 4, 5, 6, 7, 8]
    //Página 1 = 1, 2, 3, 4
    //Página 2 = 5, 6, 7, 8
    const inicio = (paginaAtual - 1) * livrosPorPagina;


    //Descobre até onde os livros devem ser exibidos

    //Pagina 1: inicio 0 -> fim 0 + 4 = 4
    //Pagina 2: inicio 4 -> fim 4 + 4 = 8
    const fim = inicio + livrosPorPagina;

    //Percorre toda a lista de livros encontrados no HTML
    //"livro" representa o elemento atual
    //"posicao" representa a posicao desse livro na lista
    livros.forEach((livro, posicao) => {

        //inicio na pagina 1= 0
        //fim = 4

        //Verifica se o indice/posicao do livro esta dentro do intervalo da pagina atual
        if(posicao >= inicio && posicao < fim) {
            //mostra o elemento na tela
            livro.style.display = "grid"
        }
        else {
            //se nao estiver, esconde o livo
            livro.style.display = "none";
        }

    })

    //Atualiza no HTML o numero da pagina atual
    numeroPagina.textContent = paginaAtual;

    //Inicialmente, consideramos o "fim" como a posição do ultimo livro mostrado
    let ultimoLivro = fim;

    //se o valor ultrapassar a quantidade real de livros, usamos a quantidade total
    if(ultimoLivro > livros.length) {
        ultimoLivro = livros.length;
    }

    quantidadeLivros.textContent = `Mostrando ${ultimoLivro} de ${livros.length} livros.`
}

//Evento de click no botão de proxima pagina

botaoProxima.addEventListener("click", () => {

    //so permite avançar se ainda existir uma proxima pagina
    if(paginaAtual < totalPaginas) {

        //Avança uma página
        //pagina = paginaAtual + 1
        paginaAtual ++;

        //Atualiza os livros exibidos na tela
        mostrarPagina();
    }
})

botaoAnterior.addEventListener("click", () => {

    // So permite voltar se nao estivermos na primeira pagina
    if(paginaAtual > 1) {

        //voltamos uma página
        paginaAtual--;

        //Atualiza os livros exibidos na tela
        mostrarPagina()
    }
})


//Quando a página carregar precisamos executar a função de mostrar página 
// uma vez para esconder os livros que nao pertencem a primeira página
mostrarPagina();