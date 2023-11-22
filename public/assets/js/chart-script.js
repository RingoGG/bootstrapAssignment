
function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Area Chart Example
var ctx = document.getElementById("myAreaChart").getContext("2d");

// Create a linear gradient
var gradient = ctx.createLinearGradient(0, 0, 400, 0); // Adjust the last two values to match your canvas size

gradient.addColorStop(0, 'rgba(78, 115, 223, 0.2)'); // Dark color on the left
gradient.addColorStop(1, 'rgba(78, 115, 223, 0)');   // Transparent color on the right

var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
      "0", "1", "2", "3", "4", "5", "6", "7","8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22",
    ],
    datasets: [{
      label: "Today",
      lineTension: 0.4,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(55, 81, 255, 1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(55, 81, 255, 1)",
      pointBorderColor: "rgba(55, 81, 255, 1)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(255, 255, 255, 1)",
      pointHoverBorderColor: "rgba(55, 81, 255, 1)",
      pointHoverBorderWidth: 4,
      pointHitRadius: 10,
      pointBorderWidth: 2,
      fill: {
        target: 'origin',
        above: gradient, // Use the created gradient
      },
      data: [15, 22, 36, 39.5, 39, 38, 37, 43, 51, 41, 18.5, 17, 25, 36, 12, 38, 54, 48, 42, 38],
    },{
      label: "Yesterday",
      lineTension: 0.4,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(223, 224, 235, 1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(223, 224, 235, 1)",
      pointBorderColor: "rgba(223, 224, 235, 1)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(255, 255, 255, 1)",
      pointHoverBorderColor: "rgba(223, 224, 235, 1)",
      pointHoverBorderWidth: 4,
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [34, 35, 32.5, 28, 23, 23, 27, 32, 34, 34.5, 31.5, 36, 19, 17, 22, 37, 29, 31.5, 35],
    }],
  },
  options: {
    maintainAspectRatio: true,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          callback: function(value, index, values) {
            return '$' + number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: true,
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});

