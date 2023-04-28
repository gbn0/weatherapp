let indexI = [0, 25, 49, 73, 97, 121, 145];
let indexF = [24, 48, 72, 96, 120, 144, 168];

export function loadChart(hourly, dia) {
  hourly.slice(indexI[dia], indexF[dia]).forEach((hour) => {
    let date = new Date(hour.timeStamp);
    let fDate = date.toLocaleTimeString().slice(0, 2);
    let temp = hour.temp;
    myChart.data.labels.push(fDate.toString() + "h");
    myChart.data.datasets.forEach((dataset) => {
      dataset.data.push(temp);
    });
  });
  myChart.update();
}

var ctx = document.getElementById("myChart");

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: ["rgba(255, 255, 255, 1)"],
        borderColor: ["rgba(255,255,255,1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        border: {
          color: "white",
        },
        ticks: {
          color: "white",
        },
        grid: {
          color: "white",
          borderColor: "white",
          display: false,
        },
      },
      y: {
        border: {
          color: "white",
        },
        ticks: { color: "white" },
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
  },
});
