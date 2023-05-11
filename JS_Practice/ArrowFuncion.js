//arrow function
const myName=(name)=>{ 
    console.log(name)
  }
  myName('Shiny');

  //passing empty paranthesis
  const myDetails=()=>{
    console.log('Shiny')
  }
  myDetails();

   //multiple paranthesis
  const details = (name,age)=> {
    console.log(name,age);
  }
  details('Shiny',25);

  //using return
  const add= (number)=>{
    return number+8;
  }
  console.log(add(67));
  
  //consice way
const addNumber= number=> number+8;
console.log(addNumber(67));

//