//* First exercice:

 let userAge = prompt('Enter your age please:')

    let calculate = 18 - Number(userAge);

    if (userAge >= '18') {
        alert('You are old enough');
        
        console.log('You are old enough');
    } else {
        alert(`You are left with ${calculate} years to drive`);

        console.log(`You are left with ${calculate} years to drive`);
    }

//* Second exercice:

 let yourAge = prompt('Enter your age:');
    let myAge = 18; // Aaron age
    let diff_age;

    if (myAge > yourAge) {

        diff_age = myAge - Number(yourAge);

        console.log(`I am ${diff_age} years older than you`);
        alert(`I am ${diff_age} years older than you`)
    }
    else {

        diff_age = Number(yourAge) - myAge;

        console.log(`You are ${diff_age} years older than me`);
        alert(`You are ${diff_age} years older than me`);
    }

//* Third exercice:

    let a = 24;
    let b = 4;

    // First mode: if...else
    if (a > b) {
        alert('a is greater than b')
        console.log('a is greater than b')
    } else {
        alert('a is less than b')
        console.log('a is less than b')
    }

    //Second mode: ternary operator
    let compare = a > b;

    compare ? 
    console.log('a is greater than b') : 
    console.log('a is less than b');

    compare ? 
    alert('a is greater than b') :
    alert('a is less than b');

//* Fourth exercice:

    let season = prompt('What month is it?');

    let month_season = season.toLocaleLowerCase();

    if (month_season == 'september') {
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
        console.log('This is not a month, please write a one');

    }

//* Fifth exercice:

    let input_scores = prompt('Enter your escore:')

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