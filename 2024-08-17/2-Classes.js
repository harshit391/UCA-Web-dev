function student(fName, obtainedMarks) {
    
    this.fNameObj = fName;
    this.obtMarksObj = obtainedMarks;
    this.checkResults =  function() {
            
            let percentage = ( this.obtMarksObj / 500 ) * 100; 
            
            if(percentage >= 40) {
                return "Passed";
            } else {
                return "Failed";
        }
    }
}

var student1 = new student("Harshit", 200); 

/* ------------------------------------------------------------------------------------- */
/*   Concept of Classes (Start)  */

class Student {
    constructor(fName, obt) {
        this.fNameObj = fName;
        this.obtMarksObj = obt;
    }

    checkResults() {
        console.log(this);
        let percentage = ( this.obtMarksObj / 500 ) * 100;
        
        if(percentage >= 40) {
            return "Passed";
        } else {
            return "Failed";
        }
    }
}

var student2 = new Student("Harshit", 200);

console.log(student2);
console.log(student2.checkResults());

/*   Concept of Classes (End)  */
/* ------------------------------------------------------------------------------------- */