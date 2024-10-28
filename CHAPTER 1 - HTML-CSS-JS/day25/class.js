class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`my name is ${this.name}`);
    }
}
let Person1 = new Person('aswin', 18);
Person1.greet();


class Student extends Person{
    constructor(name,age,grade){
        super(name,age);
        this.grade = grade;
    }

    study(){
        console.log(`${this.name} is studying. and he has grade of ${this.grade}`);
    }
}

let student1 = new Student('abhijith',22,'S');
student1.study();
