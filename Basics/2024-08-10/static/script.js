// multiple ways to declare functions


var name="source"


//this is known as function declaration
function func(param1){
    console.log("Inside func1 function with params as : ",params1);
}

//this is function expression

var func2= function(param2){
    console.log("Inside func2 function with params as : ",params2);
}

//arrow function generally written in the form of function expression
// no change in behaviour..just syntax change it is used in advance frameworks
var func3=(params)=>{
    console.log("Inside func3 function with params as : ",params);
}


//this is used only when a function is to be passed into a function as param(callback func)

(param)=>{
    console.log("Inside func4 function with params as : ",param);
}

//self invoking functions
((param)=>{
    console.log("Inside func4 function with params as : ",param);
})()
