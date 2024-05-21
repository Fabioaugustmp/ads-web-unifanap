  let cep = window.prompt();

  url = `https://viacep.com.br/ws/${cep}/json/`;
  const contentElement = document.getElementById("conteudo");

  call(cep);

  function call(cep) {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao fazer a solicitação à API");
        }
        return response.json(); // Converte a resposta para JSON
      })
      .then(data => {
        // Manipule os dados da API aqui
        console.log(data);
        // var content = contentElement.textContent = JSON.stringify(data);
        // // contentElement.innerHTML = `<p>${data.cep}</p>`

        // const itens = data.reduce((html, data) => html + `<li>${data.localidade}</li>`, "");
        // document.body.insertAdjacentHTML("beforeend", `<ul>${itens}</ul>`);
        const table = document.createElement("table");
        // Create table header
        const headerRow = table.insertRow();
        for (const key in data) {
          const headerCell = document.createElement("th");
          headerCell.textContent = key;
          headerRow.appendChild(headerCell);
        }
        // Create table rows
        const row = table.insertRow();
        for (const key in data) {
          const cell = row.insertCell();
          cell.textContent = data[key];
        }
        contentElement.appendChild(table);
      })
      .catch((error) => {
        console.error("Erro:", error);
        contentElement.textContent = "Erro ao carregar os dados da API";
      });
  }
