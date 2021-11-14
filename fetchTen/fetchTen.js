//FETCH GAME
fetch(
  "https://space-engineers.com/api/?object=servers&element=detail&key=nrYXkv5jZLjwhTDXPwAh2vXl3QrrCATxyD"
)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    htmlData(result);
  });

const htmlData = (result) => {
  const host = `
  <p>Server name: ${result.hostname}</p>
  `;
  document.querySelector("#one").insertAdjacentHTML("afterbegin", host);

  const serverStatus = `
  <p>Server: ${result.is_online}</p>
  `;
  document.querySelector("#two").insertAdjacentHTML("afterbegin", serverStatus);

  const uptime = `
  <p>Server uptime: ${result.uptime}</p>
  `;
  document.querySelector("#three").insertAdjacentHTML("afterbegin", uptime);

  const maxPlayers = `
  <p>Players online: ${result.players} / ${result.maxplayers}</p>
  `;
  document.querySelector("#four").insertAdjacentHTML("afterbegin", maxPlayers);

  const playersOnline = `
  <p>Player limit: ${result.maxplayers}</p>
  `;
  document
    .querySelector("#five")
    .insertAdjacentHTML("afterbegin", playersOnline);

  const rank = `
  <p>Server rank: ${result.rank}</p>
  `;
  document.querySelector("#six").insertAdjacentHTML("afterbegin", rank);

  const score = `
  <p>Server score: ${result.score}</p>
  `;
  document.querySelector("#seven").insertAdjacentHTML("afterbegin", score);

  const votes = `
  <p>Amounts of votes: ${result.votes}</p>
  `;
  document.querySelector("#eight").insertAdjacentHTML("afterbegin", votes);

  const location = `
  <p>Server location: ${result.location}</p>
  `;
  document.querySelector("#nine").insertAdjacentHTML("afterbegin", location);

  const lastCheck = `
  <p>Latest server check: ${result.last_online}</p>
  `;
  document.querySelector("#ten").insertAdjacentHTML("afterbegin", lastCheck);
};

// //FETCH JSON
// fetch("main.json")
//   .then((response) => response.json())
//   .then((result) => {
//     console.log(result);
//     htmlData2(result);
//   });

// const htmlData2 = (result) => {
//   result.forEach((data) => {
//     const html = `
//     <p>name:${data.id}</p>
//     <p>name:${data.firstName} ${data.lastName}</p>
//     `;
//     console.log(html);
//     document.querySelector("#localJson").insertAdjacentHTML("afterbegin", html);
//   });
// };
