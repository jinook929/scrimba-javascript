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