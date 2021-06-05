/*
a function to calculate the payeTax It takes two parameters
gross salary, PayTax.
It multiplies the gross salary and Paytax
*/

  function calculatePaye(grossSalary,payTax)
{
    let netPay = grossSalary * payTax
    return netPay
    
}

//we call the function by giving it the arguments and console it's result

console.log(calculatePaye(2000000,0.3))

/* 
a function to calculate the net salary. It takes three parameters
gross salary, NssfRate, PayTax.
It subtracts the total of NssfRate and Paytax from gross salary.
*/

function calculateNssf(grossSalary,nssfRate)
{
    let NetPay = grossSalary * nssfRate
    return NetPay

console.log(calculatePaye(2000000,0.11))

}

/* 
a function to calculate the net salary. It takes three parameters
gross salary, NssfRate, PayTax.
It subtracts the total of NssfRate and Paytax from gross salary.
*/

function netSalary(grossSalary,nssfRate,payTax)

{
    let netPay = grossSalary -(nssfRate + payTax)
    let NetPay = grossSalary * payTax

    return netPay
}
console.log(netSalary(2000000,220000,600000))

function netSalary(grossSalary,nssfRate,payTax)
{
    let payValue = grossSalary * payTax
    let nssfValue = grossSalary * nssfRate
    let netPay = grossSalary -(payValue + nssfValue)

    return netPay
}
console.log(netSalary(2000000,0.11,0.3))



//now invoke function final

netSalary()
