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
var student2 = Object.create(student1);

// It will create a new inherited object with the prototype of student1
// Like all the variables and methods of student1 are available in student2
console.log(student2);

// If we define some property in student1 then it will be available in student2
// But Not Vice Versa
// Prototype can be available like defining a protoype in child class then parent class will have that property

/* -------------------------------------------------------------------------------- */



