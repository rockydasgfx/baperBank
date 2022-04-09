// select elemetn
const deposit = document.getElementById("deposit");
const withdrow = document.getElementById("withdrow");
const balance = document.getElementById("balance");
const dapositInput = document.getElementById("dapositInput");
const dapositBtn = document.getElementById("dapositBtn");
const withdrowInput = document.getElementById("withdrowInput");
const withdrowBtn = document.getElementById("withdrowBtn");

// deposit
dapositBtn.addEventListener("click", function () {
  //   add deposit
  const newDepositAmount = dapositInput.value;
  const previousDepositAmount = deposit.innerHTML;
  const newDepositTotal =
    parseFloat(newDepositAmount) + parseFloat(previousDepositAmount);
  deposit.innerHTML = newDepositTotal;

  //   deposit balance
  const previousBalance = balance.innerHTML;
  const updateBalance =
    parseFloat(newDepositAmount) + parseFloat(previousBalance);
  balance.innerHTML = updateBalance;
  //   clear input
  dapositInput.value = "";
});

// withdrow
withdrowBtn.addEventListener("click", function () {
  //  withdrow
  const previousWithdrow = withdrow.innerHTML;
  const newWithdrow = withdrowInput.value;
  const totalWithdrow = parseFloat(previousWithdrow) + parseFloat(newWithdrow);
  withdrow.innerHTML = totalWithdrow;

  //   minus balance
  const previousBalance = balance.innerHTML;
  const updateBalance = parseFloat(previousBalance) - parseFloat(newWithdrow);
  balance.innerHTML = updateBalance;

  //   clear input
  withdrowInput.value = "";
});
