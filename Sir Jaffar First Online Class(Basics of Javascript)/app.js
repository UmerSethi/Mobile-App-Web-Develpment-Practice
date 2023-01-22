
// ES5 Function :

// function foo(){
//     console.log("Hello World");
// }

// foo()



// -------------------------------------------------------------------------------------------

                        // Define Function & User define function
// -------------------------------------------------------------------------------------------


// User Define Function :-


// function foo(name){            ///name => parameter

//     console.log("Hello World");
// }

// foo()



// ------------------------------------------------


// function foo(name){
//     console.log("Hello World")
//     console.log(name)
// }

// foo("Jawan Pakistan")    /// Here Jawan Pakistan is an "Argument"



// ------------------------------------------------


// function foo(name){
//     console.log("Hello World");
//     console.log(name)
// }

// foo();



// ------------------------------------------------



// function foo(name = "Jawan Pakistan"){
//     console.log("Hello World")
//     console.log(name)
// }

// foo();


// ------------------------------------------------


// function foo(name="Jawan Pakistan"){
//     console.log("Hello World")
//     console.log(name)
// }

// foo("Jawan")


// ------------------------------------------------

                    //   ==============================================
                                        // ES6 Arrow Function
                    //   ==============================================


// EXAMPLE # 01 :


// const foo = () => {
//     console.log("Hello World")
// }

// foo     /////Function call nhi hoga ...idhr parentheses lagana lazmi h !!!



// -----------------------------



// EXAMPLE # 02 :


// const foo = () => {
//     console.log("Hello World")
// }

// foo()   ///  idhr easily function call hoajye ga !!!


// -----------------------------


// EXAMPLE # 03 :   Parameter

// const userName = (name) => {    /// name => Parameter
//     console.log(name)
// }

// userName("Jawan Pakistan")



// -----------------------



// EXAMPLE # 04 :   Multiple Parameter

// const userName = (fName , lName) => {
//     console.log(fName , lName)
// }

// userName("Muhammad" , "Umer")



// ----------------------------


// EXAMPLE 05 :  Technical Question :


// function sum (a,b){
//     console.log("function" , a + b);
// }

// console.log(sum(2,3))



// ----------------------------
 
// EXAMPLE 06 :  return :

// function sum(a,b){
//     console.log("function" , a + b);
//     return a + b;
// }

// const result = sum(2,3);
// console.log(result)


// ----------------------------
 
// EXAMPLE 07 :  return 


// const sum = (a,b)=>{
//     return a + b;
// }
// console.log(sum(2,5))

                                        // ========================================
                                        //    DIRECT METHODS FOR ARROW FUNCTIONS
                                        // ========================================


// OR (Direct Method for single statement)


// const sum = (a,b) => a + b;
// console.log(sum(2,5))


// ---------------------------------




// EXAMPLE # :  Short Method



// const num = (a) => a ;

// console.log(num(5))


// OR

// const num = a => a;
// console.log(num(5))


// ---------------------------------


// EXAMPLE : # ;  agr single parameter use kr rhy ho ....to parenthese deny ki bhi zarort nhi !!!

// const num = a => {
//     const b = a;
//     return b
// };

// console.log(num(6))



// ---------------------------------

// EXAMPLE : # USE OF UNDERSCORE :



// const num = _=>{
//     console.log("Hello World")
// }

// num();


// ------------------------------------------

                                   // ================================
                                            // CONSTRUCTOR :-
                                   // ================================


// function Std (name,age){
//     this.name = name;
//     this.age = age
// }

// const Std1 = new Std ("Helloo" , "20");
// console.log(Std1)


                                   // ================================
                                            // CLASS :-
                                   // ================================


    // EXAMPLE # 01 :

// class MyClass {
//     constructor(name,age){
//         this.stdName = name;
//         this.stdName = age;
//     }
// }

// const std1 = new MyClass("Jawan",21)

// console.log(std1)


// --------------------------------------------


    // EXAMPLE # 02 :

// class MyClass {
//     constructor (name, age, isActive){
//         this.stdName = name;
//         this.stdAge = age;
//         this.isActive = isActive;
//     }
// }

// const std1 = new MyClass("Jawan",21)

// console.log(std1)



// // --------------------------------------------




    // EXAMPLE # 03 :

// class MyClass {
//     constructor (name, age, isActive){
//         this.stdName = name;
//         this.stdAge = age;
//         this.isActive = isActive;
//     }
// }

// const std1 = new MyClass("Jawan",21,true)

// console.log(std1)


// ------------------------------------------

                                   // ================================
                                                // MAP :-
                                   // ================================

// EXAMPLE# 01 :

// const arr = [1, 2, 3, 4, 5, 6]
// const arr2 = arr.map((a) => {
//     //
// })

// console.log(arr2)

// ------------------------------------------

// EXAMPLE# 02 :

// const arr = [1, 2, 3, 4, 5, 6]
// const arr2 = arr.forEach((a) => {
//     //
// })

// console.log(arr2)


// ------------------------------------------

// EXAMPLE# 03 :

// const arr = [1, 2, 3, 4, 5, 6]
// const arr2 = arr.map((value, index, item) => {
//     console.log(value)
//     console.log(index)
//     console.log(item)
// });

// console.log(arr2)




// ------------------------


let laptop ={
    cpu: "19",
    ram:"16",
    brand:"HP",

    greet: function(){
        console.log("Hello World");
    }
}

laptop.greet()