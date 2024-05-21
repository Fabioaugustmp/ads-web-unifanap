/*
Ajax
Axios
HttpRequest
JQuery.Ajax
Fetch
*/

document.getElementById("cepForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const cep = document.getElementById("cep").value;
  const loader = document.getElementById("loader");

  loader.style.display = "block";

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) => {
      loader.style.display = "none";
      if (data.erro) {
        alert("CEP not found!");
        return;
      }

      const table = document.getElementById("resultTable");
      const tbody = table.querySelector("tbody");
      tbody.innerHTML = ""; // Clear previous results

      Object.entries(data).forEach(([key, value]) => {
        const row = document.createElement("tr");
        const fieldCell = document.createElement("td");
        const valueCell = document.createElement("td");

        fieldCell.textContent = key;
        valueCell.textContent = value;

        row.appendChild(fieldCell);
        row.appendChild(valueCell);
        tbody.appendChild(row);
      });

      table.style.display = "table";
    })
    .catch((error) => {
      alert("An error occurred while fetching the CEP data!");
      console.error("Error fetching CEP data:", error);
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

  let urlCnpj = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`;
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
