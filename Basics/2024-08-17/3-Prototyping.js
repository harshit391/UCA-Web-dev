// Prototyping Inheritence
// Achieved through Prototype Chaining Method

function student(fName, obtainedMarks) {
    
    this.fNameObj = fName;
    this.obtMarksObj = obtainedMarks;
    this.checkResults =  function() {
            
            let percentage = ( this.obtMarksObj / maxMarks ) * 100;
            
            if(percentage >= 40) {
                return "Passed";
            } else {
                return "Failed";
        }
    }
}

var student1 = new student("Harshit", 200); 

student.prototype.college = "Chitkara"; 
student.prototype.maxMarks = 500;

student.prototype.mathMaxMarks = 100;

console.log(student1);
console.log(student1.__proto__);
console.log(student1.mathMaxMarks);
console.log(typeof student1);


// student1 will have all the properties as per normal Data Structures have
console.log(student1.toString())

student1.__proto__.mathMaxMarks = 1000;
// It will even modify the parent class protoype

console.log(student1.mathMaxMarks); 
console.log(student.prototype.mathMaxMarks);

/* -------------------------------------------------------------------------------------- */
/* Inheritence Prototype */

var arr = [1, 2, 3]

callBackFunction1 = function(value) {
    console.log(value);
}

// arr.forEach(callBackFunction1);
// Let's create arr.forEachCustom

Array.prototype.forEachCustom = function(callBackFunction) {
    for(let i = 0; i < this.length; i++) {
        callBackFunction(this[i]); // this refers to the array
    }
}

arr.forEachCustom(callBackFunction1);

Array.prototype.multiplyByTwo = function() {
    for(let i = 0; i < this.length; i++) {
        this[i] = this[i] * 2;
    }
    return this;
}

multiplyByTwoCallback = function(value) {
    return value * 2;
}

console.log(arr.multiplyByTwo());


// Map will not modify the original array but will return a new array with the modified values
Array.prototype.mapCustom = function(callBackFunction) {
    let result = []
    for (let i = 0; i < this.length; i++)
    result.push(callBackFunction(this[i]));

    return result;
}


console.log(arr.mapCustom(multiplyByTwoCallback));


/* -------------------------------------------------------------------------------------- */