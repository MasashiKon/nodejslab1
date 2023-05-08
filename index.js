const mySum = require('./mySum')

console.log(mySum(1, 2, 3));

const myArr = [1, 2, 3, 4, 5]

const result = mySum(...myArr);

console.log(result);

const mySecondArr = [];


(function() {
    myArr.forEach((num) => {
        mySecondArr.push(num * 2);
    })
})();

(function() {
    console.log(mySum(...mySecondArr) / mySecondArr.length);
    console.log(mySecondArr);
})();

setTimeout(() => {
    console.log("Goodbye");
}, 3000)

const Employee = {
    name:"John",
    email:"John@test.com",
    department:"HR"
}

const Person = {
    name,
    email
} = Employee;

console.log(Person.name, Person.email);