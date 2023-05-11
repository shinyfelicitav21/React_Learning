//primitive type
const number=17; 
const num= number; //re-assign and store it a value, copy of it 

console.log(num);

//object type
const person={
    name:'Sweety'
}; //pointer will be copied
const newPerson={
    ...person
}
console.log(person);
 //const newPerson=person;
 person.name='Shiny';
 console.log(newPerson);

 //copying object not just pointer using spread operator
 