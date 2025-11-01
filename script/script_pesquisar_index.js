import { bancoDeDadosPadaria } from "../produtos/BD_padaria.js";

const bd = bancoDeDadosPadaria

const paginaSacola = document.querySelector('#paginaSacola')
const valorImput = document.getElementById('valorPesquisarCelular')
const botao_pesquisar = document.getElementById('botao_pesquisar_celular')
// === NOVAS DECLARAÇÕES GLOBAIS PARA O MODAL (Correção do erro de null) ===
const modal = document.getElementById('myModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const addsacolaBtn = document.getElementById('AddPedido');
let produtoAtualParaSacola = null; // Variável global para armazenar o produto selecionado

let produtosDisponiveisCelular = []

const pesquisar = () => {

    if (!valorImput) {
        console.error("Elemento com ID 'valorPesquisarCelular' não encontrado.");
        return []; // Retorna array vazio se o input não existir
    }

    // Normaliza (remove acentos), converte para minúsculas e remove espaços.
    const valorPesquisaNormalizado = valorImput.value
        .toLowerCase()
        .trim()
        .normalize('NFD') // Normaliza para decompor caracteres acentuados
        .replace(/[\u0300-\u036f]/g, ''); // Remove os diacríticos (acentos)

    // Verifica se a variável do banco de dados existe
    if (typeof bancoDeDadosPadaria === 'undefined' || !Array.isArray(bancoDeDadosPadaria)) {
        console.warn("A variável 'bancoDeDadosPadaria' não está definida ou não é um array.");
        return [];
    }

    // 2. Função auxiliar para normalizar dados do produto
    const normalizarTexto = (texto) =>
        String(texto)
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');

    // 3. Filtrar o banco de dados
    const produtosFiltrados = bancoDeDadosPadaria.filter(produto => {
        // Normaliza as propriedades do produto para comparação
        const categoria = normalizarTexto(produto.categoria);
        const nome = normalizarTexto(produto.nome);
        const subcategoria = normalizarTexto(produto.subcategoria);

        // Combinações de pesquisa
        const catSubcat = `${categoria} ${subcategoria}`;

        // Para lidar com o plural de forma mais simples e flexível
        const valorPlural = valorPesquisaNormalizado + 's';

        // Lógica de pesquisa simplificada:
        return (
            // 1. Pesquisa exata (nome, categoria, subcategoria)
            valorPesquisaNormalizado === nome ||
            valorPesquisaNormalizado === categoria ||
            valorPesquisaNormalizado === subcategoria ||

            // 2. Pesquisa de categoria/nome no plural
            valorPesquisaNormalizado === nome + 's' ||
            valorPesquisaNormalizado === categoria + 's' ||

            // 3. Pesquisa de categoria e subcategoria combinadas
            valorPesquisaNormalizado === catSubcat ||

            // 4. Inclusão (se a string de pesquisa estiver contida nos dados)
            // Isso torna a pesquisa mais útil, permitindo buscar por 'pão' em 'pão de queijo'
            nome.includes(valorPesquisaNormalizado) ||
            categoria.includes(valorPesquisaNormalizado) ||
            subcategoria.includes(valorPesquisaNormalizado)
        );
    });

    return produtosFiltrados;
};



function addpesquisa() {
    const pesquisa = pesquisar()
    const produtosFiltrados = JSON.stringify(pesquisa)
    localStorage.setItem('pesquisado', produtosFiltrados)
    valorImput.value = ''
    exibirPesquisa()

}


function criarCard(produto) {
    const precoFormatado = produto.preco.toFixed(2).replace('.', ',');
    const unidade = produto.venda || 'Un.'; // Adiciona uma unidade padrão

    const botaoAdicionar =
        `<button type="button" class =" id_produto" data-produto-id="${produto.id}"><i class="fa-solid fa-plus"></i></button>`

    return `
        <div class="item-produto card p-2 m-2" >
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
}

const exibirPesquisa = () => {

    const produtosFiltrados = localStorage.getItem('pesquisado')
    produtosDisponiveisCelular = JSON.parse(produtosFiltrados)
    const container = document.getElementById('exibir')
    if (produtosDisponiveisCelular.length === 0) {
        container.innerHTML = '<p>Nenhum produto encontrado.</p>';
        return;
    }
    const html = produtosDisponiveisCelular.map(produtos => {
        return criarCard(produtos)
    })


    container.innerHTML = html
}



//retira a lista de todos os produtos da pagina produtos
function retirandoProduto() {

    const todosProdutos = document.querySelector('.todosProdutos')
    if (todosProdutos) {
        todosProdutos.id = 'todos_os_produtos_esconder'
        //
    }
}


//retira todo o menu inicial da pagina index
function retirandoPrincipal() {

    const principal = document.querySelector('.conteudoPrincipal')
    if (principal) {
        principal.id = 'principalEsconder'
    }
    //
}

function mostrandoPesquisa() {
    addpesquisa()
    retirandoPrincipal()
    retirandoProduto()
    add()
}

function add() {

    let btn = document.querySelectorAll('.id_produto') //lista de botoes com essa classe

    btn.forEach(btn => {//percorrendo lista de botoes

        // 3. Adiciona o evento de clique a CADA botão
        btn.addEventListener('click', (event) => {

            // usando o 'data-produto-id' para recuperar o id de cada produto
            const idDoProduto = event.currentTarget.dataset.produtoId;
            //recuperando o objeto completo do id selecionado usando find()
            const produtoEscolhido = produtosDisponiveisCelular.find(p => p.id == idDoProduto)

            if (produtoEscolhido) {
                //passando o produto escolhido pelo id para a função (agora apenas preenche)
                adicionarNaSacola(produtoEscolhido)
            }
        });
    });
}

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

function fecharModal() {
    if (modal) {
        modal.close();
        // Limpa a referência ao produto atual
        produtoAtualParaSacola = null;
    }
}

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
        notificarsacola("sacola_")

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



document.addEventListener('DOMContentLoaded', (event) => {
    // Configura os listeners do modal (agora com certeza o HTML já existe)
    configurarListenersModal();

    notificarsacola("sacola_")
    botao_pesquisar.addEventListener('click', mostrandoPesquisa)
    // Funções que também precisam de elementos DOM existentes

    // Configura listeners para os botões da lista completa de produtos

});


