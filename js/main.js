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


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}