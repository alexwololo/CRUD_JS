fetch(
  "https://space-engineers.com/api/?object=servers&element=detail&key=nrYXkv5jZLjwhTDXPwAh2vXl3QrrCATxyD"
)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    let ctx = document.getElementById("myChart").getContext("2d");
    let labels = ["Players", "Max Players"];
    let colorHex = ["sandybrown", "plum"];

    let myChart = new Chart(ctx, {
      type: "pie",
      data: {
        datasets: [
          {
            data: [result.players, result.maxplayers],
            backgroundColor: colorHex,
          },
        ],
        labels: labels,
      },
      options: {
        responsive: true,
      },
    });
  });
