class Person{
    //without using constructor
    name='Shiny';
    printName=()=>{
        console.log(this.name);
    }
}
class Display extends Person{ 
   location='Chennai';

printLocation=()=>{
    console.log(this.location);
}
}
const display= new Display();
display.printName();
display.printLocation();