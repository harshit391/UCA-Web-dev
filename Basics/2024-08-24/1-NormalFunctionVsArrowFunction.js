// Normal Function
function foo() 
{
    console.log(this); // window
}

// Arrow Function
// Function Expression
var arrowFoo = () =>
{
    console.log(this); // window
}

// Anonymous Function
() => {
    // this is not available in anonymous function
}

/**
 * Normal Function vs Arrow Function
 * 
 * 1. It can use declaration synatx as well but arrow function can only use function expression syntax.
 * 2. Normal Function cannot be annonymous but arrow function can be annonymous.  
 * 3. Inside Normal Function we have access to default arguments object but not in arrow function.
 */

/* Example of this in Arrow Function */

function student(fName, lName)
{
    console.log("First This :- ", this);

    this.checkResultsNormal = function() 
    {
        // console.log(this);

        function innerFunction()
        {
            console.log("Inner Function :- ", this); // window
        }
        innerFunction();
    }

    this.checkResultsArrow = () =>
    {
        // console.log(this);

        innerFunction = () => 
        {
            console.log("Inner Arrow Function :- ", this); // student
        }
        innerFunction();
    }
}

var student1 = new student("John", "Doe");

student1.checkResultsNormal();

student1.checkResultsArrow();

/* Results in Browser */

/*
First This :-  student {}
Inner Function :-  Window {window: Window, self: Window, document: document, name: '', location: Location, …}
Inner Arrow Function :-  student {checkResultsNormal: ƒ, checkResultsArrow: ƒ}
*/

/**
 * Scope of this Keyword Depends on the Function Type
 * If its Normal Function then this will be window
 * If its Arrow Function then this will be the object itself
 */

/* Self Invoking Functions */

(function() {
    console.log("Inside Self Invoking Function function with params as: ", this); // window
})();