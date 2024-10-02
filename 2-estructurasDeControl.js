// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.

function verificarParidad(numero) {
     numero = 8

    if (numero % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}
verificarParidad()


// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
// ejercicio2.js

// Función que clasifica una edad fija
function clasificarEdad() {
 let edad = 18; // 

    if (edad < 18) { 
        console.log("Menor de edad"); 

    } else if (edad <= 65) {
        console.log("Adulto");

    } else {
        console.log("Adulto mayor");
    }
}

clasificarEdad(); // Salida


// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva(numero) {
 
while (numero > 0) {
  console.log(numero)
  numero = numero - 1
   }
}
cuentaRegresiva(12);

// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
 function repetirMensaje() {
    let i = 0;
    do {
      console.log("Estoy aprendiendo JavaScript"); // se muestra el mensaje en consola 
      i++;
    } while (i < 5);
  }
  
  repetirMensaje();
    
// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
    for (let i = 0; i <= numero; i += 2) {
      console.log(i);
    }
  }
  imprimirPares(6);
    
  
// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
          if (i === 6) {
            break; // Detiene el bucle cuando i es igual a 6
        }
    }
}

detenerEnSeis();


// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            continue; 
        }
        console.log(i); // Muestra el número si no es 5
    }
}

saltarCinco();

// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.

function obtenerDiaSemana(dia) {
    switch (dia) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sábado");
            break;
        case 7:
            console.log("Domingo");
            break;
        default:
            console.log("Número no válido");
    }
}

obtenerDiaSemana(1); // Imprimir domingo


// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
    switch (letra) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log("Es una vocal");
            break;
        default:
            console.log("No es una vocal");
    }
}
esVocal("J"); 

// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(a, b, c) {
     
    if (a > 0 && b > 0 && c > 0) {
      console.log("Todos los números son positivos");

    } else if (a < 0 && b < 0 && c < 0) {
      console.log("Todos los números son negativos");

    } else 
      console.log("Al menos un número es negativo");
    
  }
  evaluarNumeros(2, 1, -5);

// Exportar todas las funciones
 export {
verificarParidad,
clasificarEdad,
cuentaRegresiva,
repetirMensaje,
imprimirPares,
detenerEnSeis,
saltarCinco,
obtenerDiaSemana,
esVocal,
evaluarNumeros,
};