console.log("Hello World");

// Var Weird Scope
// var x = 5;

// Regular Old Variable
let y = 6;
y = 10; // Can Change The Value

// Constant, Cannot be channged
const z = 7;

// console.log(y , z); Prints The Variable y Value of it Also Prints the Variable z and Value of it
console.log(y , z);

//Adds Both Variables Values
console.log(y+z);

// Subtract Both Variables Values
console.log(y-z);

// Multiply Both Variables Values
console.log(y*z);

// Divide Both Variables Values
console.log(y/z);

// Divides Both Variables Values Then Returns The Remainder
console.log(y%z);

//Does Exponets
console.log(y**z);

let fname="Jared";
let lname="Wright";

console.log(fname + lname);

console.log(fname + " " + lname);

console.log(` ${ fname} ${lname}`);
console.log(` ${ fname} ${5*9}`);

console.log(lname * 6);

let user = "jared";
let pass = "idk";

if (user == "jared") {
    console.warn(`ACCESS GRANTED | USERNAME: ` + user);
} else {
    console.error(`ACCESS DENIED | WRONG USER`);
}

user = "wright";
pass = "idk";

if (user == "jared") {
    console.warn(`ACCESS GRANTED | USERNAME: ` + user);
} else {
    console.error(`ACCESS DENIED | WRONG USER`);
}

user = "jared";
pass = "idk";

if (user == "jared" && pass == "idk") {
    console.warn(`ACCESS GRANTED | USERNAME: ` + user + " - PASSWORD: " + pass);
} else {
    console.error(`ACCESS DENIED | WRONG USER`);
}

const license = 18;
const jrop = 16; 
const rental = 25;


function Checkage( myAge ) {
console.log('RUNNING... '+myAge)
if (myAge < license && myAge >= jrop) {
    console.warn(`You Can Have a Jr0p License!`);
}

if (myAge >= license) {
    console.warn(`you can have a regular license`);
}

if (myAge >= rental) {
    console.warn(` you can rent a car`);
}

if (myAge < jrop) {
    console.error(`You are too young to drive`);
}

}

Checkage(15);
Checkage(15);
Checkage(15);
Checkage(15);