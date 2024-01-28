
// Importing lodash functions
const _ = require('lodash');

// Example data
const numbers = [1, 2, 3, 4, 5];
const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};

// Example 1: Using _.chunk()
const chunkedNumbers = _.chunk(numbers, 2);
console.log('Chunked numbers:', chunkedNumbers);

// Example 2: Using _.isEmpty()
console.log('Is person object empty?', _.isEmpty(person));

// Example 3: Using _.sortBy()
const sortedNumbers = _.sortBy(numbers);
console.log('Sorted numbers:', sortedNumbers);

// Example 4: Using _.map()
const doubledNumbers = _.map(numbers, num => num * 2);
console.log('Doubled numbers:', doubledNumbers);

// Example 5: Using _.pick()
const selectedFields = _.pick(person, ['name', 'age']);
console.log('Selected fields:', selectedFields);