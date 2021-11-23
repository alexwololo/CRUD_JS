const canvas = document.getElementById("players");

const ctx = canvas.getContext("2d");
let players = null;
let maxPlayers = null;

async function setChart() {
  const resp = await fetch(
    "https://space-engineers.com/api/?object=servers&element=detail&key=nrYXkv5jZLjwhTDXPwAh2vXl3QrrCATxyD"
  );
  const data = await resp.json();

  players = data.players;
  maxPlayers = data.maxplayers;

  const myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Players", "Max Players"],
      datasets: [
        {
          label: "# of Votes",
          data: [players, maxPlayers],
          backgroundColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 0.6)"],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
      options: {
        responsive: true,
      },
    },
  });
}

ctx.width = innerWidth;
ctx.hidden = innerHeight;

setChart();

//space-engineers.com/api/?object=servers&element=votes&key={nrYXkv5jZLjwhTDXPwAh2vXl3QrrCATxyD}&format=html

// https: fetch(
//   "https://space-engineers.com/api/?object=servers&element=votes&key={nrYXkv5jZLjwhTDXPwAh2vXl3QrrCATxyD}&format={html}"
// )
//   .then((response) => response.html())
//   .then((result) => {
//     console.log(result);
//   });
