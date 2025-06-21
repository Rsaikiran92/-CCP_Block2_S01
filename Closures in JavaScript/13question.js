function createBankAccount(balance) {
  let account = balance;

  return {
    deposit:function(amount){
      account += amount;
      return account;
    },
    withdraw:function(amount){
        account-=amount;
        return account
    },
    getBalance: function () {
      return account;
    },
  };
}

const account = createBankAccount(100);

console.log(account.deposit(50)); // Output: 150

console.log(account.withdraw(30)); // Output: 120

console.log(account.getBalance()); // Output: 120