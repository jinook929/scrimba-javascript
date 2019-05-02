let example = 'John';
// example ='Jung';

let name = 'David';
console.log(typeof name);

let firstName = 'Jinook';
let lastName = 'Jung';

let fullName = firstName + ' ' + lastName;

console.log(firstName + ' ' + lastName);
console.log(`${firstName} ${lastName}`);
console.log(`${firstName} ${lastName}`.length);
console.log(`                        ${firstName} ${lastName}`);
console.log(`                        ${firstName} ${lastName}`.length);
console.log(`            ${firstName} ${lastName}          `);
console.log(`            ${firstName} ${lastName}          `.trim().length);
console.log(`${firstName} ${lastName}`);
console.log(`${firstName} ${lastName}`.toUpperCase());
console.log(`${firstName} ${lastName}`.toLowerCase());
console.log(`${firstName} ${lastName}`.split(' '));
console.log(`${firstName} ${lastName}`.split(''));
console.log(`Learn the most popular programming language in the world through 24 tutorials. A simple one-hour course that can change your career.`.split(' '));

console.log(fullName);

let numExample1 = 7;
console.log(numExample1);
console.log(typeof numExample1)

let numExample2 = 7.77;
console.log(numExample2);
console.log(typeof numExample2);
console.log(parseInt(numExample2));
console.log(parseFloat(numExample2));
console.log(numExample2.toFixed());
console.log(numExample2.toFixed(1));
console.log(numExample2.toFixed(5));

let numExample3 = '7.77';
console.log(typeof numExample3);
console.log(parseInt(numExample3));
console.log(typeof parseInt(numExample3));

let example1 = parseInt("Hello 33 World 22");
console.log(example1);
let example2 = parseFloat("44 World 11");
console.log(example2);
let example3 = 55.5555.toFixed();
console.log(example3);
let example4 = 200.0.toFixed(2);
console.log(example4);

let x = 0;
while(x < 10){
  console.log(x);
  console.log(x < 10);
  x++; // x = x + 1;
}

// ARRAYS ********************************************
let arr1 = [5, 7, 6];
console.log(arr1);

arr1.push(8, 9, 10, "HI", 11);
console.log(arr1);

arr1.pop();
console.log(arr1);

arr1[0] = 1
console.log(arr1);

let i = 0;
while(i < 7) {
  console.log(arr1[i]);
  i++;
}

arr1.forEach(function(e){
  console.log(e);
});

let arr2 = ['Jinook', 9, true];
console.log(arr2);
let arr3 = arr2;
console.log(arr3);
console.log("=====");

arr3.push(11); // 
console.log(arr3);
console.log(arr2);
console.log("=====");

let arr4 = [...arr2];
console.log(arr4);
let arr5 = arr2.map(function(e){
  return e;
});
console.log(arr5);
console.log("=====");

arr3.push(2019);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log("=====");

arr4.push("Hola!");
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);

// OBJECTS ********************************************
let person1 = {
  firstName: 'Jinook',
  lastName: 'Jung',
  address: {
    city: 'Flushing',
    state: 'New York'
  },
  age: 44,
  cats: ['Milo', 'Tito', 'Archie']
};

console.log(person1.firstName);
console.log(person1.address.city);

console.log(person1.age);
person1.age = 43;
console.log(person1.age);

console.log(Object.keys(person1));
console.log(Object.values(person1));

console.log(person1.hasOwnProperty('firstName'));
console.log(person1.hasOwnProperty('firstName2'));

let person2 = {
  firstName: 'Dylan'
};

let person3 = person2;

person3.lastName = 'Israel';

console.log(person2);
console.log(person3);

let person4 = Object.assign({}, person2);
person4.age = 25;
console.log(person4);
console.log(person2);

// MATH OPERATORS ********************************************
console.log(5 + 5 - 4 * 4 / 4);
console.log(5 % 2);
console.log(typeof 10);
console.log(typeof '10');
console.log(10 == '10');
console.log(10 === '10');

let num1 = 10;
num1++; // num1 = num1 + 1
console.log(num1);
num1--; // num1 = num1 - 1
console.log(num1);
num1+=5; // num1 = num1 + 5
console.log(num1);
num1/=5; // num1 = num1 / 5
console.log(num1);
num1*=5; // num1 = num1 * 5
console.log(num1);
num1-=5; // num1 = num1 - 5
console.log(num1);


// CONTROL FLOW ***************************************************
console.log(10 === 10 && 5 < 4);
console.log(10 === 10 || 5 < 4);
console.log((5 >= 5 || 4 > 4) && 3 + 2 === 5);

let num2 = 5;

if(num2 === 6 || false === true) {
  console.log('Runs');
} else if(false) {
  console.log('else if');
} else {
  console.log('else');
}

let studentAnswer = 'A';
switch(studentAnswer) {
  case 'A':
    console.log('A is wrong.');
    break;
  case 'B':
    console.log('B is wrong.');
    break;
  case 'C':
    console.log('C is correct.');
    break;
  default:
    console.log('Your choice does not exists.')
}

studentAnswer = 'B';
switch(studentAnswer) {
  case 'A':
    console.log('A is wrong.');
    break;
  case 'B':
    console.log('B is wrong.');
    break;
  case 'C':
    console.log('C is correct.');
    break;
  default:
    console.log('Your choice does not exists.')
}

studentAnswer = 'C';
switch(studentAnswer) {
  case 'A':
    console.log('A is wrong.');
    break;
  case 'B':
    console.log('B is wrong.');
    break;
  case 'C':
    console.log('C is correct.');
    break;
  default:
    console.log('Your choice does not exists.')
}

studentAnswer = 'D';
switch(studentAnswer) {
  case 'A':
    console.log('A is wrong.');
    break;
  case 'B':
    console.log('B is wrong.');
    break;
  case 'C':
    console.log('C is correct.');
    break;
  default:
    console.log('Your choice does not exists.')
}

function isCorrect(answer) {
  switch(answer) {
    case 'A':
      console.log('A is wrong.');
      break;
    case 'B':
      console.log('B is wrong.');
      break;
    case 'C':
      console.log('C is correct.');
      break;
    default:
      console.log('Your choice does not exists.');
      // break;
  }
}

isCorrect('E');
isCorrect('A');
isCorrect('C');