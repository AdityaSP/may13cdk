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
