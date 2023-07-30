console.log("Hello Hemanta");

// Declaring a variable
let data1="string1";
const data2="string2";

console.log(typeof(data1));

let isLoggedin = true;
let num = 10;

console.log('num', typeof num);

let obj = {
    name: 'Hemanta',
    roll: 10
};

let arr = ["Student1", "Student2",10, obj];
let marks=100;
console.log(arr);
console.log(num == 20);
console.log(`${marks}`);


// function 

function findoddnum(num){
    if(num%2!=0){
        console.log(`${num} is a odd number`);
    }
    else{
        console.log(`${num} is not a odd number`);
    }
}

// const findoddnum = () =>{

// }

findoddnum(11);

// Higher order array method
// for(let i=0; i<10;i++){
//     console.log("Here",i);
// }

const student = ["Hemanta", "Noyal", "Pramesh", "Niroj"];
// console.log(student);

// for(let i=0;i<student.length; i++){
//     if(student[i]=="Hemanta"){
//         console.log(`${student[i]} is epic`);
//     }
// }

// for(let students of student){
//     console.log(students);
// }

const newstd = student.map((value,index) =>{
    if(value!="Noyal"){
        return value;
    }
})

console.log(newstd);
console.log("-------------");

const filterstd = student.filter((value,index) =>{
    if(value!="Noyal"){
        return value;
    }
})

console.log(filterstd);

function loginHandler(event){
    event.preventDefault(); //prevent default
    const email = document.getElementById('email').value;
    const pass= document.getElementById('password').value;
    console.log(email);
    console.log(pass);
}