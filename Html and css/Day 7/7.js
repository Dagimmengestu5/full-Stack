// let firstname = "dagim"
// let lastname = 'mengistu'
// let age = 21
// let car;
// let animal;

// car = "tesla"
// animal = "dog"

// console.log(firstname, lastname)
// console.log("abebe")
// console.log(age,car,animal)
// console.log(`dagi is the balebet of ${car} then he have the ${animal}`)

// const path = require("node:path")
// console.log(__dirname)

// let sum = 0;
// for (let i = 0; i <= 100; i++ ) {
//     sum = sum + i
// }
// console.log(`the sum of the furst 100 natural numcer is ${sum}`)

//Declare Employee Data
const employeeName = "jane Doe";
//try negative salary
const salary = -1000;
const department = "Engineering";
const yearsOfService = 0;
const performanceRating = "poor";

/* then  Validate Input and Initialize Variables that means
We’ll validate salary and performance, and define initial bonus variables.*/
let isEligible = true;
let bonusPercent = 0;
let feedback = "";

//know checks Eligibility and Input Validation
if (salary < 0) {
    isEligible = false;
    feedback = "Invalid 💲 salary entered ❌";
} else if (yearsOfService < 1) {
    isEligible = false;
    feedback = "Not eligible due to less than 1 year of service.";
} else if (performanceRating === "poor") {
    isEligible = false;
    feedback = "Not eligible due to poor performance.";
}
// then Calculate Bonus % Based on Rules if the employee is eligible:
if (isEligible) {
    bonusPercent += 5; //when it is eligible add base bonus
    //additional bonuses
    if (yearsOfService > 5) {
        bonusPercent += 2;
    }

    if (performanceRating.toLowerCase() === "excellent") {
        bonusPercent += 3;
    }
    if (department.toLowerCase() === "sales") {
        bonusPercent += 1;
    }
    if (bonusPercent > 15) {
        bonusPercent = 15;
    }

    feedback = "good work,keep it up! 👏";
}
/*categorize the bonus size based on bonus percent*/
let BonusSizeCategory = "";

switch (true) {
    case bonusPercent <= 5:
        BonusSizeCategory = "Small 🥉";
        break;
    case bonusPercent > 5 && bonusPercent <= 10:
        BonusSizeCategory = "Medium 🥈";
        break;
    case bonusPercent > 10 && bonusPercent <= 15:
        BonusSizeCategory = "Large 🥇";
}
/*calculate bonusAmount and format salary*/
const formattedSalary = salary.toFixed(2);
let bonusAmount;
if (isEligible) {
    bonusAmount = salary * (bonusPercent / 100);
} else {
    bonusAmount = 0;
}
const formattedBonus = bonusAmount.toFixed(2);
// Output the Summary
console.log("📄 EMPLOYEE BONUS RESULT");
console.log("                            ");
console.log(`   👤 Employee:${employeeName}`);
console.log(`   🏢 Department:${department}`);
console.log(`   📅 Years of Service: ${yearsOfService}  `);
console.log(`   📈 Performance Rating:${performanceRating}  `);
console.log(`   💵 Base Salary:${formattedSalary} `);
console.log(`   🎁 Bonus Eligibility:${isEligible ? "Yes 👍" : "No 👎"}  `);
console.log(
    `   💰 Total Bonus:$${formattedBonus}( ${bonusPercent.toFixed(
    2
  )} % of salary)  `
);
console.log(`   🏷Bonus Size:${BonusSizeCategory}  `);
console.log(`   🗣 Feedback:${feedback} `);