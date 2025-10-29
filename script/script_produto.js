import { bancoDeDadosPadaria } from "../produtos/BD_padaria.js";

const bd = bancoDeDadosPadaria
const navDoce = document.getElementById('nov_doce_lista')
const navSal = document.getElementById('nov-sal-lista')
const navPao = document.getElementById('nov-pao-lista')


function novDoce (){
     let container = navDoce
     let doce = 'doce'
    const htmlDosProdutos = bd.map(produto => {
        if (produto.id.startsWith(doce) && produto.id  ) {
          
        
        const precoFormatado = produto.preco.toFixed(2).replace('.', ',');
        const unidade = produto.venda || 'Un.'; // Adiciona uma unidade padrão
        const isSalgadoOuDoce = produto.categoria

        // O botão 'Fazer Pedido' (abre o modal)
        const botaoAdicionar = isSalgadoOuDoce
            ? `<button type="button" class =" id_produto_nov" data-produto-id="${produto.id}"><i class="fa-solid fa-plus"></i></button>`
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


    }}).join(''); // Junta todas as strings HTML em uma única string


    container.innerHTML = htmlDosProdutos; //Injeta todo o HTML de uma vez

}



function navsal (){
     let container = navSal
     
    const htmlDosProdutos = bd.map(produto => {
        
        if (produto.subcategoria == 'Assado' ) {
          
        
        const precoFormatado = produto.preco.toFixed(2).replace('.', ',');
        const unidade = produto.venda || 'Un.'; // Adiciona uma unidade padrão
        const isSalgadoOuDoce = produto.categoria

        // O botão 'Fazer Pedido' (abre o modal)
        const botaoAdicionar = isSalgadoOuDoce
            ? `<button type="button" class =" id_produto_nov" data-produto-id="${produto.id}"><i class="fa-solid fa-plus"></i></button>`
            : ''; // Apenas Salgados e Doces abrem o modal de pedido/encomenda

        return `
        <div class="item-produto card p-2 m-2">
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


    }}).join(''); // Junta todas as strings HTML em uma única string


    container.innerHTML = htmlDosProdutos; //Injeta todo o HTML de uma vez

}



function navpao (){
     let container = navPao
     let pao = 'pao'
    const htmlDosProdutos = bd.map(produto => {
        if (produto.id.startsWith(pao) && produto.id  ) {
          
        
        const precoFormatado = produto.preco.toFixed(2).replace('.', ',');
        const unidade = produto.venda || 'Un.'; // Adiciona uma unidade padrão
        const isSalgadoOuDoce = produto.categoria

        // O botão 'Fazer Pedido' (abre o modal)
        const botaoAdicionar = isSalgadoOuDoce
            ? `<button type="button" class =" id_produto_nov" data-produto-id="${produto.id}"><i class="fa-solid fa-plus"></i></button>`
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


    }}).join(''); // Junta todas as strings HTML em uma única string


    container.innerHTML = htmlDosProdutos; //Injeta todo o HTML de uma vez

}

//Abrindo modal pelo botao de produto pesquisados
function add() {

    let btn = document.querySelectorAll('.id_produto_nov') //lista de botoes com essa classe

    btn.forEach(btn => {//percorrendo lista de botoes

        // 3. Adiciona o evento de clique a CADA botão
        btn.addEventListener('click', (event) => {
           // usando o 'data-produto-id' para recuperar o id de cada produto
            const idDoProduto = event.currentTarget.dataset.produtoId;
            //recuperando o objeto completo do id selecionado usando find()
            const produtoEscolhido = bd.find(p => p.id == idDoProduto)

            if (produtoEscolhido) {
                //passando o produto escolhido pelo id para a função (agora apenas preenche)
                adicionarNaSacola(produtoEscolhido)
                
            }


        });


    });

}
novDoce()
navsal()
navpao()
add()



// === FUNÇÃO ADICIONAR NA SACOLA REVISADA (APENAS PREENCHE E ARMAZENA O PRODUTO) ===
function adicionarNaSacola(produto) {

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

// === NOVAS FUNÇÕES PARA CONFIGURAR E TRATAR EVENTOS DO MODAL (Chamadas apenas uma vez) ===

function fecharModal() {
    if (modal) {
        modal.close();
        // Limpa a referência ao produto atual
        produtoAtualParaSacola = null;
    }
}



