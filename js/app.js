console.log




// function computerArea(width, height) {
//    return width * height;

// }

// function getDevObject(name) {
//     let skills = [];
//     for (let i = 1; i < arguments.length; i++) {
//       skills.push(arguments[i]);
//     }
//     return {
//       devName: name,
//       jobSkills: skills
//     };
//   }

//   function getDevObject(name, ...skills) {
//     return {
//       devName: name,
//       jobSkills: skills
//     };
//   }

//   let maria = getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery');
//   console.log (maria);

// /function setColor(bicycle, color) {
// 	// set color to 'purple' if not provided
// 	bicycle.color = color || 'purple';
// }


// function setColor(bicycle, color = 'purple') {
// 	bicycle.color = color;
// }
// const bike = new Bicycle();
// setColor(bike, 'blue');  // sets color to blue
// setColor(bike);  // sets color to purple by default


// let a = ['red', 'green', 'blue'];

// a.forEach(function(color) {
//   console.log(color);
// });

// let myVar = 20;

// function passBy(myVar) {
//     myVar = myVar * 10;
//     return myVar;
// }

// let myVar = 20;

// function passBy(x) {
//     x = x * 10;
// }

// let myVar = { value: 20, type: 'Number' }

// function passBy(x) {
//     x.value = x.value * 20;
// }

// console.log(myVar);           // 20
// console.log(passBy(myVar));   // 200
// console.log(myVar);  


// let numArray = [10, 20, 0, -10, 15, 28, -1000, 42, 7];

// function returnEven(array) {
//     let newArray = [];

//     array.forEach((element) => {
//         if (element % 2 == 0) {
//             newArray.push(element);
//         }
//     });

//     return newArray;
// }

// console.log(numArray);                  // (9) [10, 20, 0, -10, 15, 28, -1000, 42, 7]
// let newArray = returnEven(numArray);
// console.log(newArray);                  // (7) [10, 20, 0, -10, 28, -1000, 42]
// console.log(numArray);     



// let numArray = [
//     { value: 10 },
//     { value: 20 },
//     { value: 0 },
//     { value: -10 }, 
//     { value: 15 }, 
//     { value: 28 }, 
//     { value: -1000 },
//     { value: 42 },
//     { value: 7 }
// ];

// function returnEven(array) {
//     let newArray = [];

//     array.forEach((element) => {
//         if (element.value % 2 == 0) {
//             newArray.push(element);
//         }
//     });

//     return newArray;
// }

// let newArray = returnEven(numArray);

// newArray[0].value += 10;

// numArray[3].value = 67;

// let myEvenValue = newArray[1].value;
// myEvenValue /= 2;


const person = {
    name: "John",
    age: 34,
    email: "john@example.com",
  };
  
  person.age = 20;
  const personDeep = structuredClone(person);
  const personShallow = { ...person };
  
  personDeep.age = 50;
  
  console.log(person);
  console.log(personDeep);
  console.log(personShallow);