let qntdCarrinho = 0;

let itensCarrinho = [];

document.querySelectorAll(".addcart").forEach(function (button) {
  button.addEventListener("click", function () {
    let nomeProduto = button.dataset.nome;
    let precoProduto = button.dataset.preco;
    let idProduto = button.dataset.id;
    let imagemProduto = button.dataset.img;
    let produtoSelecionado = {
      id: idProduto,
      nome: nomeProduto,
      preco: parseFloat(precoProduto),
      imagem: imagemProduto,
    };

    itensCarrinho.push(produtoSelecionado);

    qntdCarrinho++;

    document.getElementById("carrinho").innerText = qntdCarrinho;
    renderizarCarrinho();
  });
});

function renderizarCarrinho() {
  const lista = document.getElementById("carrinho-lista");
  lista.innerHTML = "";
  let total = 0;
  itensCarrinho.forEach((item, index) => {
    total += item.preco;

    let precoFormatado = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(item.preco);

    const li = document.createElement("li");
    li.className = "objetolista";
    li.innerHTML = `
                    <a class="subtext" href="#">
                         <div class="subalign">
                              <img src="${item.imagem}" alt="${item.nome}">
                              <div class="item-info">
                                   <span class="nome-produto">${item.nome}</span>
                                   <span class="valor">${precoFormatado}</span>
                                   <p>Itens na posição: ${index}</p>
                              </div>
                         </div>
                    </a>
          `;

    lista.appendChild(li);
  });

  let valorFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);

  document.getElementById("carrinho-total").innerText = valorFormatado;
}
