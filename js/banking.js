            //handle deposite button event
document.getElementById('deposit-button').addEventListener('click', function(){

                // get the amount deposited
        const depositInput = document.getElementById('deposit-input');

        const newDepositAmountText = depositInput.value;
        const newDepositAmount = parseFloat(newDepositAmountText);
        

        //now adding deposit amout to the current deposite
                //update deposit total
        const depositTotal = document.getElementById('deposit-total');

        const previousDepositText = depositTotal.innerText;
        const previousDepositAmount = parseFloat(previousDepositText);

        const newDepositTotal = previousDepositAmount + newDepositAmount;

        depositTotal.innerText = newDepositTotal;

                //update account balance 
        const balanceTotal = document.getElementById('balance-total');

        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);

        const newBalanceTotal = previousBalanceTotal + newDepositAmount;

        balanceTotal.innerText = newBalanceTotal;


            //clear the deposite input field
        depositInput.value = '';
});

            //handlewithdraw avent handler
document.getElementById('withdraw-button').addEventListener('click', function(){

    const withdrawInput = document.getElementById('withdraw-input');

    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    


            //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');

    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;


        //update balance
    const balanceTotal = document.getElementById('balance-total');

    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    newWithdrawAmount.innerText = newBalanceTotal;


//clear the withdraw input field
withdrawInput.value = '';

})



