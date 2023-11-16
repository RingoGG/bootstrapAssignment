// Chart Data
var chartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Earnings",
      data: [
        0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000,
        40000,
      ],
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
    },
  ],
};

// Chart Options
var chartOptions = {
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          callback: function (value, index, values) {
            return "$" + value;
          },
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2],
        },
      },
    ],
  },
  legend: {
    display: false,
  },
  tooltips: {
    callbacks: {
      label: function (tooltipItem, chart) {
        return "$" + tooltipItem.yLabel;
      },
    },
  },
};

// Get the context of the canvas element
var ctx = document.getElementById("myAreaChart").getContext("2d");

// Create the line chart
var myLineChart = new Chart(ctx, {
  type: "line",
  data: chartData,
  options: chartOptions,
});
