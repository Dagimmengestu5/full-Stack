// // 1.bank -system
// // -withdraw money
// // -deposit money
// // -transfer money
// // check balances

// // checks for the user pin


// const users = [
// {
//     name:"James Williams",
//     pin:"1234",
//     accountNumber:"10000001",
//     balance:1500,
//     transcations:[]
// },
// {
//     name:"Sarah Adams",
//     pin:"0001",
//     accountNumber:"10000002",
//     balance:3500,
//     transcations:[]
// },
// {
//     name:"Michael Genanew",
//     pin:"1021",
//     accountNumber:"10000003",
//     balance:5000,
//     transcations:[]
// }
// ]


// // console.log(users[1].name,users[1].pin)



// function runBankProgram(){
//     console.log("Welcome to our Bank")

//     // authentication function
//     const authenticatedUser = authenticateUser()
//     // console.log(authenticatedUser)

//     if(authenticatedUser){
//         console.log(`Welcome,${authenticatedUser.name}`)
//         // showMenu(authenticateUser)
//         showMenu(authenticatedUser);
//     }else{
//         console.log("authentication failed, exiting the application")
//     }

// }

// runBankProgram()


// function authenticateUser(){
//     let attempts = 3;

//     while(attempts > 0){
//         // prompt is an inbuilt function used to get input from our users
//         const enteredPin = prompt("Enter your Pin(or type 'exit' to quit)")
    
//         if(enteredPin?.toLocaleLowerCase()==="exit"){
//             return null
//         }

//         // we need to find the user

//         const user = users.find((bankUser)=>{
//          return   bankUser.pin === enteredPin 
//         })
// // null,undefined,0, flase ==== false
//         if(user){
//             return user
//         }else{
//             attempts = attempts -1;
//             console.log(`Invalid pin ${attempts} attempts remaing`)
//         }


//     }

//     return null
// }


// function showMenu(user){
//     let continueBanking = true;
//     while(continueBanking){
//     console.log("Please select an option")
//     console.log("1. check Balance")
//     console.log("2. withdraw Money")
//     console.log("3. Deposit Balance")
//     console.log("4. Transfer money to another user")
//     console.log("5. view transcations")
//     console.log("6 .change Pin")
//     console.log("7 .Exit")


//     const choice = prompt("Enter your choice (1-7)")

//     switch (choice){
//         case "1":
//             // console.log("one is chosen")
//             // checkBalance function(User);
//             checkBalance(user)
//             break;
//         case "2":
//             withdrawMoney(user)
//             // withdraw function(user)
//             break;
//         case "3":
//             // depositing balance
//             depositMoney(user)
//             break;
//         case "4":
//             // console.log("4 is chosen")
//             // transferring money to another user
//             transferMoney(user)
//             break;
//         case "5":
//             viewTransaction(user)
//             break;
//         case "6":
//             console.log("6 is chosen")
//             break;
//         case "7":
//             console.log("thank you for banking with us , loggin you out")
//             continueBanking = false;
//             break
//         default:
//             console.log("please choose a valid input")

//     }
//     }
// }


// function checkBalance(user){
//     console.log(`Your current Balance is : ${user.balance}`)
// }


// function withdrawMoney(user){
//     // amount
//     const amount = parseFloat(prompt("enter amout to withdraw"))
//     // prompt converts every input to a  string
//     // parseInt(),parseFloat()
//     // parseInt("100") = 100
//     // && ||
//     // 100 - two hunder two  error  = naN

//     if(isNaN(amount) ||  amount <=0){
//         console.log("Invalid amount. please enter a positive number.")
//         return
//     }

//     if(amount > user.balance){
//         console.log("insufficent funds")
//         return
//     }
//     // todo:this transaction must be saved
    
//     user.balance = user.balance - amount;

//     recordTransaction(user,"Withdrawals",amount)


//     console.log(`withdrawal successful. remaining Balance : $ ${user.balance.toFixed(2)}`)

// }


// function depositMoney(user){
//    const amount = parseFloat(prompt("enter the amount to deposit: "))

//    if(isNaN(amount) ||  amount <=0){
//     console.log("invalid amount, please enter a positive number")
//     return
//    }

//    user.balance = user.balance + amount;

//  recordTransaction(user,"Deposits",amount)
// //    save transaction
// console.log(`Deposit succesful. New Balance:${user.balance.toFixed(2)}`)


// }

// function transferMoney(sender){
//     // 1.we need data of the sender
//     // 2.prompt the user to provide a valid user account
//     // 3.fetch the user with the provided account number 
//     const recipientAccount  = prompt("enter the recipients 8-digit account number:")
//     const recipient  = users.find(
//         (user)=>{
//             return user.accountNumber === recipientAccount && user.accountNumber !== sender.accountNumber
//         }
//     )
//     // guard clause
//     if(!recipient){
//             console.log("reciepient not found or cannot transfer money to yourself")
//             return
//     }
//     const amount = parseFloat(prompt(`Enter amount to transfer to ${recipient.name} , Account No: ${recipient.accountNumber} :`))

//     if(isNaN(amount) || amount <=0){
//         console.log("Invalid amount. Please enter a valid amount")
//         return 
//     }
//     // we perform the transaction
//     sender.balance = sender.balance - amount;
//     recipient.balance = recipient.balance + amount;
//     // 1.we ask the user to enter amount to be transfered
//     // 2.we deduct amount from sender and credit // add that amount to the recipeint
//     // watch out for the edge cases

//      recordTransaction(sender,"Transfers",amount)
//     console.log(`Transfer successful. Your balance has been debited with - ${amount}`)

// }

// // 1. we need a function to save all of our transactions


// // transactions:[{
// //  date:, type:"deposit"||"credit",amount:500
// // }]

// function viewTransaction(user){
//     if (user.transcations.length === 0){
//         console.log("No transactions found");
//         return
//     }

//     console.log("Filter transactions By: ")
//     console.log("1. View All")
//     console.log("2. View Withdrawals")
//     console.log("3. View Deposits")
//     console.log("4. View Transfers")
//     console.log("5. Go Back to the main Menu")


//     const filterChoice = prompt("Enter your choice(1-5)");

//     let filteredTransaction = [];

//     switch(filterChoice){
//         case "1":
//             filteredTransaction = user.transcations;
            
//             break;
//         case "2":
//             filteredTransaction = user.transcations.filter((transaction)=>{
//               return  transaction.typeOfTransction.includes("Withdrawals")
//             })
//             break
//         case "3":
//             filteredTransaction = user.transcations.filter((transaction)=>{
//               return   transaction.typeOfTransction.includes("Deposits")
//             })
//             console.log(filteredTransaction)
//             break
//         case "4":
//             filteredTransaction = user.transcations.filter((transaction)=>{
//               return   transaction.typeOfTransction.includes("Transfers")
//             })
//             break
//         case "5":
//             return
//         default:
//             console.log("Invalid choice")
//             return         
//     }

//     if(filteredTransaction.length === 0){
//         console.log("No transactions found")
//         return
//     }

//     filteredTransaction.forEach((transaction,index)=>{
//         console.log(`${index + 1} ${transaction.date} - ${transaction.typeOfTransction} - $ ${transaction.amount.toFixed(2)}`)
//     })

// }









// function recordTransaction(user,type,amount){
//     user.transcations.push({
//         date:new Date().toLocaleString(),
//         typeOfTransction:type,
//         amount:amount
//     })
// }
























// // // Objects in Javascript

// // // objects in javascript

// // const person = {
// //     firstName:"Binyamin",
// //     lastName:"Tamirat",
// //     age:12,
// //     dob:"January 2010",
// //     schoolsAttended:["Interlakes","harvard","yale"],

// //     // method
// //     greetPeople:function(name){
// //       console.log ( "hello people I am binyamin",name)
// //     }
// // }

// // const firstName = "john doe"
// // const person1 = ["binyamin","tamirat",12,"January 2010"]

// // console.log(person.firstName,person.lastName)
// // console.log(person.age)
// // // Bank system

// // console.log(person.greetPeople("abebe"))


const newDiv = document.createElement("div")
const parent = document.querySelector(".parent-container")
newDiv.textContent = "hey their am the new div"
parent.appendChild(newDiv)
const newButton = documentElement("h1")
newButton.textContent = "clock me"
parent.appendChild(newButton)








// // Banking system
// // 1.withdraw money
// // 2.transfer money
// // 3.check our balances
// // 4 pin change