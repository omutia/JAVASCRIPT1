function payTax(grossSalary,taxRate)
{
//assign exm the final result from the mathematical equation
    let payValue = grossSalary * taxRate

//return exm value
    return payValue
}

//declare a function called exam that will pass 'a' as argument

function nssfAmount(grossSalary,nssfRate)
{

let nssfValue = grossSalary * nssfRate

//return fexam value
return nssfValue

}

function grossSalary(NetSalary,nssfValue,payValue)
{

let grossSalaryValue = NetSalary+ nssfValue + payValue

//return fexam value
return grossSalaryValue

}

//declare a function called final

function netSalary()
{

//assign fexam the final result from adding value for function exam and crsmark.

let netSalaryValue =grossSalary(1180000,600000,220000)- (payTax(2000000,0.3)+ nssfAmount(2000000,0.11))
console.log(netSalaryValue)

}

//now invoke function final

netSalary()