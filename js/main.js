google.charts.load("current", { packages: ["bar"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Empleado", "Sin AKASHI", "Con AKASHI"],
    ["Lucha", 30, 49],
    ["Rodrigo", 130, 173],
    ["Leonela", 140, 166],
    ["Anahí", 30, 194],
    ["Alex", 218, 365],
    ["Jackelina", 140, 451],
    ["Celeste", 150, 457],
    ["Sofía", 220, 694],
  ]);

  var options = {
    
    chart: {
      title: "AKASHI en Acción",
      subtitle: "Cantidad de items generados en 4hs",
    },
  };

  var chart = new google.charts.Bar(document.getElementById("chart_div"));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}
