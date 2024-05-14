
// Studly Caps AbcdEfgh
class EmployeeC {
  fn: string;
  mn: string;
  ln: string;
  title: string;
  age?: number;
  empid: number | string;
    
    constructor(  fn: string, mn: string, ln: string, title: string, empid: number | string, age? :number){
        this.fn = fn
        this.mn = mn
        this.ln = ln
        this.title = title
        this.empid = empid
        if (typeof age !== undefined)
            this.age = age

    }

    // camelCase
    getBirthYear() {
        if (typeof this.age !== "undefined") return 2024 - this.age;
        else return 1980;
    }

    getFullName() {
        return this.title + "." + this.fn + " " + this.mn + " " + this.ln;
    }
}

const adi = new EmployeeC("Aditya","S","P","Dr",30)
const jw = new EmployeeC("John","Wick","Wick","Mr","ABC005")

console.log("Birth year of Aditya", adi.getBirthYear())
console.log("Birth year of JW", jw.getBirthYear());


class DepartmentC{
    name: string;
    head: EmployeeC
    constructor(name :string, emp :EmployeeC){
        this.name = name
        this.head = emp
    }

    getHeadOfDept() {
        return this.head.getFullName()
    }    
}

const depcs = new DepartmentC("Computer Sc", adi)

const deppsy = new DepartmentC("Psychology", jw);

console.log("Head of dept ", depcs.name, "is", depcs.getHeadOfDept())
console.log("Head of dept ", deppsy.name, "is", deppsy.getHeadOfDept());
