/*********** Variables y Operadores 
 * Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 
   3er variable. */
    var age1, age2, sumAges;
    age1 = 25;
    age2 = 30; 
    sumAges = age1 + age2;

// Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
    var name, lastName, completeName;
    name = 'Mariana';
    lastName = 'Diaz';
    completeName = name + lastName;

/*Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando 
  el resultado la suma una 3er variable (utilizar length).*/
    var country, city, residencePlace;
    country = 'Argentina';
    city = 'Rosario';
    residencePlace = country.length + city.length;

/************ Strings
 * Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar 
   toUpperCase).*/
    var mariana = 'unemployed';
    mariana = mariana.toUpperCase();

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres
  guardando el resultado en una nueva variable (utilizar substring).*/
    var job = 'webDeveloper';
    var job2 = job.substring(0, 5);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres
  guardando el resultado en una nueva variable (utilizar substring).*/
    var job3 = 'softwareDeveloper'
    var job4 = job3.substring(14, 17);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en 
  mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
  toLowerCase y el operador +).*/
    var hobby = 'musicProducer';
    var last = hobby.substring(1, hobby.length);
    var first = hobby.substring(0, 1);
    var hobby2 = first.toUpperCase() + last;

/*Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
  primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
    var music = 'rhythm and blues';
    var space = music.indexOf(' ');

/*Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
  Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
  palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
  operador +).*/
    var countries = 'dominican republic';
    var letter1 = countries.substring(0, 1);
    var remain1 = countries.substring(1, 9);
    var letter2 = countries.substring(10, 11);
    var remain2 = countries.substring(11);
    var capCountries = letter1.toUpperCase() + remain1 + ' ' + letter2.toUpperCase() + remain2;

/************ Arrays
* Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
  "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)*/
    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 
    'Octubre', 'Noviembre', 'Diciembre'];
    console.log(months[4]);
    console.log(months[10]);

//Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
    months.sort();

//Agregar un elemento al principio y al final del array (utilizar unshift y push).
    months.push('End');
    months.unshift('Start');

//Quitar un elemento del principio y del final del array (utilizar shift y pop).
    months.shift();
    months.pop();

//Invertir el orden del array (utilizar reverse).
    months.reverse();

//Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
    months.join('-');

//Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
    months.slice(4, 10);

/************* If Else 
 * Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 
  mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”*/
    Math.random()
    if (Math.random() >= 0.5){
      alert('Greater than 0,5');
    }else {
      alert('Lower than 0,5');
    }

/*Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
  “Bebe” si la edad es menor a 2 años
  “Nino” si la edad es entre 2 y 12 años
  “Adolecente” si la edad es entre 13 y 19 años
  “Joven” si la edad está entre 20 y 30 años
  “Adulto” entre 31 y 60 años
  “Adulto mayor” entre 61 y 75 años
  “Anciano” si es mayor a 75 años*/
    var Age = 55
    if(Age < 2){
      alert('Bebé');
    }else if(Age <= 12){
      alert('Nino');
    }else if(Age <= 19){
      alert('Adolecente');
    }else if(Age <= 30){
      alert('Joven');
    }else if(Age <= 60){
      alert('Adulto');
    }else if(Age <= 75){
      alert('Adulto mayor');
    }else {
      alert('Anciano');
    }

/****************** For
 * Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una 
  alerta utilizando cada una de las palabras.*/
    var sports = ['football', 'rugby', 'tennis', 'handball', 'basketball'];
    for(var i = 0; i < sports.length; i++){
      alert(sports[i]);
    }

/*Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra 
  modificada.*/
    var capLett;
    var restWord;
    for(var i = 0; i < sports.length; i++){
      capLett = sports[i].substring(0, 1);
      restWord = sports[i].substring(1, sports[i].length);
        alert(capLett.toUpperCase() + restWord);
    } 

/*Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle 
  for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena 
  completa.*/
    var sentence = '';
    for(var i = 0; i < sports.length; i++){
      sentence = sentence + sports[i];
    }
    alert(sentence);
  
/*Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir
 que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al 
 numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).*/
    var numbers = [];
    for(var i = 0; i <= 9; i++){
      numbers[i] = i;
    }
    console.log(numbers);

/************** Funciones
  Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el 
  resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/
/*A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
  mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/
/*A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya 
 decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/
  function suma(param1, param2){
    // if(isNaN(param1)){
    //   alert(param1 + ' is not a number.');
    //   return NaN;
    // }
    // if(isNaN(param2)){
    //   alert(param2 + ' is not a number.');
    //   return NaN;
    // }
    if(validateNum(param1)){
      alert(param1 + ' is not a number.');
      return NaN;
    }
    if(validateNum(param2)){
      alert(param2 + ' is not a number.');
      return NaN;
    }
    if(!validateInteger(param1)){
      alert(param1 + ' is not integer');
      return round(param1);
    }
    if(!validateInteger(param2)){
      alert(param2 + ' is not integer');
      return round(param2);
    }
    var myVar = param1 + param2;
    console.log(myVar); 
    return myVar;
  }
    suma(10, 'hello');

//Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
  function validateInteger(param3){
    var retVal = parseInt(param3, 10); 
    if(retVal === param3){
      return true;
    }
    validateInteger(20);
  }

/*Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando 
igual.*/
  function validateNum(param4){
      return isNaN(param4)
    }
  validateNaN(20);
  
