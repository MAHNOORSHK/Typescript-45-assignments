/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */
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
// for(var i = 0; i<guest.length; i++){
//     console.log("Assalam o alaikum! " + guest[i] +" \nI would like to invite you to dinner at my place this Saturday at 7 pm. \n Thanks\n");
// }

console.log("Oppsss!!! we can not arrange big dinner table, we have space for only two guests.");

while(guest.length>2){
    var removeGuest = guest.pop();
    console.log("Sorry Dear " + removeGuest + " you are not invited for dinner party.");
}
 for(var i = 0; i<guest.length; i++){
     console.log("Assalam o alaikum! " + guest[i] +" \nI would like to invite you to dinner at my place this Saturday at 7 pm. \n Thanks\n");
}


