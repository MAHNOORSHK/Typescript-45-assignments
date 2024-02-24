/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */
var guest = ["Ali", "Ahmed", "Faiza", "maida", "mahnoor"];
// for(var i=0; i<5; i++){
//     console.log("Assalam o alaikum! " + guest[i] +" I would like to invite you to dinner at my place this Saturday at 7 pm. ");
// }
//Step 1
var gNotMake = "Faiza";
console.log(gNotMake + " can’t make the dinner");

//step 2
var newguest = "Zainab";
guest[2] = newguest;
// for(var i=0; i<guest.length; i++){
//     console.log("Assalam o alaikum! " + guest[i] +" \nI would like to invite you to dinner at my place this Saturday at 7 pm. \n Thanks");
// }

//Step 1 Q16 Add mew members
guest.unshift("Dileep", "Ameet", "Saajan");
for(var i = 0; i<guest.length; i++){
    console.log("Assalam o alaikum! " + guest[i] +" \nI would like to invite you to dinner at my place this Saturday at 7 pm. \n Thanks\n");
}

