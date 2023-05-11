class Person{
    constructor(){
        this.name='Shiny';
    }
    printName(){
        console.log(this.name);
    }
}
class Display extends Person{ //using inheritance
    constructor(){
        super();
        this.location='Trichy'; //error because we didnt included super class property
    }

printLocation(){
    console.log(this.location);
}
}
const display= new Display();
display.printName();
display.printLocation();