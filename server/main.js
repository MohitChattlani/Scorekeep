import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(()=>{
  /*Arrow functions
  let pro=(x)=>x*x;
  console.log(pro(12));
  let user={
    name:"Mohit",
    sayhi (){
      setTimeout(()=>{
        console.log(this.name);
      },1000);
    }
  };
  user.sayhi(1,2);
  let numbers=[10,20,30];
  console.log(numbers.map((number)=>number+1));
  let numbers=[{val:1},{val:2}];
  let newnumber=numbers.map(function(number){
    return <p key={number.val}>number.val</p>
  });
  console.log(newnumber);
  */

  /*
  ES6 classes
  class Person {
    constructor(name="raju",age=0) {
      this.name=name;
      this.age=age;
    }
    getpersondes()
    {
      //return this.name+" is "+this.age+' years old.'
      return `${this.name} is ${this.age} years old.`;
    }
  }
  let me=new Person();//empty instance of class
  console.log(me.getpersondes());
  //Class extends
  class Programmer extends Person {
    constructor(name,age,language="assembly") {
      super(name,age);
      this.language=language;
    }
    getpersondes() //overriding a method of parent class
    {
      return `Hi! I am ${this.name}.I am a ${this.language} developer.`;
    }
    getgreeting() //making a new method
    {
      return super.getpersondes(); //referring to the method in parent class
    }
  }
  let mohit= new Programmer("mohit",20,"Javascript"); //instance of Programmer
  console.log(mohit.getpersondes());
  console.log(mohit.getgreeting());
  */
  /* Bind method
  let obj={
    name:"Mohit",
    printname()
    {
      console.log(`Name:${this.name}`);
    }
  }
  setTimeout(obj.printname.bind(obj),1000);
  */
  /* Object spread operator
  let user={
    name:"Mohit",
    age:0
  };
  let person={
    ...user,
    age:25
  };

  console.log(person);
  */
  /* Object property shorthand
  let bike='Pulsar';
  let keeps={
    bike,
    lap:"hp"
  }
  console.log(keeps);
  */
});
