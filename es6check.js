const pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

const getAge = pet => new Date().getFullYear() - pet.bornOn;

const petsWithAge = pets.map((elem) => { 
    return {...elem,age:getAge(elem)}
})
console.log(petsWithAge);

const dogs = pets.filter((elem) => elem.type === "dog")

console.log(dogs);

let jasper = petsWithAge.find((elem) => elem.name === "Jasper")
console.log(jasper)
console.log(`Jasper is ${jasper.age} years old`);