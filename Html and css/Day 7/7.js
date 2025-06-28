// // Banking system 

// // withdrow
// //deposit
// //transfer
// //checks the user pin




// const users = [{
//     name: "dagim mengestu",
//     pin: "1234",
//     accountNumber: "1000001",
//     balance: 1500,
//     transactions:[]
// },
// {
//     name: "betre mengestu",
//     pin: "0001",
//     accountNumber: "1000002",
//     balance: 1000,
//     transactions:[]
// },
// {
//     name: "dejen sentayehu",
//     pin: "0002",
//     accountNumber: "1000002",
//     balance: 2500,
//     transactions:[]
// },
        
// ]

// function runBankProgram(){
//     console.log("Welcome to our bank")

//     //authentication
//     const authenticateUser = authenticateUser()
//     console.log(authenticateUser)
//     if (authenticateUser){
//         console.log(`Welcome, ${authenticateUser.user}`)
//     }else{
//         console.log("authentication faild,")
//     }
// }



// function authenticateUser (){
//     let attempts = 3;

//     while (attempts > 0 ){
//         //prompt is an inbuit function used to get input
//         const enterdPin = prompt("Enter your pin(or type 'exit to quit)")
//         if (enterdPin?.toLocaleLowerCase() === "exit"){
//             return null
//         }
//         //we need to find the user 
//         const user = users.find ((bankUser)=> {
//             return bankUser.pin === enterdPin 
//         })
//         //null, undifined , 0, false ==== false
//         if (user){
//             return user
//         }else{
//             attempts = attempts -1;
//             console.log(`Invalid pin ${attempts} attempts are remaining `)
//         }
//     }
//     return null
// }
// runBankProgram()

const users = [
    {
        name: "dagim mengestu",
        pin: "1234",
        accountNumber: "1000001",
        balance: 1500,
        transactions:[]
    },
    {
        name: "betre mengestu",
        pin: "0001",
        accountNumber: "1000002",
        balance: 1000,
        transactions:[]
    },
    {
        name: "dejen sentayehu",
        pin: "0002",
        accountNumber: "1000003",
        balance: 2500,
        transactions:[]
    },
];

function runBankProgram() {
    console.log("Welcome to our bank");

    const user = authenticateUser();
    if (user) {
        console.log(`Welcome, ${user.name}`);
    } else {
        console.log("Authentication failed.");
    }
}

function authenticateUser() {
    let attempts = 3;

    while (attempts > 0) {
        const enteredPin = prompt("Enter your pin (or type 'exit' to quit)");

        if (enteredPin?.toLowerCase() === "exit") {
            return null;
        }

        const user = users.find(bankUser => bankUser.pin === enteredPin);
        if (user) {
            return user;
        } else {
            attempts--;
            console.log(`Invalid pin. ${attempts} attempt(s) remaining.`);
        }
    }

    return null;
}

runBankProgram();
