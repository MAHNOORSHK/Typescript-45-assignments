/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified. */
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
var magicians = ['Ejaz Mugha', 'M.Yaseen', 'Penn Jillette', 'Usman'];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the Great';
    }
}
var magicians2 = ['Harry Houdini', 'Roger Lapin', 'Derren Brown', 'Paul Daniels'];
make_great(magicians2);
show_magicians(magicians);
