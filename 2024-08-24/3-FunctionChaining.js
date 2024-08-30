/**
 * When a fucntion returns an object with at least one function,
 * we can call that returned function immediately.
 * This is called Function Chaining.
 */

/* Example */

var x = '0';

x.concat(3).concat(9).concat(1); // 0391 ( This is an Example of Function Chaining )

/* ------------------------------- */

function infiniteConcat( initialString )
{

    this.initialString = initialString;
    this.result = initialString;

    this.concat = function( incomingValue )
    {
        this.result += " " + incomingValue;
        return this;
    } 
}

var concat1 = new infiniteConcat("Hello");

concat1.concat("World").concat("How").concat("Are").concat("You").concat("Doing").concat("Today");

concat1.result;

// Result :- Hello World How Are You Doing Today

/* END */