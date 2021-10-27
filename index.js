// FETCH

function fetchData() {
  let promise = fetch("https://avancera.app/cities/");

  promise
    .then((response) => {
      console.log(response);

      let someOtherPromise = response.json();

      return someOtherPromise;
    })
    .then((result) => {
      console.log(result);
      console.log(result[1]);
      console.log(result[1].id);
      console.log(result[1].name);
      console.log(result[1].population);

      document.body.textContent = result
      document.body.textContent = result[1]
      document.body.textContent = result[1].id
      document.body.textContent = result[1].name
      document.body.textContent = result[1].population

      // const arr =
    });
}

fetchData();

// let ele = document.querySelector("h1");
// ele.textContent = "Hello World!";

// document.querySelector("p").innerHTML = "1st";
// document.querySelector("h2").innerHTML = "2nd";

// POST

//PUT

//DELETE

//PATCH
