

// const a :number = 10
// First iteration: look at dependent data as independent variables
// function fullname(fn :string, mn :string, ln :string, title :string){
//     return title + "." + fn + " " + mn + " " + ln 

// }


// Second Iteration
// object literal
// const aditya :{
//     fn: string;
//     mn: string;
//     ln: string;
//     title: string;
//     age: number;
// } = {
//     fn : "Aditya",
//     mn : "S",
//     ln : "P",
//     title: "Dr",
//     age: 30
// }

// console.log(aditya.fn, aditya.ln)

// function fullname(person :{fn: string; mn: string; ln: string; title: string; age: number;}) {
//     return person.title + "." + person.fn + " " + person.mn + " " + person.ln
// }

// console.log(fullname(aditya))


//Third iteration
//Defined types

type Employee = {
  fn: string;
  mn: string;
  ln: string;
  title: string;
  age: number;
}

const aditya :Employee = {
    fn : "Aditya",
    mn : "S",
    ln : "P",
    title: "Dr",
    age: 30
}

function fullname(person :Employee) {
    return person.title + "." + person.fn + " " + person.mn + " " + person.ln
}

console.log(fullname(aditya))

