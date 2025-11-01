import { bancoDeDadosPadaria } from "../produtos/BD_padaria.js";


const paginaSacola = document.querySelector('#paginaSacola')
const produtosEncontrados = [];
function listarProdutosPorPrefixo(prefixo) {


    // 1. Percorrer todas as chaves no localStorage
    for (let i = 0; i < localStorage.length; i++) {
        // Obter o nome da chave na posição 'i'
        const key = localStorage.key(i);

        // 2. Verificar se a chave começa com o prefixo desejado
        if (key && key.startsWith(prefixo)) {
            // 3. Se começar, obter o valor (o objeto do produto, que está em formato string)
            const valorString = localStorage.getItem(key);

            try {
                // 4. Converter a string JSON de volta para um objeto
                const produto = JSON.parse(valorString);

                // 5. Adicionar a chave e o objeto do produto à lista de resultados
                produtosEncontrados.push({
                    key: key,
                    produto: produto
                });
            } catch (e) {
                console.error(`Erro ao analisar JSON para a chave ${key}:`, e);
                // Você pode optar por adicionar o valor bruto se não for um JSON
                // produtosEncontrados.push({ key: key, valor: valorString });
            }
        }
    }

    return produtosEncontrados;
}


const prefixoDesejado = "sacola_";
const listaDeItens = listarProdutosPorPrefixo(prefixoDesejado);


function CriandoSacola() {
    const lista = listaDeItens
    //const produtosNaSacola = localStorage.getItem(sacola);

    // PRINCIPAL CORREÇÃO: Garante que addSacola seja um array se o localStorage for null
    let addSacola = []
    addSacola = lista

    const container = document.querySelector('#ListaDaSacola')


    //if (container) return; // Sai se não estiver na página correta

    let html = '<h2>Sua Sacola de Pedidos</h2>';
    let totalGeral = 0;

    if (addSacola.length === 0) {
        html += '<p style="text-align: center; color: #995423ff; ">Sua sacola de pedidos está vazia. Que tal fazer uma encomenda?</p>';
        container.innerHTML = html;
        return;
    }

    html += `
        <table class="table table-striped table-responsive-sm">
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Peso/Quantidade</th>
                    <th>Preço Unit.</th>
                    <th>Subtotal</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
    `;

    addSacola.forEach((item, index) => {
        const produtoNaSacola = item.produto;
        const produtoOriginal = bancoDeDadosPadaria.find(p => p.id === produtoNaSacola.id);
        const precoUnitario = produtoOriginal ? produtoOriginal.preco : 0;
        let subtotal = 0;
        let displayValor = '';

        if (produtoNaSacola.venda === 'KG') {
            subtotal = precoUnitario * produtoNaSacola.peso;
            displayValor = `${produtoNaSacola.peso} KG`;
        } else {
            subtotal = precoUnitario * produtoNaSacola.quantidade;
            displayValor = `${produtoNaSacola.quantidade} Un.`;
        }
        totalGeral += subtotal;

        html += `
            <tr>
                <td>${produtoNaSacola.nome}</td>
                <td>${displayValor}</td>
                <td>R$ ${precoUnitario.toFixed(2).replace('.', ',')}</td>
                <td>R$ ${subtotal.toFixed(2).replace('.', ',')}</td>
                <td>
                   <button class="btn btn-danger btn-sm botao_remover" data-produto-id="${produtoNaSacola.id}">Remover</button>
                </td>
            </tr>
        `;
    });

    html += `
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3" class="text-right"><strong>Total Geral:</strong></td>
                    <td><strong>R$ ${totalGeral.toFixed(2).replace('.', ',')}</strong></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
        <div class="text-right mt-3">
             <button class="btn btn-success btn-lg " id="botao_finalizar" >Finalizar Pedido</button>
        </div>
    `;

    container.innerHTML = html;
};




function remover() {
    let btn = document.querySelectorAll('.botao_remover') //lista de botoes com essa classe
    if (btn) {
        btn.forEach(btn => {//percorrendo lista de botoes

            // 3. Adiciona o evento de clique a CADA botão
            btn.addEventListener('click', (event) => {
                // usando o 'data-produto-id' para recuperar o id de cada produto
                const idDoProduto = event.currentTarget.dataset.produtoId;

                removerItemSacola(idDoProduto)
            });


        });
    }

}

function finalizar() {
    let btn = document.querySelector('#botao_finalizar') //lista de botoes com essa classe

    if (btn) {
        // 3. Adiciona o evento de clique a CADA botão
        btn.addEventListener('click', () => {
            let keys = []

            for (let i = 0; i < localStorage.length; i++) {
                // 1. Pega o nome da chave na posição 'i'
                const key = localStorage.key(i);

                if (key.startsWith(prefixoDesejado)) {
                    keys.push(key)
                }
            }

            keys.forEach(chave => {
                finalizarPedido(chave)
            })
        });
    }
}





function removerItemSacola(id) {

    let produto = `sacola_${id}`
    console.log(produto);
    for (let i = 0; i < localStorage.length; i++) {
        // 1. Pega o nome da chave na posição 'i'
        const key = localStorage.key(i);



        if (key === produto) {
            localStorage.removeItem(produto)

            alert('Produto removido da sacola.');
            location.reload();
        }
    }


};

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


const finalizarPedido = (chave) => {


    // Limpa a sacola após a "finalização"
    localStorage.removeItem(chave);
    alert('🎉 Pedido finalizado com sucesso! Entraremos em contato para confirmar a encomenda.');
    location.reload();
    //CriandoSacola(); // Atualiza a tela para mostrar a sacola vazia
};

CriandoSacola()

finalizar()
document.addEventListener('DOMContentLoaded', (event) => {
    
    remover()
    notificarsacola('sacola_')
});