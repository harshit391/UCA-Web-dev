var obj1 = { name : "Harshit Singla" } // Object Literal
var obj2 = new Object() // Object Constructor

var obj3 = Object.assign({}, obj2); // Deep Copy
var obj4 = Object.assign({name : "newName"}, obj2); // First It makes a copy then overwrites values


/**
 * 1 - Constructor Functions
 * 2 - Classes
 * 3 - Objects.create()
 */

/* -------------------------------------------------------------------------------------- */
/* _proto_ (starts) */

function student(fName, obtainedMarks) {

    console.log(this); // this refers to the window object
    
    this.fNameObj = fName;
    this.obtMarksObj = obtainedMarks;
    this.checkResults =  function() {

            console.log(this); // this refers to the object that is being created
            
            let percentage = ( this.obtMarksObj / maxMarks ) * 100; // this.obt is same as obtainedMarks
            
            if(percentage >= 40) {
                return "Passed";
            } else {
                return "Failed";
        }
    }
}

var student1 = new student("Harshit", 200); 
console.log(student1.__proto__); // It will give empty if we haven't created a prototype

student.prototype.college = "Chitkara"; 
// Prototype is a property of a function that points to an object that is shared among all the instances of the function
// It is used to add properties and methods to the object

student.prototype.maxMarks = 500;
// Now We don't need to create a maxMarks variable in the function

console.log(student1.__proto__);

/* _proto_ (ends) */
/* -------------------------------------------------------------------------------------- */
