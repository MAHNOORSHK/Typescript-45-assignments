var guest = ["Ali", "Ahmed", "Faiza", "maida", "mahnoor"];
//Step 1
var gNotMake = "Faiza";
console.log(gNotMake + " can’t make the dinner");
//step 2
var newguest = "Zainab";
guest[2] = newguest;
for (var i = 0; i < guest.length; i++) {
    console.log("Assalam o alaikum! " + guest[i] + " \nI would like to invite you to dinner at my place this Saturday at 7 pm. \n Thanks");
}
//Step 1 Q16 Add mew members
guest.unshift("Dileep", "Ameet", "Saajan");
for (var i = 0; i < guest.length; i++) {
    console.log("Assalam o alaikum! " + guest[i] + " \nI would like to invite you to dinner at my place this Saturday at 7 pm. \n Thanks\n");
}
