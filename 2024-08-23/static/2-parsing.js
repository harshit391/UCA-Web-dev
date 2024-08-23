let obj = { "name": "Singla", "age": 19, "city": "Patiala" };

// Accessing the value one by one like this is called parsing
console.log(obj.name);

// Parsing the object
console.log(obj);

// Parsing the object in a better way
console.log(JSON.stringify(obj));

// Parsing the object in a better way with indentation
console.log(JSON.stringify(obj, null, 2));

// Parsing the object in a better way with indentation and sorting
console.log(JSON.stringify(obj, null, 2, true));


// Destructuring the object
let {"name": name1, "age": age1, "city": city1} = obj;

// Printing the destructured object
console.log(name1);
console.log(age1);
console.log(city1);