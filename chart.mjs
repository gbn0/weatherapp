let indexI = [0, 24, 48, 72, 96, 120, 144];
let indexF = [24, 48, 72, 96, 120, 144, 168];

export function loadChart(hourly, dia) {
  myChart.data.labels = [];
  myChart.data.datasets[0].data = [];
  hourly.slice(indexI[dia], indexF[dia]).forEach((hour) => {
    let date = new Date(hour.timeStamp);
    let fDate = date.toLocaleTimeString().slice(0, 2);
    let temp = hour.temp;
    myChart.data.labels.push(fDate.toString() + "h");
    myChart.data.datasets[0].data.push(temp);
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
        label: "Temperatura",
        data: [],
        backgroundColor: ["rgba(255, 255, 255, 1)"],
        borderColor: ["rgba(255,255,255,1)"],
        borderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#2d9ee0',
      },
    ],
  },
  options: {
    plugins: {
      tooltip: {
        displayColors: false,
      },
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
        min: 0,
        max: 35,
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
