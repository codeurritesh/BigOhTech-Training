//Try Catch Finally

// try{
//     console.log("Indide Try");
//     console.log(num);
//     const num=0;
    
// }catch{
//     console.log("Error Detected");
// }
// finally{
//     console.log("Finally Block");
// }

//OOPS Inheritance


// class Person{
//     name;
//     age;
//     constructor (name,age){
//         this.name = name;
//         this.age = age;
//     }
//     getInfo(){
//         console.log(this.name);
//         console.log(this.age );  
//     }
// }

// const p1=new Person("Ritesh",20);
// p1.getInfo();

// class Teacher extends Person{
//     skills;
//     constructor(name,age,skills){
//         super(name,age);
//         this.skills=skills;
//     }
//     getTeacherInfo= ()=> {console.log(`${this.skills} with ${this.age}  ${this.name}`)}
//     getName=()=>{return this.name};
//     getAge=()=>{return this.age};
//     getSkills=()=>{return this.skills};
//     static hello() {
//         return "Hello!!";
//       }

// }
// const t1=new Teacher("Ritesh",20,["DSA","OOPS"]);
// console.log(Teacher.hello())
// t1.getTeacherInfo()
// console.log(t1.getAge())
// t1.getInfo()
// console.log(t1.getName());
// console.log(t1.getSkills())
// console.log(t1.hello)


//Encapsulation

// class Person{
//     constructor(){
//         let age;
//         let name;
//     }
//     getName(){
//         return this.name;
//     }
//     setName(name){
//         this.name=name;
//     }
//     getAge(){
//         return this.age;
//     }
//     setAge(age){
//         this.age=age;
//     }
// }
// const person1=new Person();
// console.log(person1.getAge());      //undefined
// console.log(person1.getName());     //undefined
// person1.setAge(23);             
// person1.setName("Ritesh");
// console.log(person1.getAge());      // 23
// console.log(person1.getName());     // Ritesh

// 
