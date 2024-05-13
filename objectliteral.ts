

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


// p1 = x1, y1
// p2 = x2, y2
// distance between points -- (p1: Point, p2 :Point) => number
// sqrt((x1-x2)**2 + (y1-y2)**2) 
// Math.pow(2,3)  -- 8
// Math.sqrt(4)  -- 2





