

// Student with Private and Non Private Fields
class StudentWithPAndNPFields
{
    /* #firstName  
    => It says that the firstName is the private property of the class 
    If we try to access firstName outside class Then It will throw error 
    Not in Browser Console because they don't follow the rule of # privacy  */

    static #firstName = "Harshit"; 
    
    /* Static will only be used where we want only one instance of the variable like Main Function in Java Programming
     So Don't Use Static in this case as we want to have different firstnames for different students
     Static variable will Initialize once object is created and will be same for all objects */
    
    lastname;

    constructor(obtainedMarks, firstName)
    {
        this.obtMarks = obtainedMarks;
        this.lastname = "Singla";
        this.firstName = firstName;

        /*
        this.firstName = firstName => It will work but it will behave as other property at object level
         So The Value of firstName we will getting Not the 'Harshit' 
         To Print the "Harshit" We have to do it by StudentWithPAndPFields.firstName => It will print 'Harshit' 
         This is because static keyword binds the varible with the class scope
         */
    }

    checkResults()
    {
        let percentage = this.obtMarks / 5;

        if (percentage > 40)
        {
            return "Passed";
        }
        else
        {
            return "Failed";
        }
    }
}

let student3 = new StudentWithPAndNPFields(200, "Harshpreet");
console.log(student3);