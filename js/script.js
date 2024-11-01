//todo: if else

let isRaining = true

    if (isRaining){
        console.log('You need a rain coat');
    } else {
        console.log('No need a rain coat');
    } // Imprime: You need a rain coat

console.log('--------------');

//todo: If - else if - if

let waether = 'sunny'

    if (waether === 'rainy') {

        console.log('You need a rain coat');

    } else if (waether === 'cloudy') {

        console.log('Is might be cold, you need a jeckey');

    } else if (waether === 'sunny') {

        console.log('Go out freely');

    } else {

        console.log('No need for rain coat');

    }

console.log('--------------');

    // Imprime: Go out freely

//todo: Switch

let dayUserInput = prompt('What day is today?');

dayUserInput.toLocaleLowerCase

switch(dayUserInput) {
    case 'monday': 
        console.log('Today is Monday');
        break
    case 'tuesday':
        console.log('Today is Tuesday');
        break
    case 'wednesday':
        console.log('Today is Wednesday');
        break
    case 'thursday':
        console.log('Today is Thursday');
        break
    case 'friday':
        console.log('Today is Friday');
        break
    case 'saturday':
        console.log('Today is Saturday');
        break
    case 'sunday':
        console.log('Today is Sunday');
        break
    default:
        console.log('It is not a week day')
}

console.log('--------------');

let num = prompt('Enter number')

    switch(true) {
        case num > 0:
            alert('Number is positive');
            console.log('Number is positive');
        break  
        case num == 0:
            alert('Number is zero');
            console.log('Number is zero');
        break  
        case num < 0:
            alert('Number is negative');
            console.log('Number is negative');
        break  
        default:
            alert('Entered value was not a number');
            console.log('Entered value was not a number')
    }