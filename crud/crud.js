// References for the DOM
const url = "https://avancera.app/cities/";
const getData = document.getElementById("get");

// Form are the request that will link to api
const postForm = document.getElementById("post_form");
const putForm = document.getElementById("put_form");
const patchForm = document.getElementById("patch_form");
const deleteForm = document.getElementById("delete_form");

const getResults = document.querySelector(".get_results");
const postResults = document.querySelector(".post_results");
const putResults = document.querySelector(".put_results");
const patchResults = document.querySelector(".patch_results");
const deleteResults = document.querySelector(".delete_results");

// This is what will be created in html to display the information we fetch
function makeDocumentHTML(id, name, pop) {
  let docHTML = `
        <article class="doc">
          <h4><span>ID:</span>${id}</h4>
          <h3><span>Name: </span>${name}</h3>
          <h3><span>Population:</span>${pop}</h3>
        </article>
  `;
  return docHTML;
}

// GET
getData.addEventListener("click", (e) => {
  getResults.innerHTML = "";

  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      result.forEach((element) => {
        let html = makeDocumentHTML(
          element.id,
          element.name,
          element.population
        );
        getResults.insertAdjacentHTML("beforeend", html);
      });
    });
});

// POST
postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  postResults.innerHTML = "";
  let name = e.target["name"].value;
  let population = e.target["population"].value * 1;

  fetch(url, {
    method: "POST",
    body: JSON.stringify({ name, population }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((result) => {
      let html = makeDocumentHTML(
        result[result.length - 1].id,
        result[result.length - 1].name,
        result[result.length - 1].population
      );
      postResults.insertAdjacentHTML("beforeend", html);
    });
});

// PUT
// 5347da70-fef3-4e8f-ba49-e8010edba878
putForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let id = e.target["docId"].value.trim();
  let name = e.target["name"].value.trim();
  // *1 konverts to number
  let population = e.target["population"].value.trim() * 1;

  if (!id || !name || !population) {
    alert("Every Field Needed!");
    return;
  }

  // PATCH
  fetch(`${url}${id}`, {
    method: "PUT",
    body: JSON.stringify({ id, name, population }),
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    if (response.status === 200) {
      fetch(url)
        .then((newResponse) => newResponse.json())
        .then((result) => {
          result.forEach((element) => {
            let html = makeDocumentHTML(
              element.id,
              element.name,
              element.population
            );
            putResults.insertAdjacentHTML("beforeend", html);
          });
        });
    } else alert("Document not found!");
  });
});

patchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let id = e.target["docId"].value;
  let name = e.target["name"].value.trim();
  let population = e.target["population"].value.trim() * 1;

  let data = {};
  if (id) {
    data.id = id;
  } else {
    alert("Id is must");
    return;
  }
  if (name) {
    data.name = name;
  }
  if (population) {
    data.population = population;
  }

  fetch(`${url}${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((result) => {
      let html = makeDocumentHTML(result.id, result.name, result.population);
      patchResults.insertAdjacentHTML("beforeend", html);
    });
});

// DELETE
deleteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let id = e.target["docId"].value.trim();

  if (!id) {
    alert("ID must be provided!");
    return;
  }
  fetch(`${url}${id}`, {
    method: "DELETE",
  }).then((response) => {
    if (response.status === 200) {
      fetch(url)
        .then((newResponse) => newResponse.json())
        .then((result) => {
          result.forEach((element) => {
            let html = makeDocumentHTML(
              element.id,
              element.name,
              element.population
            );
            deleteResults.insertAdjacentHTML("beforeend", html);
          });
        });
    } else alert("Document not found!");
  });
});
