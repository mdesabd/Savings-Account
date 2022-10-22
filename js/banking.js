//Handle diposit button event--

// document.getElementById('diposit-button').addEventListener('click', function () {
//     //get usar email--
//     const dipositField = document.getElementById('diposit-input');
//     const dipositAmmount = dipositField.value
// console.log(dipositAmmount);
// // এবার কনসোলে গিয়ে  ইনপুট ডাটা লিখে বাটনে তিপ দিয়ে দেখ কনসোলে ডাটা আসে কিনা তাহলে ---ওকে//
// })
//****************************************************************** */
//get diposit value=============================================================
document.getElementById('diposit-button').addEventListener('click', function () {

    const dipositField = document.getElementById('diposit-input');
    const newdepositAmmount = dipositField.value;
    // console.log(newdepositAmmount);

    // update deposite total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositeTotal = parseFloat(previousDepositAmount) + parseFloat(newdepositAmmount);
    depositTotal.innerText = newDepositeTotal;

// **********************************************************************************


    //update acount blance---
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(newdepositAmmount) + parseFloat(previousBalanceTotal);
    balanceTotal.innerText = newBalanceTotal;

    //clear the deposite inputfield
    dipositField.value = '';

})



document.getElementById('withdraw-button').addEventListener('click', function () {

    //Update update withdraw Field and button---
    const withdrawField = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawField.value;
    console.log(newWithdrawAmount);


    //Update withdraw and balance ----

    const WithdrawTotal = document.getElementById('withdray-total');
    const previousWithdrawAmount = WithdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(previousWithdrawAmount) + parseFloat(newWithdrawAmount);
    WithdrawTotal.innerText = withdrawTotalAmount;

    //clear the withdray inputfield
    withdrawField.value = '';



    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);
    balanceTotal.innerText = newBalanceTotal;

})