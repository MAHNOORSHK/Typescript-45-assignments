/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */
var transport_list = ["motorcycle", "car", "van", "bus", "cycle"];
var transport_comp = ["Honda", "Toyota", "Ford", "Yutong", "Bianchi"];
for(var i=0; i<5; i++){
    console.log("I like to go "+ transport_comp[i] + " " + transport_list[i] + " riding.");
}