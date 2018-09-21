//Ejercicio 2 Ordenamiento
var ingresar = prompt('Ingrese una cadena para ordenarla');
var arreglado = ingresar.split("");
var t = arreglado.length;
function order(cadena,n) {
    var x,i,j,inc,s;
    for(s=1; s < t; s++)
	{
		inc = b[s];
		for(i=inc+1; i < n; i++) 
		{
			x = cadena[i];
			j = i-inc;
			while( j > 0 && cadena[j] > x)
			{
				cadena[j+h] = cadena[j];
				j = j-h;
			}
			cadena[j+h] = x;
		}
	}
}
var resultado = order(arreglado,t);
console.log(resultado);