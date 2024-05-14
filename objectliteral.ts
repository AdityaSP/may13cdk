

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
  age?: number;
  empid: number | string;
}

const aditya: Employee = {
  fn: "Aditya",
  mn: "S",
  ln: "P",
  title: "Dr",
  age: 30,
  empid: 1,
};

const johnwick: Employee = {
  fn: "John",
  mn: "Wick",
  ln: "Wick",
  title: "Mr",
  empid: "ABC005",
};

function birthyear(person: Employee) {
  if (typeof person.age !== "undefined") 
    return 2024 - person.age;
  else return 1980;
}

function fullname(person: Employee) {
  return person.title + "." + person.fn + " " + person.mn + " " + person.ln;
}

console.log(birthyear(aditya));
console.log(birthyear(johnwick));
console.log(fullname(aditya));

// Building objects through composition
type Department= {
  name: string,
  head: Employee
}

const cs :Department = {
  name: "Comp Sci",
  head: aditya
}
// JSON -> Java script object notation
const psy: Department = {
  name: "Psychology",
  head: {
    fn: "Alan",
    mn: "M",
    ln: "Pollock",
    title: "Dr",
    age: 30,
    empid: 1,
  },
};

function headofdept(dept: Department) {
  return fullname(dept.head);
}

console.log("Head is ", cs.head.fn)

console.log(headofdept(cs));

console.log(headofdept(psy));


//-------------------------------------------------------------------------------------------









// p1 = x1, y1
// p2 = x2, y2
// distance between points -- (p1: Point, p2 :Point) => number
// sqrt((x1-x2)**2 + (y1-y2)**2) 
// Math.pow(2,3)  -- 8
// Math.sqrt(4)  -- 2


type Point = {x :number; y: number}

const p1 :Point = {x : 8, y: 8}
const p2: Point = {x: 4, y: 4 };

function distance (p1 :Point, p2: Point){
   return Math.sqrt (Math.pow(p1.x -p2.x, 2) + Math.pow(p1.y -p2.y, 2))
}

console.log(distance(p1, p2))


