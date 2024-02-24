var guest = ["Ali", "Ahmed", "Faiza", "maida", "mahnoor"];
//Step 1
var gNotMake = "Faiza";
console.log(gNotMake + " can’t make the dinner");
//step 2
var newguest = "Zainab";
guest[2] = newguest;
for (var i = 0; i < guest.length; i++) {
    console.log("Assalam o alaikum! " + guest[i] + " \nI would like to invite you to dinner at my place this Saturday at 7 pm. I will be cooking your favorite dish and would love for you to join me. \n Thanks");
}
