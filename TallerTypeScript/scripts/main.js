import { series } from "./data.js";
var seriesR = series;
var numSeries = 0;
var numSeasons = 0;
var tablaSeries = document.getElementById("tabla_series");
var promedio = document.getElementById("promedio");
mostrarSeries();
mostrarPromedio();
function mostrarSeries() {
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        numSeries++;
        numSeasons += serie.temporadas;
        var filaSerie = document.createElement("tr");
        filaSerie.innerHTML = "<td>".concat(serie.id, "</td>\n                            <td>").concat(serie.nombre, "</td>\n                            <td>").concat(serie.canal, "</td>\n                            <td>").concat(serie.temporadas, "</td>");
        tablaSeries.appendChild(filaSerie);
    }
}
function mostrarPromedio() {
    var prom = numSeasons / numSeries;
    promedio.innerHTML = "Seasons Average: ".concat(prom);
}
