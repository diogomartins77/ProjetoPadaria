import { bancoDeDadosPadaria } from "../produtos/BD_padaria.js";
const bancoDeDadosPadaria1 = bancoDeDadosPadaria

const conteudoPesquisa = document.querySelector('#conteudo-pesquisa')
const  listaDaSacolaContainer = document.querySelector('#ListaDaSacola') 
const paginaSacola = document.querySelector('#paginaSacola')

let produtoPesquisado = true
//variavel global para obj filtrados
let produtosDisponiveis = []

// === NOVAS DECLARAÇÕES GLOBAIS PARA O MODAL (Correção do erro de null) ===
const modal = document.getElementById('myModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const addsacolaBtn = document.getElementById('AddPedido');
let produtoAtualParaSacola = null; // Variável global para armazenar o produto selecionado
// =========================================================================

const pesquisar = pesquisar => {
    let input = document.getElementById('valorPesquisar')
    let valorInput = input.value.toLowerCase().trim()

    const produtosFiltrados = bancoDeDadosPadaria1.filter(produto => {
        return produto.categoria.toLowerCase() === valorInput || //pesquisando por categoria
            produto.categoria.toLowerCase() + 's' === valorInput || //pesquisando por categoria no plural
            produto.nome.toLowerCase() === valorInput || //pesquisando por nome
            produto.nome.toLowerCase() + 's' === valorInput || //pesquisando por nome no plural
            produto.subcategoria.toLowerCase() === valorInput || //pesquisando por sub categoria
            produto.categoria.toLowerCase() + ' ' + produto.subcategoria.toLowerCase() == valorInput || //pesquisando por categoria e subcategoria
            produto.categoria.toLowerCase() + "s" + ' ' + produto.subcategoria.toLowerCase() + 's' == valorInput ||  //pesquisando por categoria e subcategoria no (plural)
            produto.categoria.toLowerCase() === valorInput.normalize('NFD').replace(/[\u0300-\u036f]/g,)

    })
    return produtosFiltrados
}







//movendo os produtos pesquisados para o localstroge 
function exibir1() {

    let pesquisa = pesquisar()
    const produtosFiltrados = JSON.stringify(pesquisa)
    localStorage.setItem('pesquisado', produtosFiltrados)
    let inputPesquisar = document.getElementById('valorPesquisar')
    exibir()
    inputPesquisar.value = ''


}




function exibir() {
    

    const produtosFiltrados = localStorage.getItem('pesquisado')
    produtosDisponiveis = JSON.parse(produtosFiltrados)
    const container = document.getElementById('exibir')
    if (produtosDisponiveis.length === 0) {
        container.innerHTML = '<p>Nenhum produto encontrado.</p>';
        return;
    }


    const htmlDosProdutos = produtosDisponiveis.map(produto => {


        const precoFormatado = produto.preco.toFixed(2).replace('.', ',');
        const unidade = produto.venda || 'Un.'; // Adiciona uma unidade padrão
        const isSalgadoOuDoce = produto.categoria

        // O botão 'Fazer Pedido' (abre o modal)
        const botaoAdicionar = isSalgadoOuDoce
            ? `<button type="button" class =" id_produto1" data-produto-id="${produto.id}"><i class="fa-solid fa-plus"></i></button>`
            : ''; // Apenas Salgados e Doces abrem o modal de pedido/encomenda

        return `
        <div class="item-produto card p-2 m-2" style="">
            <div class="card-img" width: 200px;
            height: 150px;
            border: 3px ridge #8B4513;
            display: flex; align-items: center; justify-content: center;">
                ${produto.img}
            </div>
            <div class="card-body text-center">
                <h5 class="card-title">${produto.nome}</h5>
                <p class="card-text">${produto.descricao}</p>
                <p class="card-text"><strong>R$ ${precoFormatado} / ${unidade}</strong></p>
                ${botaoAdicionar}
            </div>
        </div>
    `;


    }).join(''); // Junta todas as strings HTML em uma única string

    container.innerHTML = htmlDosProdutos; //Injeta todo o HTML de uma vez
}

//exibindo na pagina produtos
const TodosProdutos = todosProduto => {

    const produtosLista = bancoDeDadosPadaria.filter(produto => {
        return produto.categoria

    })
    return produtosLista

}

let produtoslistados = []
function listandoProdutos() {
    let container = document.getElementById('todos_os_produtos')
    produtoslistados = TodosProdutos()

    const htmlDosProdutos = produtoslistados.map(produto => {
        const precoFormatado = produto.preco.toFixed(2).replace('.', ',');
        const unidade = produto.venda || 'Un.'; // Adiciona uma unidade padrão
        const isSalgadoOuDoce = produto.categoria

        // O botão 'Fazer Pedido' (abre o modal)
        const botaoAdicionar = isSalgadoOuDoce
            ? `<button type="button" class =" id_produto1" data-produto-id="${produto.id}"><i class="fa-solid fa-plus"></i></button>`
            : ''; // Apenas Salgados e Doces abrem o modal de pedido/encomenda

        return `
        <div class="item-produto card p-2 m-2" style="">
            <div class="card-img" width: 200px;
            height: 150px;
            border: 3px ridge #8B4513;
            display: flex; align-items: center; justify-content: center;">
                ${produto.img}
            </div>
            <div class="card-body text-center">
                <h5 class="card-title">${produto.nome}</h5>
                <p class="card-text">${produto.descricao}</p>
                <p class="card-text"><strong>R$ ${precoFormatado} / ${unidade}</strong></p>
                ${botaoAdicionar}
            </div>
        </div>
    `;


    }).join(''); // Junta todas as strings HTML em uma única string


    container.innerHTML = htmlDosProdutos; //Injeta todo o HTML de uma vez*/


}

//retira todo o menu inicial da pagina index
function retirandoPrincipal() {

    const principal = document.querySelector('.conteudoPrincipal')
    if (principal) {
        principal.id = 'principalEsconder'
    }
    //
}

//retira a lista de todos os produtos da pagina produtos
function retirandoProduto() {

    const todosProdutos = document.querySelector('.todosProdutos')
    if (todosProdutos) {
        todosProdutos.id = 'todos_os_produtos_esconder'
        //
    }
}


function mostrandoPesquisa() {
    if (produtoPesquisado === true) {
        exibir1()
        retirandoPrincipal()
        retirandoProduto()
        add()
    }
}


///////////////////////////////////////////////////////////////////////
//Abrindo modal pelo botao de produto pesquisados
function add() {

    let btn = document.querySelectorAll('.id_produto1') //lista de botoes com essa classe

    btn.forEach(btn => {//percorrendo lista de botoes

        // 3. Adiciona o evento de clique a CADA botão
        btn.addEventListener('click', (event) => {
            // usando o 'data-produto-id' para recuperar o id de cada produto
            const idDoProduto = event.currentTarget.dataset.produtoId;
            //recuperando o objeto completo do id selecionado usando find()
            const produtoEscolhido = produtosDisponiveis.find(p => p.id == idDoProduto)

            if (produtoEscolhido) {
                //passando o produto escolhido pelo id para a função (agora apenas preenche)
                adicionarNaSacola(produtoEscolhido)
            }

        });


    });

}

//Abrindo modal pelo botao de todos ops produtos
function add2() {
    let btn2 = document.querySelectorAll('.id_produto1') //lista de botoes com essa classe

    btn2.forEach(btn => {//percorrendo lista de botoes

        // 3. Adiciona o evento de clique a CADA botão
        btn.addEventListener('click', (event) => {
            // usando o 'data-produto-id' para recuperar o id de cada produto
            const idDoProduto = event.currentTarget.dataset.produtoId;
            //recuperando o objeto completo do id selecionado usando find()
            const produtoEscolhido = produtoslistados.find(p => p.id == idDoProduto)

            if (produtoEscolhido) {
                //passando o produto escolhido pelo id para a função (agora apenas preenche)
                adicionarNaSacola(produtoEscolhido)
            }
        });
    })

};


// === FUNÇÃO ADICIONAR NA SACOLA REVISADA (APENAS PREENCHE E ARMAZENA O PRODUTO) ===
function adicionarNaSacola(produto) {

    // Armazena o produto na variável global para ser usado no 'salvarNaSacola'
    produtoAtualParaSacola = produto;

    const T = document.getElementById('T');
    const P = document.getElementById('P');

    // Verifica se os elementos do modal existem antes de tentar preencher
    if (T) T.innerHTML = (`${produto.nome}`);
    if (P) P.innerHTML = (`${produto.descricao}`);


    // Abre o modal (Se 'modal' foi encontrado no escopo global, como corrigido)
    if (modal) {
        modal.showModal();
    }
}
// =========================================================================
function notificarsacola(item) {
    // 1. Percorrer todas as chaves no localStorage
    for (let i = 0; i < localStorage.length; i++) {
        // Obter o nome da chave na posição 'i'
        const key = localStorage.key(i);

        // 2. Verificar se a chave começa com o prefixo desejado
        if (key && key.startsWith(item)) {
           
          return  paginaSacola.classList.add('sacolaAtiva')
        }
         return
       }   
      
    }
// === NOVAS FUNÇÕES PARA CONFIGURAR E TRATAR EVENTOS DO MODAL (Chamadas apenas uma vez) ===

function fecharModal() {
    if (modal) {
        modal.close();
        // Limpa a referência ao produto atual
        produtoAtualParaSacola = null;
    }
}

function salvarNaSacola() {
    // Apenas procede se houver um produto selecionado
    if (produtoAtualParaSacola) {
        // Pega os valores do modal (opcional, dependendo de onde você usa isso)
        const peso = document.getElementById('peso').value
        const quantidade = document.getElementById('quantidade').value
        const imgReferencia = document.getElementById('file-name-display-custom').value
        produtoAtualParaSacola.peso = peso
        produtoAtualParaSacola.quantidade = quantidade
        produtoAtualParaSacola.imgReferencia = imgReferencia

        // Chave para o localStorage
        let sacolaKey = `sacola_${produtoAtualParaSacola.id}`

        // Salva o produto no localStorage
        let produtos = JSON.stringify(produtoAtualParaSacola)
        localStorage.setItem(sacolaKey, produtos)

        // Fecha o modal após adicionar
        fecharModal();
        notificarsacola('sacola_')
       
    } else {
        console.warn("Nenhum produto para adicionar à sacola.");
    }
}

function configurarListenersModal() {
    // 1. Configura o Listener do botão de fechar (Usa a variável global 'closeModalBtn')
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', fecharModal);
    } else {
        console.error("Elemento 'closeModalBtn' não encontrado no DOM. Verifique o HTML.");
    }

    // 2. Configura o Listener do botão de Adicionar Pedido (Usa a variável global 'addsacolaBtn')
    if (addsacolaBtn) {
        addsacolaBtn.addEventListener('click', salvarNaSacola);
    } else {
        console.error("Elemento 'AddPedido' (addsacolaBtn) não encontrado no DOM. Verifique o HTML.");
    }
}
// =========================================================================




//TROCANDO A MENSAGEM DE IMAGEM PARA IMAGEM ADICIONADA
if (document.getElementById('imagem_referencia_input_custom')) {
    document.getElementById('imagem_referencia_input_custom').addEventListener('change', function () {
        // Pega o input
        let input = this;
        // Pega o elemento onde o nome será exibido
        let fileNameDisplay = document.getElementById('file-name-display-custom');

        // Verifica se há arquivos
        if (input.files && input.files.length > 0) {
            // Exibe o nome do primeiro arquivo
            fileNameDisplay.textContent = input.files[0].name;
        } else {
            // Volta ao texto padrão
            fileNameDisplay.textContent = 'Nenhum arquivo selecionado';
        }
    });
}

// === CONFIGURAÇÃO FINAL: GARANTE QUE O DOM ESTÁ PRONTO ===
document.addEventListener('DOMContentLoaded', (event) => {
    // Configura os listeners do modal (agora com certeza o HTML já existe)
    configurarListenersModal();
    notificarsacola('sacola_')
    const eventoPesquisar = document.querySelector('.botao_pesquisar')
    eventoPesquisar.addEventListener('click', mostrandoPesquisa)
    // Funções que também precisam de elementos DOM existentes
    listandoProdutos(); // Se esta função manipula o DOM, deve estar aqui.
    add2(); // Configura listeners para os botões da lista completa de produtos
    
});

