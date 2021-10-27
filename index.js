// FETCH

function fetchData() {
  fetch("https://reqres.in/api/users")
    .then((response) => {
      //to find & see status of "ok"
      console.log(response);
      if (!response.ok) {
        throw Error("ERROR!");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      //loop over objects in array & construct a HTML string from it
      const html = data.data
        .map((user) => {
          // return '<p>Name</p>' + user.first_name
          return `
      <div class='user'>
      <p><img src="${user.avatar}" alt="${user.first_name}"></p>
      <p>Name: ${user.first_name}</p>
      <p>Email: ${user.email}</p>
      </div>`;
          //join returns a new string by concatenating all of the elements in an array
        })
        .join("");
      //logs in array format
      console.log(html);
      document
        .querySelector("#fetch")
        //.innerHTML = (html)
        .insertAdjacentHTML(
          "beforeend",
          //'<h1>yolooo</h1>',
          html
        );
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchData();



// fetch('https://avancera.app/cities/')
//   .then(response => response.json())
//   .then(result => {
//     console.log(result)
//   })

//   fetch('https://reqres.in/api/users/')
//   .then(response => {
//     //to find & see status of "ok"
//     console.log(response);
//     if(!response.ok) {
//       throw Error('ERROR!');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//     document.querySelector('#app')
//   .innerHTML = '<h1>TEST</h1>' + userfirst_name
//   })
//   .catch(error => {
//     console.log(error);
//   })
// }

// fetchData();
