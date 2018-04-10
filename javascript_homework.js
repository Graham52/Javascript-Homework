// Episode One

const name = 'Keith';

const printName = function () {
  console.log(`My name is ${ name }`);
}

printName();

// Episode 1 will print the phrase 'My name is Keith'
// Result as above


// Episode Two

const score = 5;

const result = function () {
  const score = 3;
  return score;
}

console.log(result());

// Episode 2 will print the value of 3
// Result as above

// Episode Three

// const myAnimals = ['Chickens', 'Cats', 'Rabbits'];
//
// const listAnimals = function () {
//   myAnimals = ['Ducks', 'Dogs', 'Lions'];
//
//   for (const i = 0; i < myAnimals.length; i++) {
//     console.log(`${ i }: ${ myAnimals[i] }`);
//   }
// }
//
// listAnimals();

// Episode 3 Not sure of the answer
// result fail trying to assign to a constant


// Episode Four

const suspectOne = 'Jay';
const suspectTwo = 'Val';
const suspectThree = 'Keith';
const suspectFour = 'Rick';

const allSuspects = function () {
  const suspectThree = 'Harvey';
  console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
}

allSuspects();
console.log(`Suspect three is: ${ suspectThree }`);

// Episode 4 will print 'Suspects include: Jay Val Harvey Rick' and then
// print 'Suspect three is Keith'
// Result as above


// Episode Five

const detective = {
  name: 'Ace Ventura',
  pet: 'monkey'
};

const printName1 = function (detective) {
  return detective.name;
}

const detectiveInfo = function () {
  detective['name'] = 'Poirot';
  return printName1(detective);
}

console.log(detectiveInfo());

// Episode 5 will print the name 'Poirot'
// result as above

// Episode Six

const murderer = 'rick';

const outerFunction = function () {
  const murderer = 'marc';

  const innerFunction = function () {
    const murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log(`The murderer is: ${ murderer }`);

Episode 6 will print 'The murderer is: rick'
result as above
