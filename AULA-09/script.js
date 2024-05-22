/*
Ajax
Axios
HttpRequest
JQuery.Ajax
Fetch
*/

document.getElementById("cepForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let cep = document.getElementById("cepValue").value;
  console.log("O cep informado é: ", cep);

  let url = `https://viacep.com.br/ws/${cep}/json/`;
  console.log("A url de consulta é: ", url);

  //Realiza consultas http
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const table = document.getElementById("listagem-cep");
      const tbody = table.querySelector("tbody");

      tbody.innerHTML = "";

      console.log(data.logradouro);
      
      Object.entries(data).forEach(([key, value]) => {
        //Criamos as linhas da tabela
        const row = document.createElement("tr");
        const fieldCell = document.createElement("td");
        const valueCell = document.createElement("td");

        if (key != "ibge" && key != "gia") {
          //Populamos com o valor recebido no json
          fieldCell.textContent = key;
          valueCell.textContent = value;
          row.appendChild(fieldCell);
          row.appendChild(valueCell);
        }

      
        tbody.appendChild(row);
      });
    });
});

function consultarCep() {
  let cep = window.prompt("Informe um cep válido:");
  console.log("O cep informado é:", cep);

  let urlCep = `https://viacep.com.br/ws/${cep}/json/`;
  consultaApi(urlCep);
}

function consultarCnpj() {
  let cnpj = window.prompt("Informe um cnpj válido:");
  console.log("O cnpj informado é:", cnpj);

  let urlCnpj = `https://brasilapi.com.br/api/cnpj/v1d/${cnpj}`;
  consultaApi(urlCnpj);
}

function consultaApi(url) {
  console.log("A url fornecida é:", url);
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao fazer a solicitação de consulta de cep");
      }
      return response.json();
    })
    .then((data) => {
      console.table(data);
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}
