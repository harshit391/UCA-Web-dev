var foo = function() 
{
    innerFunction() 
    {
        console.log("Inner Function");
    }
}

foo().innerFunction(); // Uncaught TypeError: Cannot read property 'innerFunction' of undefined
/*
    This Happens because we are not returning the inner function from the foo function.
*/

var foo1 = function()
{
    return {
        innerFunction()
        {
            console.log("Inner Function");
        }
    }
}

foo1().innerFunction(); // Inner Function 
/*
    This worked because we are returning the inner function from the foo function.
*/

