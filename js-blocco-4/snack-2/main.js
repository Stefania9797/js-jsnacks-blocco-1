//Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
//Calcolare perimetro e area.
var triangolo={
    base:10,//cateto
    altezza:15//cateto
}
//area
triangolo.area=(triangolo.base*triangolo.altezza)/2;
//ipotenusa
triangolo.ipotenusa=Math.sqrt(Math.pow(triangolo.base, 2) + (Math.pow(triangolo.altezza,2)))
//perimetro
triangolo.perimetro=triangolo.base+triangolo.altezza+triangolo.ipotenusa

console.log(triangolo);


