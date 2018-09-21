var insertar = prompt("Inserte un número: ");
function fibonacci(num){
    var a = 1, b = 0, temp;
    if(num == 1){
        return 0;
    }
    if(num == 2){
        return 1;
    }
    while (num > 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  }
  var resultado = fibonacci(insertar);
  console.log(resultado);