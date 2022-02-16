            //handle deposite button event
document.getElementById('deposit-button').addEventListener('click', function(){

                // get the amount deposited
        const depositInput = document.getElementById('deposit-input');

        const newDepositAmountText = depositInput.value;
        const newDepositAmount = parseFloat(newDepositAmountText);
        

            //now adding deposit amout to the current deposite
        const depositTotal = document.getElementById('deposit-total');

        const previousDepositText = depositTotal.innerText;
        const previousDepositAmount = parseFloat(previousDepositText);

        const newDepositTotal = previousDepositAmount + newDepositAmount;

        depositTotal.innerText = newDepositTotal;


            //clear the deposite input field
        depositInput.value = '';
})