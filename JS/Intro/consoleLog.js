/*
console.log() is a function in JavaScript that is used to print messages to the console. 
It is commonly used for debugging purposes, allowing developers to see the output of their code and track the flow of execution.
calculate gross salary
*/
const salaryGross = 50000; // Basic salary
console.log("Gross Salary is:", salaryGross);
//tax  calculations
const paye=salaryGross*0.16
console.log("For gross salary of", salaryGross, "Paye is", paye);
const nhif=2500
console.log("Nhif deduction is", nhif);
const sha=2500
console.log("SHA is", sha);
const totalDeductions=paye+nhif+sha
console.log("Total deductions are", totalDeductions);
const netSalary=salaryGross-totalDeductions
console.log("Net salary is", netSalary);