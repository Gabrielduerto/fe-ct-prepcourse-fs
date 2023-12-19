/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
     let primerElemento = array[0];
     return primerElemento;
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   let ultimoElemento = (array.length - 1);
   return array[ultimoElemento]; 
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   let longitud = array.length;
   return longitud;
} 

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   let masUno = array.map((num) => ( num + 1));
   return masUno;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
   
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   let frAse = palabras.join(' ');
   return frAse;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
   

}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   //contador
   let suma = 0;
   //recorrido
   arrayOfNums.forEach( (elemento) => {
      //sumatoria con el contador
      suma += elemento;
   })
   //retorno
   return suma;
      
  }


function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   cantElementos=resultadosTest.length
   let promedio=0
   resultadosTest.forEach(elemento => { 
    promedio+=elemento;
   })
   return promedio/cantElementos;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let mayor=0
   arrayOfNums.forEach(elementos =>{
      if(elementos> mayor)
      mayor=elementos
   })
   return mayor;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

   }

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let cant=0
   array.forEach(n=>{
      if(n>18)
      cant+=1
   })
   return cant;
}


function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch (numeroDeDia) {
      case 1:
         return "Es fin de semana"
         break;  
      case 2:
         return 'Es dia laboral'
         break;
      case 3:
         return 'Es dia laboral'
         break;  
      case 4:
         return 'Es dia laboral'
         break;
      case 5:
         return 'Es dia laboral'
         break;  
      case 6:
         return 'Es dia laboral'
         break;
      case 7:
         return 'Es fin de semana'
         break;       
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let numero=num;
   if(numero===9||numero>=90 && numero<100||numero>=900 && numero<1000){return true}
    else return false

   
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   return array.every((n) => (n===array[0]))
   }

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   
   
   let nuevoArreglo = [];
   array.forEach((meses)=>{
      if(meses==="Enero" || meses=== "Marzo"|| meses==="Noviembre"){
         nuevoArreglo.push(meses)}
         else if(meses!="Enero" || meses!="Marzo" || meses!="Noviembre"){
            return "No se encontraron los meses pedidos";
         }

   })
   return nuevoArreglo;
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let arreglo=[];
   const n=6   
   for(var i=0 ; i<11; i++){
      console.log(n+" x"+i+" ="+(n*i));
      arreglo.push(n*i);
   }  
   return arreglo;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let arrayMayorACien=[];
   array.forEach((n) => {
      if(n>100){arrayMayorACien.push(n)
      }
   })
   return arrayMayorACien;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let aumento= num;
   let newArreglo=[];
   for(i=0 ; i<10 ; i++){
      if(aumento===i){return "Se interrumpió la ejecución";
         break;}
      aumento+=2;
      newArreglo.push(aumento);
       
      
   }
   return newArreglo;
   //SOY EL PUTO AMOOOOO
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let aumento=num;
   let arregloauMen=[];
   for(i=0; i<10; i++){
      if (i===5){
         continue;}
      aumento+=2
      arregloauMen.push(aumento);
      
   }
    return arregloauMen;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
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
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
