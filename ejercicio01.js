//Ejercicio 1 PALÍNDROMO
var a = prompt('Ingrese una palabra para saber si es palíndroma');
var b = a.replace(/\s/g,""); //Para quitar espacios de una cadena
var c = b.toLowerCase();
var letrasReves = c.split("").reverse();
var iguales = true;
for(i in c) {
  if(c[i] == letrasReves[i]) {
  }
  else {
    // Alguna letra es distinta, por lo que ya no es un palindromo
    iguales = false;
  }
}

if(iguales) {
  console.log("Es un palíndromo");
}
else {
    console.log("No es un palíndromo");
}