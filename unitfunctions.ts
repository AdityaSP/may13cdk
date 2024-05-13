// f(x) = x + 5
// g(x) = x + 10
// g(f(x))
// g(f(5))


// takes nothing in and gives nothing out
// procedures
function greet(){
    console.log("Hello") // side effect
}

greet()
greet()
greet()


//SRP - Single reponsiblity Principle
// take an input value and map it to an output value
// Pure function

// f(x) = x + 5
// (x:number) => number
function inc5(x :number) :number{
    let plus5 = x + 5
    return plus5
}

// (x:number) => number
function inc10 (x :number) :number{
    return x + 10
}

inc5(10)
inc10(5)
const plus15 = inc10(inc5(4))
console.log(plus15)

//Write a unit function which calculates simple interest
// let p = 1000;
// let t = 3;
// const r = 3.5;

// const si = (p * t * r) / 100;
// console.log("Interest :", si);



// f(x) = x + 5
// g(x) = x + 10
// g(f(x))
// g(f(5))


// takes nothing in and gives nothing out
// procedures
function greet(){
    console.log("Hello") // side effect
}

greet()
greet()
greet()


//SRP - Single reponsiblity Principle
// take an input value and map it to an output value
// Pure function

// f(x) = x + 5
// (x:number) => number
function inc5(x :number) :number{
    let plus5 = x + 5
    return plus5
}

// (x:number) => number
function inc10 (x :number) :number{
    return x + 10
}

inc5(10)
inc10(5)
const plus15 = inc10(inc5(4))
console.log(plus15)

//Write a unit function which calculates simple interest
// let p = 1000;
// let t = 3;
// const r = 3.5;

// const si = (p * t * r) / 100;
// console.log("Interest :", si);

// (p :number, t :number, r :number) => number
function si(p :number, t :number, r :number) :number{
    return p*t*r/100
}

console.log("Interest ", si(1000, 3, 3.5))


function full_name(fn: string, ln : string) :string {
    return ln + ", " + fn
}

console.log(full_name('Aditya', 'SP'))



//Treat functions as first class citizens

// function calc(x :number, y:number) :number {
//     return x * y
// }

function mul (x: number, y :number){
    return x * y
}

function add(x: number, y: number) {
  return x + y;
}

//higher order functions
function calc(x :number, y :number, op :(m :number, n:number) => number) :number {
    return op(x, y)
}

console.log(    calc(4, 5, mul )      , calc(4,5, add)  )
