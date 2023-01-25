// let laptop = {
//     cpu: 'i9',
//     ram: 16,
//     brand: "HP",

//     greet: function(){
//         console.log('Hello World')
//     }
// }


// laptop.greet()


//  X =================================================== X



// let laptop = {
//     cpu: 'i9',
//     ram: 16,
//     brand: "HP",

//     getConfig: function(){
//         console.log(cpu)
//     }
// }


// laptop.getConfig()



// RESULT: we got an error . it says cpu is not define



//  X =================================================== X


// let laptop = {
//     cpu: 'i9',
//     ram: 16,
//     brand: "HP",

//     getConfig: function(){
//        let storage = 100
//        console.log(storage)
//     }
// }


// laptop.getConfig()

// RESULT : we got 100 .


//  X =================================================== X


// let laptop1 = {
//     cpu: 'i9',
//     ram: 16,
//     brand: "HP",

//     getConfig: function(){
//        console.log(laptop1.cpu)
//     }
// }


// let laptop2 = {
//     cpu: 'i7',
//     ram: 16,
//     brand: "HP",

//     getConfig: function(){
//        console.log(laptop2.cpu)
//     }
// }


// laptop2.getConfig()

//                                                  =========
//                                                      OR 
//                                                  =========


// QUESTION #;  WHAT IS "this" keyword ?
// ANSWER # ; "this" represents the current object if you want to access any property of an object it is always better to use "this" keyword .


// let laptop1 = {
//     cpu: 'i9',
//     ram: 16,
//     brand: "HP",

//     getConfig: function(){
//        console.log(this.cpu)
//     }
// }


// let laptop2 = {
//     cpu: 'i7',
//     ram: 16,
//     brand: "HP",

//     getConfig: function(){
//        console.log(this.cpu)
//     }
// }


// laptop1.getConfig()




//                          X =================================================== X
//                          X =================================================== X
//                          X =================================================== X
//                          X =================================================== X




//                                    WHY IT IS CALLED "this" ?


let laptop1 = {
        cpu: 'i9',
        ram: 16,
        brand: "HP",
    
        getConfig: function(){
           console.log(this.cpu)
        }
    }
    
    
    let laptop2 = {
        cpu: 'i7',
        ram: 16,
        brand: "Apple",
    
        getConfig: function(){
           console.log(this.cpu)
        }
    }
    
    
    laptop1.getConfig()
    
