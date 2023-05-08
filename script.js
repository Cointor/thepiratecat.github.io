const database = [
  { title: "Perros", keywords: "perros, canes, cachorros", description: "Todo sobre perros" },
  { title: "Gatos", keywords: "gatos, felinos, michis", description: "Todo sobre gatos" },
  { title: "Pájaros", keywords: "pájaros, aves, loros", description: "Todo sobre pájaros" },
  { title: "Peces", keywords: "peces, acuario, truchas", description: "Todo sobre peces" },
  { title: "Perros", keywords: "perros, canes, cachorros", description: "Todo sobre perros" },
];

const searchForm = document.querySelector("form");
const searchInput = document.querySelector("#search-input");
const searchResults = document.querySelector("#search-results");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = searchInput.value.toLowerCase();
  let results = [];

  database.forEach((item) => {
    const keywordsArray = item.keywords.split(", ");
    keywordsArray.forEach((keyword) => {
      if (keyword.includes(query)) {
        results.push(item);
      }
    });
  });

  displayResults(results);
});

function displayResults(results) {
  searchResults.innerHTML = "";

  if (results.length === 0) {
    searchResults.innerHTML = "No se encontraron resultados para tu búsqueda.";
  } else {
    results.forEach((result) => {
      const resultDiv = document.createElement("div");
      resultDiv.classList.add("result");

      const resultTitle = document.createElement("h2");
      resultTitle.classList.add("result-title");
      resultTitle.textContent = result.title;

      const resultLink = document.createElement("a");
      resultLink.classList.add("result-link");
      resultLink.href = "#";
      resultLink.textContent = "Leer más";

      const resultDescription = document.createElement("p");
      resultDescription.classList.add("result-description");
      resultDescription.textContent = result.description;

      resultDiv.appendChild(resultTitle);
      resultDiv.appendChild(resultLink);
      resultDiv.appendChild(resultDescription);

      searchResults.appendChild(resultDiv);
    });
  }
}
