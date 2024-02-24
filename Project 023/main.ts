/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */

var Gender = "Female";

console.log("Is Gender == 'Female? I predict True.");
console.log(Gender == "Female");

console.log("Is Gender == 'Male? I predict False.");
console.log(Gender == "male");

console.log("Is Gender != 'Female? I predict False.");
console.log(Gender != "Female");

console.log("Is Gender != 'male? I predict True.");
console.log(Gender != "male");

console.log("Is Gender == 'FEMALE? I predict False.");
console.log(Gender == 'FEMALE');

var age = 23;
console.log("Is age == 23? I predict True");
console.log(age == 23);

console.log("Is age != 23? I Predict False.");
console.log(age != 23);

console.log("Is age > 12? I Predict True.");
console.log(age > 12);

console.log("Is age < 23? I Predict False.");
console.log(age < 23);

console.log("Is age <= 23? I Predict True.");
console.log(age <= 23);

console.log("Is age >= 12? I Predict False.");
console.log(age >= 12);

console.log("Is age == 23 and Gender == 'Female'? I predict True.");
console.log(age == 23 && Gender == 'Female');

console.log("Is age != 23 and Gender == 'Female'? I predict False.");
console.log(age != 23 && Gender == 'Female');

console.log("Is age == 23 and Gender != 'Female'? I predict True.");
console.log(age == 23 || Gender != 'Female');

console.log("Is age != 23 and Gender != 'Female'? I predict False.");
console.log(age != 23 || Gender != 'Female');

var num = [1,2,3,4,5];
console.log("Is 1 in num? I predict True.");
console.log(1 in num);

console.log("Is 6 in num? I predict False.");
console.log(6 in num);
