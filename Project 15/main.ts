/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */
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
for(var i=0; i<guest.length; i++){
    console.log("Assalam o alaikum! " + guest[i] +" \nI would like to invite you to dinner at my place this Saturday at 7 pm. \n Thanks");
}

