const { print, stringInput, intInput } = require("./consoleIO");

const REGISTER_CODE = 0;
const LOGIN_CODE = 1;
const PAY_CODE = 0;
let loggedInUser = "";
const users = [];
let exit = false;
const TRANSACTIONS_CODE = 1;
const STATS_CODE = 2;
const LOGOUT_CODE = 3;

const greetingMenu = `Welcome to \" BSMCH PAY \"\n\
To login enter ${LOGIN_CODE}\n\
To create an account enter ${REGISTER_CODE}\n\
To exit click anything else`

const optionsMenu = "\nOptions:" + 
PAY_CODE + " - To pay" + 
TRANSACTIONS_CODE+"  - To see transactions." +
STATS_CODE+ "- To see stats." + 
LOGOUT_CODE + " - To log out."

const validateUserDetails = (user) => {
    return user.age >= 18 && !users.some(check => check.name == user.name && check.phone == user.phone) && user.pin > 999 && user.pin < 10000
}

function handleRegister() {
  const user = {};

  print("Enter username");
  user.name = stringInput();
  print("Enter password");
  user.password = stringInput();
  print("Enter phone");
  user.phone = stringInput();
  print("Enter age");
  user.age = intInput();
  print("Enter PIN");
  user.pin = intInput();

  if(user.age >= 22) {
    user.frame = 2000;
  } else {
    user.frame = 1000;
  }

  user.transactions = []

  if (validateUserDetails(user)) {
    users.push(user);
    loggedInUser = user;
  } else {
    print("Invalid details");
  }
};

const handlePay = () => {
  print("How much do you want to pay?");
  let amount = intInput()
  let sum = loggedInUser.transactions.filter((trans) => trans.kind === 'out').reduce((all, curr) => all + curr.amount, 0)

  if(sum + amount > loggedInUser.frame){
    print("Not enough credit frame");
    return
  }

  print("Phone number to pay to: ");
  let phone = stringInput();

  if (users.every(check => check.phone !== phone) || loggedInUser.phone === phone) {
    print("Phone number does not exists or it\"s your number. Please try again:");
    return
  }

  print("Enter PIN");
  let pin = intInput();

  if (loggedInUser.pin !== pin) {
    print("Incorrect pin")
    return
  }

  let transToAdd = {kind: "out", to: phone, amount: amount};
  loggedInUser.transactions.push(transToAdd);
  transToAdd = {kind: "in", from: loggedInUser.phone, amount: amount}
  users.find((currUser) => currUser.phone === phone)
    .transactions.push(transToAdd);
};

const printTransactions = () => {
  print("All transactions:");

  loggedInUser.transactions.forEach((transaction) => {
    print(transaction);
  });
};

function calcStats(transactions) {
  let sum = transactions.reduce((sum, curr) => sum + curr.amount, 0)
  
  if(sum === 0) {avg = 0;} 
  else {avg = sum / transactions.length;}

  return [ transactions.length, sum, avg ];
};

 
const printStats = () => {
  let [ amountOfTransactionsOut, sumOfTransactionsOut, avgOfTransactionsOut ] = calcStats(loggedInUser.transactions.filter((transaction) => transaction.kind === "out"));
  let [ amountOfTransactionsIn, sumOfTransactionsIn, avgOfTransactionsIn ] = calcStats(loggedInUser.transactions.filter((transaction) => transaction.kind === "in"));

  print("OUT:");
  print("Total payments amount: "+ amountOfTransactionsOut);
  print("Sum of payments:" + sumOfTransactionsOut);
  print("Avg of payments: " + avgOfTransactionsOut);

  print("IN:");
  print("Total payments amount: " + amountOfTransactionsIn);
  print("Sum of payments:" + sumOfTransactionsIn);
  print("Avg of payments: " + avgOfTransactionsIn);
};

const printOptions = () => {

  print(optionsMenu);
  const choice = intInput();

  switch (choice) {
    case PAY_CODE: {
      handlePay();
      break;
    }
    case TRANSACTIONS_CODE: {
      printTransactions();
      break;
    }
    case STATS_CODE: {
      printStats();
      break;
    }
    case LOGOUT_CODE: {
      loggedInUser = "";
      print("Goodbye!");
      break;
    }
    default: {
      print("Invalid option.");
      break;
    }
  }
};

const handleLogin = () => {
  print("Enter username");
  let name = stringInput();
  print("Enter password");
  let password = stringInput();

  let user = users.find((currUser) => currUser.name === name && currUser.password === password);

  if(user === 'undefined') {
    print("Incorrect username or password");
  }
  else{
    loggedInUser = user;
  }
};

const printGreetingMenu = () => {
  print(greetingMenu);
  const userChoice = intInput();

  if (userChoice === REGISTER_CODE) {
    handleRegister();
  } else if (userChoice === LOGIN_CODE) {
    handleLogin();
  } else {
    exit = true;
    print("Goodbye :)");
  }
};

while (!exit) {
  printGreetingMenu();

  while (loggedInUser !== "") {
    printOptions();
  }
}

