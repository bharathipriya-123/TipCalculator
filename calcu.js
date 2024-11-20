

  const calculate=document.getElementById('calculate');

  calculate.addEventListener('click', () => {
    let totalBill = parseFloat(document.getElementById('totalbill').value);
    let tipPercentage = parseFloat(document.getElementById('tippercentage').value);
    let split = parseInt(document.getElementById('split').value);

    
    if (isNaN(totalBill) || isNaN(tipPercentage) || isNaN(split) )
    {//|| totalBill <= 0 || split <= 0) {//
        alert('Please enter valid values for all fields.');
        return;
    }

    
    let totalTip = totalBill * tipPercentage;
    let totalAmount = totalBill + totalTip;
    let perPerson = totalAmount / split;

    
    document.getElementById('tip').innerHTML = perPerson.toFixed(2);
});