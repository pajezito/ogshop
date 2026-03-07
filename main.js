let qntdCarrinho = 0;

let itensCarrinho = [];

document.querySelectorAll(".addcart").forEach(function (button) {
     button.addEventListener("click", function () {
          let nomeProduto =
               button.dataset.nome;
          let precoProduto =
               button.dataset.preco;

          let idProduto =
               button.dataset.id;

          let produtoSelecionado = {
               id: idProduto,
               nome: nomeProduto,
               preco: parseFloat(precoProduto)
          };

          itensCarrinho.push(produtoSelecionado);

          qntdCarrinho++;

          document.getElementById('carrinho').innerText = qntdCarrinho;

          console.log("carrinho atual: ", itensCarrinho);
     });
});
