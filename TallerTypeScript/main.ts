import {Serie} from './Serie.js';
import {series} from "./data.js";
let seriesR: Serie[]=series;
let numSeries:number=0;
let numSeasons:number=0;

let tablaSeries:HTMLElement=document.getElementById("tabla_series")!;
let promedio:HTMLElement=document.getElementById("promedio")!;

mostrarSeries();
mostrarPromedio();

function mostrarSeries():void{
    for(let serie of series){
        numSeries++;
        numSeasons+=serie.temporadas;
        let filaSerie = document.createElement("tr");
        filaSerie.innerHTML=`<td>${serie.id}</td>
                            <td>${serie.nombre}</td>
                            <td>${serie.canal}</td>
                            <td>${serie.temporadas}</td>`;
        tablaSeries.appendChild(filaSerie);
    }
}
function mostrarPromedio():void{
    let prom:number=numSeasons/numSeries;
    promedio.innerHTML=`Seasons Average: ${prom}`
}
