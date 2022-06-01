// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i =0; i < 7; i++) {
    array[i] = 1+i;
  }
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  console.log(array);
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  console.log(array);
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  function arrayContiene(array, elemento) {
    for (let i = 0; i < array.length; i++){
      if (elemento == array[i]) {
        return true;
      }
    }
    return false;
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var numeros = [];
  var sum = 0;
  for (var i =0; i <= 7; i++) {
    numeros[i] = 1+i;
    sum += numeros[i]
  }
  console.log(sum);
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var resultadosTest = [];
  var sum = 0;
  var prom = 0;
  for (var i =0; i < 7; i++) {
    resultadosTest[i] = 1+i;
    sum += resultadosTest[i]
  }
  prom = sum/resultadosTest.length
  console.log(prom);
}



function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeros = [];
  for (var i =0; i <= 7; i++) {
    numeros[i] = 1+i;
  }
  console.log(Math.max.apply(null, numeros));
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var multiplicados = 1;
  var i = 0;
  if (arguments.length > 0){
     while (arguments[i] > 0) {
      multiplicados *= arguments[i];
      i++; 
  }
  return multiplicados;
  
  }else if(arguments === 0){
    return 0;
  }
  return '';
}
console.log(multiplicarArgumentos(3, 5, 7))
console.log(multiplicarArgumentos())



function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  arreglo = [1,1,2,19,19];
  count = 0;
  for (let i=0;i<=arreglo.length;i++) {
  if (arreglo[i]>18) {
    count +=1;
  }
  }
    return count; 
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia == 1 || numeroDeDia == 7) {
    console.log('Es fin de semana');
  } else {
    console.log('  Es día laboral');
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  const firstDigitStr = String(n)[0];
  const firstDigitNum = Number(firstDigitStr);
  if(firstDigitNum === 9) {
    console.log('true');
  } else {
    console.log('false');
  }
}



function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
   if(!arreglo.length) {
     return null;
   }

   return arreglo.every(e => arreglo[0] == e);
  
  }

  try {
    console.log(sonIguales([arreglo]));
  } catch (e) {
    console.log((`Error: ${e.message}`));
  }

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  
  let arreglo1 = array.find(element => element === 'Enero');
  let arreglo2 = array.find(element => element === 'Marzo');
  let arreglo3 = array.find(element => element === 'Noviembre');
  if(arreglo1 === 'Enero' && arreglo2 === 'Marzo' && arreglo3 === 'Noviembre') {
  let narray = [arreglo1,arreglo2,arreglo3];
  console.log(narray);
  } else {
    return('No se encontraron los meses pedidos');
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let narray = array.filter(element => element > 100);
  return narray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  for (var i =0;i<10;i++) {
    numero +=2;
    array.push(numero);
  }
  return array;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  for (var i =0;i<10;i++) {
    if(i === 5) {array.push(numero); continue;}
    numero +=2;
    array.push(numero);
  }
  return array;
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
