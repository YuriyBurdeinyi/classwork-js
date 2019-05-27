let greetings = "Hello ";
let greetings2 = "JS!";
alert(greetings+greetings2);

let userName = prompt("enter your name:");
alert("Hello " + userName);

let userAge = parseInt(prompt("enter your age:"));
alert("your age is " + userAge);

let nextAge = add(userAge, 1);
alert("next year you will be " + nextAge);

let userGender = prompt('Enter gender (m - male, f - female)');

if (userAge < 18 && userGender === 'f') { // <= > >= == === != !== || && 
    alert('You are underage girl');
} else if (userAge < 18 && userGender === 'm') {
    alert('You are underage boy');
} else if (userAge >= 18 && userGender === 'f') {
    alert('You are adult woman');
} else if (userAge >= 18 && userGender === 'm') {
    alert('You are adult man');
} else {
    alert('Wrong input');
}

function add(a, b) {
    const result = a + b;
    return result;
}

