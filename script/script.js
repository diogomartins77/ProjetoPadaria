const bancoDeDadosPadaria = [
    // Bolo
    {
        id: 'bolo001',
        categoria: 'Bolo',
        subcategoria: 'Tradicionais',
        nome: 'Brigadeiro',
        descricao: 'Bolo de chocolate com cobertura e recheio de brigadeiro cremoso.',
        preco: 55.00,
        venda: 'KG',
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/boloBrigadeiro.png'></img>`,


    },
    {
        id: 'bolo002',
        categoria: 'Bolo',
        subcategoria: 'Tradicionais',
        nome: 'Casadinho',
        descricao: 'Bolo com recheio de beijinho e brigadeiro.',
        preco: 52.00,
        venda: 'KG',
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/boloCasadinho.png'></img>`,
    },
    {
        id: 'bolo003',
        categoria: 'Bolo',
        subcategoria: 'Tradicionais',
        nome: 'Prestigio',
        descricao: 'Bolo de chocolate com recheio e cobertura de coco e chocolate.',
        preco: 58.00,
        venda: 'KG',
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/prestigio.png'></img>`,
    },
    {
        id: 'bolo004',
        categoria: 'Bolo',
        subcategoria: 'Frutas',
        nome: 'Creme com Morango',
        descricao: 'Bolo de creme com pedaços frescos de morango.',
        preco: 60.00,
        venda: 'KG',
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/cremeMorango.png'></img>`,
    },
    {
        id: 'bolo005',
        categoria: 'Bolo',
        subcategoria: 'Frutas',
        nome: 'Creme com Abacaxi',
        descricao: 'Bolo de creme com pedaços de abacaxi.',
        preco: 58.00,
        venda: 'KG',
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/boloAbacaxi.png'></img>`,
    },
    {
        id: 'bolo006',
        categoria: 'Bolo',
        subcategoria: 'Gourmet',
        nome: 'Trufado',
        descricao: 'Bolo com recheio e cobertura de chocolate trufado intenso.',
        preco: 70.00,
        venda: 'KG',
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/trufado.png'></img>`,
    },

    // Docinho
    {
        id: 'docinho001',
        categoria: 'Docinho',
        subcategoria: 'Tradicionais',
        nome: 'Brigadeiro',
        descricao: 'Clássico brigadeiro cremoso.',
        preco: 70.00,
        venda: 'Cento',
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/brigadeiro.png'></img>`,
    },
    {
        id: 'docinho002',
        categoria: 'Docinho',
        subcategoria: 'Tradicionais',
        nome: 'Casadinho',
        descricao: 'Dupla perfeita de beijinho e brigadeiro.',
        preco: 70.00,
        venda: 'Cento',
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/doceCasadinho.png'></img>`,
    },
    {
        id: 'docinho003',
        categoria: 'Docinho',
        subcategoria: 'Tradicionais',
        nome: 'Beijinho',
        descricao: 'Docinho de coco envolto em açúcar cristal.',
        preco: 70.00,
        venda: 'Cento',
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/beijinho.png'></img>`,
    },
    {
        id: 'docinho004',
        categoria: 'Docinho',
        subcategoria: 'Gourmet',
        nome: 'Ninho com Nutella',
        descricao: 'Brigadeiro de ninho com um recheio generoso de Nutella.',
        preco: 80.00,
        venda: 'Cento',
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/ninhoComNutella.png'></img>`,
    },
    {
        id: 'docinho005',
        categoria: 'Docinho',
        subcategoria: 'Gourmet',
        nome: 'Olho de Sogra',
        descricao: 'Docinho de ameixa com coco e doce de leite.',
        preco: 80.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/olhodeSogra.png'></img>`,
    },
    {
        id: 'docinho006',
        categoria: 'Docinho',
        subcategoria: 'Gourmet',
        nome: 'Bicho de Pé',
        descricao: 'Brigadeiro de morango com toque gourmet.',
        preco: 80.00,
        venda: 'Cento',
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/bichodePe.png'></img>`,
    },

    // Salgado
    {
        id: 'salgado001',
        categoria: 'Salgado',
        subcategoria: 'Frito',
        tipo: 'Mini',
        nome: 'Coxinha de Frango',
        descricao: 'Mini coxinhas crocantes com recheio de frango desfiado.',
        preco: 4.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/coxinhafrango.png'></img>`,
    },
    {
        id: 'salgado002',
        categoria: 'Salgado',
        subcategoria: 'Frito',
        tipo: 'Mini',
        nome: 'Coxinha de Carne',
        descricao: 'Mini coxinhas crocantes com recheio de carne moída.',
        preco: 4.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/coxinhacarne.png'></img>`,
    },
    {
        id: 'salgado003',
        categoria: 'Salgado',
        subcategoria: 'Frito',
        tipo: 'Mini',
        nome: 'Risole de Presunto e Queijo',
        descricao: 'Mini risoles com recheio cremoso de presunto e queijo.',
        preco: 4.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/risoles.png'></img>`,
    },
    {
        id: 'salgado004',
        categoria: 'Salgado',
        subcategoria: 'Frito',
        tipo: 'Grande',
        nome: 'Coxinha de Frango Grande',
        descricao: 'Coxinha grande e crocante com recheio de frango desfiado.',
        preco: 8.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/coxinhafrango.png'></img>`,
    },
    {
        id: 'salgado005',
        categoria: 'Salgado',
        subcategoria: 'Frito',
        tipo: 'Grande',
        nome: 'Risole de Presunto e Queijo Grande',
        descricao: 'Risole grande com recheio cremoso de presunto e queijo.',
        preco: 8.00,
        disponivel: true,
        img: `<img src= './imagens/imagens/imagensprodutos/risoles.png'></img>`,
    },
    {
        id: 'salgado006',
        categoria: 'Salgado',
        subcategoria: 'Assado',
        tipo: 'Mini',
        nome: 'Enroladinho de Frios',
        descricao: 'Mini pães enrolados com recheio de frios.',
        preco: 4.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/enroladinhofrios.png'></img>`,
    },
    {
        id: 'salgado007',
        categoria: 'Salgado',
        subcategoria: 'Assado',
        tipo: 'Mini',
        nome: 'Enroladinho de Salsicha',
        descricao: 'Mini pães enrolados com salsicha.',
        preco: 4.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/enroladinhosalsisha.png'></img>`,
    },
    {
        id: 'salgado008',
        categoria: 'Salgado',
        subcategoria: 'Assado',
        tipo: 'Mini',
        nome: 'Croissant de Carne',
        descricao: 'Mini croissants recheados com carne.',
        preco: 5.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/croissant-de-frango.webp'></img>`,
    },
    {
        id: 'salgado009',
        categoria: 'Salgado',
        subcategoria: 'Assado',
        tipo: 'Mini',
        nome: 'Croissant de Frango',
        descricao: 'Mini croissants recheados com frango.',
        preco: 5.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/croissant-de-frango.webp'></img>`,
    },
    {
        id: 'salgado010',
        categoria: 'Salgado',
        subcategoria: 'Assado',
        tipo: 'Grande',
        nome: 'Hambúrguer Cheddar e Bacon',
        descricao: 'Pão de hambúrguer artesanal com blend de carne, cheddar e bacon.',
        preco: 18.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/salgado-hamburguer.jfif'></img>`,

    },
    {
        id: 'salgado011',
        categoria: 'Salgado',
        subcategoria: 'Assado',
        tipo: 'Grande',
        nome: 'Hambúrguer Frango Catupiry',
        descricao: 'Pão de hambúrguer artesanal com frango desfiado e catupiry.',
        preco: 17.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/salgado-hamburguer.jfif'></img>`,
    },
    {
        id: 'salgado012',
        categoria: 'Salgado',
        subcategoria: 'Assado',
        tipo: 'Grande',
        nome: 'Salsicha Cheddar e Bacon',
        descricao: 'Pão grande com salsicha, queijo cheddar e bacon.',
        preco: 16.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/salgadoSalsichaGrande.jpg'></img>`,
    },
    {
        id: 'salgado013',
        categoria: 'Salgado',
        subcategoria: 'Assado',
        tipo: 'Grande',
        nome: 'Salsicha Frango Catupiry',
        descricao: 'Pão grande com salsicha e recheio de frango com catupiry.',
        preco: 15.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/salgadoSalsichaGrande.jpg'></img>`,
    },
    {
        id: 'salgado014',
        categoria: 'Salgado',
        subcategoria: 'Assado',
        tipo: 'Grande',
        nome: 'Torta de Frango Grande',
        descricao: 'Torta salgada generosa com recheio cremoso de frango.',
        preco: 45.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/Torta_de_frango_cremosa.jpg'></img>`,
    },

    // Pães
    {
        id: 'pao001',
        categoria: 'Pães',
        subcategoria: 'Tradicionais',
        nome: 'Pão Italiano',
        descricao: 'Pão de casca crocante e miolo macio.',
        preco: 12.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/paoItaliano.jfif'></img>`,
    },
    {
        id: 'pao002',
        categoria: 'Pães',
        subcategoria: 'Tradicionais',
        nome: 'Pão Francês',
        descricao: 'O clássico pãozinho do dia a dia.',
        preco: 1.50,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/pao-frances.jfif'></img>`,
    },
    {
        id: 'pao003',
        categoria: 'Pães',
        subcategoria: 'Tradicionais',
        nome: 'Pão Australiano',
        descricao: 'Pão levemente adocicado com um toque de mel.',
        preco: 15.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/australiano.jfif'></img>`,
    },
    {
        id: 'pao004',
        categoria: 'Pães',
        subcategoria: 'Tradicionais',
        nome: 'Pão da Casa',
        descricao: 'Pão artesanal com receita secreta da casa.',
        preco: 14.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/daCasa.jfif'></img>`,
    },
    {
        id: 'pao005',
        categoria: 'Pães',
        subcategoria: 'Tradicionais',
        nome: 'Torradas',
        descricao: 'Fatias de pão assadas até ficarem crocantes.',
        preco: 8.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/torradas.jfif'></img>`,
    },
    {
        id: 'pao006',
        categoria: 'Pães',
        subcategoria: 'Doce',
        nome: 'Rosca',
        descricao: 'Rosca doce com cobertura de açúcar ou glacê.',
        preco: 10.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/rosca.jfif'></img>`,
    },
    {
        id: 'pao007',
        categoria: 'Pães',
        subcategoria: 'Doce',
        nome: 'Lingua de Sogra',
        descricao: 'Pão doce em formato de língua, crocante e açucarado.',
        preco: 3.50,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/lingua-de-sogra.jfif'></img>`,
    },
    {
        id: 'pao008',
        categoria: 'Pães',
        subcategoria: 'Recheado',
        nome: 'Pão Recheado Presunto e Queijo',
        descricao: 'Pão macio com recheio generoso de presunto e queijo.',
        preco: 9.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/paaorecheadoP+Q.jfif'></img>`,
    },
    {
        id: 'pao009',
        categoria: 'Pães',
        subcategoria: 'Recheado',
        nome: 'Pão Recheado Peito de Peru',
        descricao: 'Pão macio com recheio de peito de peru e queijo.',
        preco: 9.50,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/paoRecheadoPeitoPeru.jfif'></img>`,
    },

    // Doce da Vitrine
    {
        id: 'doce001',
        categoria: 'Doce',
        subcategoria: 'Copo',
        nome: 'Mousse de Maracujá',
        descricao: 'Mousse refrescante de maracujá em copo individual.',
        preco: 10.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/mousse-m.jpg'></img>`,
    },
    {
        id: 'doce002',
        categoria: 'Doce',
        subcategoria: 'Torta',
        nome: 'Torta de Limão',
        descricao: 'Torta clássica de limão com merengue.',
        preco: 12.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/torteldelimao.jfif'></img>`,
    },
    {
        id: 'doce003',
        categoria: 'Doce',
        subcategoria: 'Bolachinha',
        nome: 'Sequilhos',
        descricao: 'Biscoitos amanteigados que derretem na boca.',
        preco: 20.00, // Preço por pacote
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/bolachinha.jfif'></img>`,
    },
    {
        id: 'doce004',
        categoria: 'Doce',
        subcategoria: 'Vitrine',
        nome: 'Croissant de Chocolate',
        descricao: 'Croissant folhado recheado com chocolate.',
        preco: 8.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/crasaintdeChocolate.jfif'></img>`,
    },
    {
        id: 'doce005',
        categoria: 'Doce',
        subcategoria: 'Vitrine',
        nome: 'Bombas',
        descricao: 'Choux cream recheado com creme e coberto com chocolate.',
        preco: 9.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/bombas.jfif'></img>`
    },
    {
        id: 'doce006',
        categoria: 'Doce',
        subcategoria: 'Vitrine',
        nome: 'Carolinas',
        descricao: 'Pequenas choux cream recheadas com creme.',
        preco: 7.00,
        disponivel: true,
        img: `<img src= './imagens/imagensprodutos/carolina.jfif'></img>`
    },

];



const conteudoPesquisa = document.querySelector('#conteudo-pesquisa')
const listaDaSacolaContainer = document.querySelector('#ListaDaSacola')
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

    const produtosFiltrados = bancoDeDadosPadaria.filter(produto => {
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



const criarCardProduto = (produto) => {
    const precoFormatado = produto.preco.toFixed(2).replace('.', ',');
    const unidade = produto.venda || 'Un.'; // Adiciona uma unidade padrão
    const isSalgadoOuDoce = produto.categoria === 'Salgado' || produto.categoria === 'Doce';

    // O botão 'Fazer Pedido' (abre o modal)
    const botaoAdicionar = isSalgadoOuDoce
        ? `<button class="btn btn-warning mt-2 btn-sm" onclick="abrirModal('${produto.id}')">
            Fazer Pedido
           </button>`
        : ''; // Apenas Salgados e Doces abrem o modal de pedido/encomenda

    return `
        <div class="card p-2 m-2" style="width: 18rem;">
            <div class="card-img-top mx-auto" style="height: 200px; display: flex; align-items: center; justify-content: center;">
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
};
function exibir() {
    const formsPesquisa = document.querySelectorAll('#botao_pesquisar');
    formsPesquisa.forEach(form => {
        form.addEventListener('submit', (e) => {

            e.preventDefault(); // Evita o recarregamento da página

        });
    });

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
            ? `<button type="button" class =" id_produto" data-produto-id="${produto.id}"><i class="fa-solid fa-plus"></i></button>`
            : ''; // Apenas Salgados e Doces abrem o modal de pedido/encomenda

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


    }).join(''); // Junta todas as strings HTML em uma única string

    container.innerHTML = htmlDosProdutos; //Injeta todo o HTML de uma vez
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

    let btn = document.querySelectorAll('.id_produto') //lista de botoes com essa classe

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


    // === CONFIGURAÇÃO FINAL: GARANTE QUE O DOM ESTÁ PRONTO ===
    document.addEventListener('DOMContentLoaded', (event) => {
        // Configura os listeners do modal (agora com certeza o HTML já existe)
        configurarListenersModal();
        notificarsacola('sacola_')
        const eventoPesquisar = document.querySelector('.botao_pesquisar')
        eventoPesquisar.addEventListener('click', mostrandoPesquisa)
        // Funções que também precisam de elementos DOM existentes

        // Configura listeners para os botões da lista completa de produtos

    });
