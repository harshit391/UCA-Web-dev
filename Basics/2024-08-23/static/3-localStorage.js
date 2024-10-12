/* Web Storage */

// Two Types of Web Storage
// 1. Local Storage
// 2. Session Storage

// The image.png will show the different types of storage
// Local Storage will be stored in the browser even if the browser is closed
// But Every Domain will have its own Local Storage
// Local Storage is binded with a domain and will be deleted if the domain is deleted

/* -------- LOCAL STORAGE -------- */

// Functions
// 1. setItem()
// 2. getItem()
// 3. removeItem()
// 4. clear()
// 5. key()
// 6. length

// setItem() 
// It will store the data in the local storage ( Heap Storage of the Browser )
// You can update the value by using the setItem Again
localStorage.setItem("name", "Harshit");

// getItem()
let storageName = localStorage.getItem("name");
console.log(storageName);

// removeItem()
localStorage.removeItem("name");

// key()
localStorage.setItem("name", "Harshit");
localStorage.setItem("age", "19");
localStorage.setItem("city", "Patiala");

let key = localStorage.key(0);
console.log(key);

// length
let length = localStorage.length;
console.log(length);

// clear()
localStorage.clear();

// Storing Objects in Local Storage
let obj = { "name": "Harshit", "age": 19, "city": "Patiala" };

// We Cannot Store the Object directly in Local Storage
// We have to convert it into string
// JSON.stringify() is used to convert the object into string
localStorage.setItem("obj", JSON.stringify(obj));

// aftersave.png file will show the data saved in the local storage

// To Traverse in Local Storage
Object.keys(localStorage);
