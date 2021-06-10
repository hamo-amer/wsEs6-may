//1) variables  var function scope  let block scope

// function myF(){
//     for(var i=0;i<5;i++){
//     if(i<10){
//       var j=8
//       console.log("inside if",i,j)
//     }
//     console.log("outside if",i,j)
//   }
//   }
//   console.log(i)
// const 
// const  names=["khawla","khaled","olfa"]
//  names.push("sarra")
//  names[0]="oumayma"
// console.log(names)

// const user={
//   name:"manel",
//   age:20
// }
// user.name="sarra"
// console.log(user)

// 2) arrow functions
// function sum(a,b){
//     return a+b
//   }
  
  
//   const add=(a,b)=>a+b
  
//   const double=a=>a*2
  
//   console.log(double(12))

//3) Template 
// let name="sarra"
// let lastName="fatnassi"

// console.log(`Hello ${name} ${lastName}`)

// 4) destructuring
// let tab=[1,45,75,78,46]
// let [a,b,c]=tab

// console.log(c)
// let user={
//   name:"sarra",
//   lastName:"fatnassi",
//  age:20
// }
// const sayHello=({name,lastName})=>{
//   // let {name,lastName}=objet
// return `Hello ${name} ${lastName} `
// }
// console.log(sayHello(user))

// 5) spread operator
// spread 
// console.log(Math.min(12,45,1))
// console.log(Math.min(...[12,45,1]))
// let user={
//     name:"nourhen",
//     lastName:"slimen"
//   }
//   let newUser={...user}
  
//   newUser.age=20
//   console.log(user)
//   console.log(newUser)
//   let user={
//     name:"nourhen",
//     lastName:"slimen"
//   }
//   let newUser={age:20,name:"olfa",...user}  // ...user=name:"nourhen",lastName:"slimen"
  
  // newUser.age=20
//   console.log(user)
//   console.log(newUser)

//7) forEach map filter
// names.forEach((el,i,arr)=>{
  // newNames.push(el.toUpperCase())
// arr[i]=el.toUpperCase()
// })
// console.log(names)
// let newNames=names.map((el)=> el.toUpperCase())
// console.log(newNames)
// let arr=[12,45,-5,78]
// let pos=arr.filter((el,i)=>el>0&&i%2===0)
// console.log(pos)
// 8) Turnery operator
// const pair=(n)=> n%2===0 ? true:false

// const div3=(n)=>{
//   return n%3===0 ? true:n%3===1 ? "rest 1":"rest 2"
// }

// console.log(pair(5))
// let str="Hello world"

// console.log(str.split("").map(el=>el.toUpperCase()).join(""))

import Sum from "./demo.js"
import {secret} from "./main.js"

console.log(secret)
// console.log(user)
console.log(Sum(2,5))