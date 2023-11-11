function dbjson() {
  fetch("receitas.json")
    .then((response) => response.json())
    .then((receitas) => {
      const container = document.querySelector("#container-receitas");

      receitas.forEach((receita) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const titulo = document.createElement("h3");
        titulo.textContent = receita.Titulo;

        const imagem = document.createElement("img");
        imagem.src = receita.imagem;

        const hr= document.createElement('hr')

        let igUl = document.createElement("ul");

        receita.ingredientes.forEach((igrediente) => {
          let li = document.createElement("li");

          li.append(igrediente);
          igUl.appendChild(li);
        });

        const mododefazer = document.createElement("p");
        mododefazer.textContent = receita.preparo;

        card.appendChild(titulo);
        card.appendChild(imagem);
        card.appendChild(hr)
        card.appendChild(igUl);
        card.appendChild(mododefazer);
        container.appendChild(card);
      });
    });
}
dbjson();
