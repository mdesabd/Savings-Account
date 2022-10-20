//Handle diposit button event--

// document.getElementById('diposit-button').addEventListener('click', function () {
//     //get usar email--
//     const dipositField = document.getElementById('diposit-input');
//     const dipositAmmount = dipositField.value
// console.log(dipositAmmount);
// // এবার কনসোলে গিয়ে  ইনপুট ডাটা লিখে বাটনে তিপ দিয়ে দেখ কনসোলে ডাটা আসে কিনা তাহলে ---ওকে//
// })
//****************************************************************** */


//get diposit value=======================
document.getElementById('diposit-button').addEventListener('click', function () {

    const dipositField = document.getElementById('diposit-input');
    const newdepositAmmount = dipositField.value
    console.log(newdepositAmmount);
    // এবার কনসোলে গিয়ে  ইনপুট ডাটা লিখে বাটনে press দিয়ে দেখ কনসোলে ডাটা আসে কিনা তাহলে ---ওকে//

    //deposit valu show korar jonno.......
    const depositTotal = document.getElementById('deposit-total');
    // console.log(depositTotal.value); //value hobe na karon innerText.
    const previousDepositAmount = depositTotal.innerText;
    const newDepositeTotal = parseFloat(previousDepositAmount) + parseFloat(newdepositAmmount);
    depositTotal.innerText = newDepositeTotal;
    // dipositAmmount hobe okhane joma hobe---





//update acount blance---












    //clear the deposite inputfield
    dipositField.value = '';

})












