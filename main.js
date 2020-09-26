const firstName = 'Kalina';
const age = 37;

console.log(firstName);
console.log(age);
alert("Hej");


const heading = document.querySelector('.main-heading--js');

const emptyParagraph = document.querySelector('.week-summary__description--js')

emptyParagraph.innerHTML = `Nawet uzupełniłam treść javascriptem!`;

function greetOld(age, firstName) {
    console.log(`Siema, nazywam się ${firstName} i mam ${age} lat.`);
}

const greet = (age, firstName) => {
    console.log(`Siema, nazywam się ${firstName} i mam ${age} lat.`);
}

function calculateOld(myNumber) {
    return myNumber*7
}


const calculate = (myNumber) => myNumber*7



console.log(calculate(7))



greet(37, 'Kalina');




function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;

}

createContent('.week-summary__description--js', 'Witaj świecie!')



const deathStar ={
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destryed`)
    },
    isOperating: true,
    levels:357,
    name: 'Death Star',
    population: 10000,
    isLightOn: true,
    comander: {
        name: 'Darth Vader',
        age: 44,
    }
}

const myProperty = 'name'

const showMeProperty = (myProperty) => {
    console.log(`Twoja własność ${myProperty} to: ${deathStar[myProperty]}`);
}

showMeProperty('levels')

const humanOne = {
    name: 'Maciek',
    age: 32
    address: {
        street: Warszawska
    }
}

const humanTwo = {
    name: 'Stefan',
    age: humanOne.age
}

console.log(humanOne);
console.log(humanTwo);

humanOne.age = 35;


console.log(humanOne);
console.log(humanTwo);


















