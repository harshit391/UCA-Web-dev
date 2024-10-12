/* ------ SESSION STORAGE ----- */

// Session Storage will be deleted when the browser is closed
// It is binded with the tab

// Functions
// 1. setItem()
// 2. getItem()
// 3. removeItem()
// 4. clear()
// 5. key()
// 6. length

// setItem()
sessionStorage.setItem("name", "Harshit");

// getItem()
let sessionName = sessionStorage.getItem("name");
console.log(sessionName);

// removeItem()
sessionStorage.removeItem("name");

// key()
sessionStorage.setItem("name", "Harshit");

let sessionKey = sessionStorage.key(0);
console.log(sessionKey);

// length
let sessionLength = sessionStorage.length;

// clear()
sessionStorage.clear();

// Storing Objects in Session Storage
let sessionObj = { "name": "Harshit", "age": 19, "city": "Patiala" };

// We Cannot Store the Object directly in Session Storage
// We have to convert it into string
// JSON.stringify() is used to convert the object into string

sessionStorage.setItem("obj", JSON.stringify(sessionObj));


// To Traverse in Session Storage
Object.keys(sessionStorage);