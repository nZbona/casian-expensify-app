// 
//  Object Destructuring
// 


// const person = {
//     name: "Nick",
//     age: 21,
//     location: {
//         city: "Negresti",
//         temp: 17
//     }
// };

// // const name = person.name;
// // const age = person.age;

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}`);


// const { city, temp: temperature = 389 } = person.location;

// if (city && temperature){
//     console.log(`It's ${temperature}dgs in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: "Ryan Holiday",
//     publisher: {
//         name: 'Penguin',
//         age: 67
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);





// 
//  Array Destructuring
// 

const adress = ['1278 S Juniper Street', 'Philly', 'Pennsylvania', '19147'];
const [, , state = 'New York'] = adress;

console.log(`You are in ${state}.`);

const item = ['coffee {hot}', '$2.00', '$2.60', '$2.75' ];

const [itemName, , itemMidPrice] = item;

console.log(`A medium ${itemName} costs ${itemMidPrice}.`);