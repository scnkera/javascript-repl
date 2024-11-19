// Use this file as a general scratch pad for running code.

// Run in the terminal from the project directory with
//   node src/index.js

// Or as
//   npm start

// Files other than src/index.js must be run using
//   node path/to/file.js

// Where `path/to/file.js` represents the path to the file to be run relative to
// the current working directory.

// The `Code Runner` VS Code Extension can be installed to add a Play button for
// JavaScript code.

// Refer to math.js and math.test.js for an example of a small test.
// More details will be covered in Unit 3, Tests.

// Run from the terminal with
//   npm test

// The `Jest` VS Code Extension can be installed so that the tests are detected
// and appear under the VS Code Testing panel.

// Replace with the code you'd like to run
// Replace with the code you'd like to run
const calculateTotalPrice = function (order) {
    let total = 0;
   
   
    for (const item of order) {
      total += item.price;
    }
   
   
    return total;
   };
   
   
   const myOrder = [
    {
      entre: "Fish Tacos",
      price: 14.97,
    },
    {
      entre: "Vegan Spaghetti",
      price: 21.47,
    },
   ];
   
   
   const myTotal = calculateTotalPrice(myOrder);
   console.log(`The total is $${myTotal}`);
   
   
   // const arr = ['red', 'green', 'blue'];
   // const [val1, val2, val3] = arr;
   // console.log(val1);
   // console.log(val2);
   // console.log(val3);
   
   
   // const obj = {
   //   name: 'Ash',
   //   color: 'gray',
   // };
   
   
   // const { name, color } = obj;
   
   
   // console.log(name);
   // console.log(color);
   
   
//    const newObj = {name, color};
//    console.log(newObj);
   
