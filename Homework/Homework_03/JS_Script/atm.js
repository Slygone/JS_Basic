function atm(cashInBank,userCashRequested){
    if(cashInBank >= userCashRequested){
        cashInBank -= userCashRequested;
        console.log(`You have withdrawn ${userCashRequested}$.`);
        console.log(`You have ${cashInBank}$ left in your account.`);
    }else {
        console.log("Not enough money!");
    }
}
atm(12000,parseInt(prompt("Please enter how much you would like to withdraw from your account: ")));