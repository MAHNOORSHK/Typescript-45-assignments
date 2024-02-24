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
while (guest.length > 2) {
    var removeGuest = guest.pop();
    console.log("Sorry Dear " + removeGuest + " you are not invited for dinner party.");
}
for (var i = 0; i < guest.length; i++) {
    console.log("Assalam o alaikum! " + guest[i] + " \nI would like to invite you to dinner at my place this Saturday at 7 pm. \n Thanks\n");
}
guest.splice(0, 2);
console.log(guest);
