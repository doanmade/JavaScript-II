// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

 function home() {
   const owner = "Dad's House";
   console.log(`welcome to ${owner}`);

   function party() {
     const kids = "lets Party";
     console.log(`We cannot party here! This is my ${owner}`); //${owner} is the closure (owner has the abblity to reach out of this function)
   }
   party()
 }
 home()
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
