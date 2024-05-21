/*
Ajax
Axios
HttpRequest
JQuery.Ajax
Fetch
*/

function consultarCep() {
  let cep = window.prompt("Informe um cep válido:");
  console.log("O cep informado é:", cep);

  let urlCep = `https://viacep.com.br/ws/${cep}/json/`;
  consultaApi(urlCep)
}

function consultarCnpj() {
  let cnpj = window.prompt("Informe um cnpj válido:");
  console.log("O cnpj informado é:", cnpj);

  let urlCnpj = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`;
  consultaApi(urlCnpj)
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
