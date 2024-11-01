/* 
* First exercice:
    Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback: 'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years, he needs to turn 18:

        - Enter your age: 30
        - You are old enough to drive.

        - Enter your age:15
        - You are left with 3 years to drive.
 */

 let userAge = prompt('Enter your age please:') // Pedimos que ingrese la edad para evaluar si debe conducir.

    // Aqui declaramos una variable que guarde el cálculo de resta de la mayoria de edad, menos la edad del usuario.
    let calculate = 18 - Number(userAge); 

    if (userAge >= '18') { 
        
        // Sí el usuario tiene una edad igual o mayor a la mayoria de edad, le diremos que es mayor.
        alert('You are old enough');
        
        console.log('You are old enough');

    } else {   
        
        // Si no, se llamará la variable del cálculo, y muestrará un aviso con el resultado del cálculo.
        alert(`You are left with ${calculate} years to drive`);

        console.log(`You are left with ${calculate} years to drive`);
    }

console.log('--------------');

/* 
* Second exercice: 
    Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input:

        - Enter your age: 30
        - You are 5 years older than me.
*/

    let yourAge = prompt('Enter your age:'); // Edad del usuario
    let myAge = 18; // Edad del programador de este ejercicio
    let diff_age; // Declaramos una variable que almacenará el cálculo del problema

    if (myAge > yourAge) { // Sí mi edad es mayor que la del usuario

        diff_age = myAge - Number(yourAge); // Se le asgina la resta literal, entre mi edad y la del usuario

        console.log(`I am ${diff_age} years older than you`); // Lo muestra en consola
        alert(`I am ${diff_age} years older than you`) // Manda una alerta en el navegador
    }
    else { // De no ser así, invierte el orden de los elementos en la resta:

        diff_age = Number(yourAge) - myAge;

        console.log(`You are ${diff_age} years older than me`); // Lo muestra en consola
        alert(`You are ${diff_age} years older than me`); // Manda una alerta en el navegador
    }

console.log('--------------');

/* 
* Third exercice:
    If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways:
        - using if else
        - ternary operator
*/

    // Declaramos las variables a usar el if...else
    let a = 24;
    let b = 4;

    // First mode: if...else
    if (a > b) {
        alert('a is greater than b')
        console.log('a is greater than b')
    } 
    else {
        alert('a is less than b')
        console.log('a is less than b')
    }

    //Second mode: ternary operator
    let compare = a > b;

    compare ? // Se imprime en consola:
    console.log('a is greater than b') : // De ser cierta la sentencia de arriba, se ejecutará esta 1era acción
    console.log('a is less than b'); // De lo contrario, esta.

    compare ? // Manda una alerta al navegador: 
    alert('a is greater than b') : // De ser cierta la sentencia de arriba, se ejecutará esta 1era acción
    alert('a is less than b'); // De lo contrario, esta.

console.log('--------------');

/* 
* Fourth exercice: 
    Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
        - September, October or November, the season is Autumn.
        - December, January or February, the season is Winter.
        - March, April or May, the season is Spring
        - June, July or August, the season is Summer
*/

    let season = prompt('What month is it?'); // Le pedimos al usuario, el mes en que se encuentra

    let month_season = season.toLocaleLowerCase(); // Hacemos que por cualquier motivo, los nombres esten en minúscula

    if (month_season == 'september') { // Ahora comparamos la respuesta del usuario con los meses que estan en esta estructura
        console.log('The season is Autumn');

    } else if (month_season == 'october') {
        console.log('The season is Autumn');

    } else if (month_season == 'november') {
        console.log('The season is Autumn');

    } else if (month_season == 'december'){
        console.log('The season is Winter');

    } else if (month_season == 'january'){
        console.log('The season is Winter');

    } else if (month_season == 'february'){
        console.log('The season is Winter');

    } else if (month_season == 'march'){
        console.log('The season is Spring');

    } else if (month_season == 'april'){
        console.log('The season is Spring');

    } else if (month_season == 'may'){
        console.log('The season is Spring');

    } else if (month_season == 'june'){
        console.log('The season is Summer');

    } else if (month_season == 'july'){
        console.log('The season is Summer');

    } else if (month_season == 'august'){
        console.log('The season is Summer');

    } else {
        // De no haber ningún parecido, mostrará una alerta y en consola que escriba nuevamente:
        console.log('This is not a month, please write a one');

    }

    console.log('--------------');

/* 
* Fifth exercice: 
     Write a code which can give grades to students according to their scores:
        ● 80-100, A
        ● 70-89, B
        ● 60-69, C
        ● 50-59, D
        ● 0-49, F
*/

    let input_scores = prompt('Enter your escore:') // Por último, le pedimos al usuario que ingrese un número para su calificación

    /*  Ahora hacermos uso de and (&&) y los signos de "mayor igual" y "menor igual",
        para crear un rango de comparación para cada grado. Dependiendo del número ingresado.
     */
    
    if (input_scores >= 80 && input_scores <= 100) {
        console.log('Your grade is: A');

    } else if (input_scores >= 70 && input_scores <= 89) {
        console.log('Your grade is: B');

    } else if (input_scores >= 60 && input_scores <= 69) {
        console.log('Your grade is: C');

    } else if (input_scores >= 50 && input_scores <= 59) {
        console.log('Your grade is: D');

    } else if (input_scores >= 0 && input_scores <= 49) {
        console.log('Your grade is: F');

    } else {
        console.log("It isn't a number or there isn't into the range");
    }