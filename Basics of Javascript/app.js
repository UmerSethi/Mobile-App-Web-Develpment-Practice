
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



// OR (Direct Method for single statement)


// const sum = (a,b) => a + b;
// console.log(sum(2,5))