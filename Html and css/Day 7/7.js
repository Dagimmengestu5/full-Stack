const users = [
  {
    name: "James Williams",
    pin: "1234",
    accountNumber: "10000001",
    balance: 1500,
    transcations: []
  },
  {
    name: "Sarah Adams",
    pin: "0001",
    accountNumber: "10000002",
    balance: 3500,
    transcations: []
  },
  {
    name: "Michael Genanew",
    pin: "1021",
    accountNumber: "10000003",
    balance: 5000,
    transcations: []
  }
];

function runBankProgram() {
  console.log("Welcome to our Bank");

  const authenticatedUser = authenticateUser();

  if (authenticatedUser) {
    console.log(`Welcome, ${authenticatedUser.name}`);
    showMenu(authenticatedUser); // ✅ pass user here
  } else {
    console.log("Authentication failed, exiting the application");
  }
}

function authenticateUser() {
  let attempts = 3;

  while (attempts > 0) {
    const enteredPin = prompt("Enter your Pin (or type 'exit' to quit)");

    if (enteredPin?.toLowerCase() === "exit") {
      return null;
    }

    const user = users.find((bankUser) => bankUser.pin === enteredPin);
    if (user) {
      return user;
    } else {
      attempts = attempts - 1;
      console.log(`Invalid pin. ${attempts} attempts remaining.`);
    }
  }

  return null;
}

function showMenu(user) {
  let continueBanking = true;

  while (continueBanking) {
    console.log("\nPlease select an option");
    console.log("1. Check Balance");
    console.log("2. Withdraw Money");
    console.log("3. Deposit Balance");
    console.log("4. Transfer Money");
    console.log("5. View Transactions");
    console.log("6. Change Pin");
    console.log("7. Exit");

    const choice = prompt("Enter your choice (1-7)");

    switch (choice) {
      case "1":
        console.log("Checking balance...");
        checkBalance(user);
        break;
      case "2":
        console.log("Withdrawing money...");
        withdrawMoney(user);
        break;
      case "3":
        console.log("Deposit selected");
        break;
      case "4":
        console.log("Transfer selected");
        break;
      case "5":
        console.log("Viewing transactions...");
        break;
      case "6":
        console.log("Changing PIN...");
        break;
      case "7":
        console.log("Thank you for banking with us. Logging you out.");
        continueBanking = false;
        break;
      default:
        console.log("Please choose a valid input.");
    }
  }
}

function checkBalance(user) {
  console.log(`Your current balance is: $${user.balance}`);
}

function withdrawMoney(user) {
  const amount = parseFloat(prompt("Enter amount to withdraw:"));
  if (isNaN(amount) || amount <= 0) {
    console.log("Invalid amount.");
    return;
  }
  if (amount > user.balance) {
    console.log("Insufficient funds.");
    return;
  }

  user.balance -= amount;
  console.log(
    `Withdrawal successful. Remaining Balance: $${user.balance.toFixed(2)}`
  );
}

// ✅ Start the program
runBankProgram();
