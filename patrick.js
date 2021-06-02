

//Declare a function called test that will take two test results as arguments

function tests(test1,test2)
{
//Create a variable greater and assign it output from the condition.

let greater = test2>test1?test1:test2

//Return the out put assigned to greater
return greater

}

//Declare a function called test that will pass cswork as the argument
 function coursework(cswork)
 {
 
 //Create a variable coursework and assign it the output of addition of cswork and return value of function tests
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)
 // Log coursework into the console
 
return coursework

 //Return output that is assigned to the coursework

 }

//Declare a function called avg that will pass 'a' as the arguement
function avg(a)
{

//Assign  avg the final results from dividing the return value for function coursework with 'a'
let avg =coursework(90)/a

//.
return avg

}

//Declare a function calledcrsmark that will pass 'a' as the arguement.
function crsmark(a)
{
//Assign exm the final result from the mathematical equation
let exm = avg(2)*(a/100)

//Return exm value
 return exm
}

//Declare a function called exam that will pass 'a' as argument

function exam(a)
{

let fexam = (60/100)*a

//Return fexam value
return fexam

}

//Declare a function called final

function final()
{

//Assign fexam the final result from adding value for function exam and crsmark.

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//Now invoke function final

final()


/**
 the file could not run because of an error
 the error was fixed by completing the bracket and it is finally running.

**/