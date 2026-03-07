let qntdCarrinho = 0;

document.querySelectorAll(".addcart").forEach(function (button) {
     button.addEventListener("click", function () {
          let nomeProduto =
               button.dataset.nome;
          let precoProduto =
               button.dataset.preco;

          qntdCarrinho++;

          document.getElementById('carrinho').innerText = qntdCarrinho;
     });
});
