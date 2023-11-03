//Create yout own module
var fortuneCookies = [
    "Conquer your fears or they will conquer you",
    "Rivers needs springs",
    "Do not fear what you dont known",
    "You will have a pleasant surprise",
    "Whenever possible, keep it simple",
];

/*Create the function to export the module
Global variable "exports" is the key to say to export something of the module.
Is like use a public method
Fortune key is a private variable, it not be accesible external of this module
*This is only one of various ways to export a function
*/
exports.getFortune = function(){
    var idx = Math.floor(Math.random() * fortuneCookies.length);

    return fortuneCookies[idx];
    }