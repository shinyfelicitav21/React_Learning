const num=[21,67,89,45,67];
const n=[...num,4,6,88];

console.log(n);

//using JS object
const person = {
    name:'Shiny'
};
const newPerson={
    ...person,
    age:22
}
console.log(newPerson);

//rest operator using filter()
const filter=(...args)=>{ //dots are rest operator that merge with args.filter, args can be named as needed
    return args.filter(el=>el<=10) ;//using inline arrow function, filter() method used in array   
}
console.log(filter(56,89,34,9));

