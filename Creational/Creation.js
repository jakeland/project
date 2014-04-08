//Creation Pattern
//Jake McCarthy
//Prototype + Constructor
//Here is the constructor

function Bundle( console, controllers, game) {
 
  this.console = console;
  this.controllers = controllers;
  this.game = game;
 
}
 
 
// Here is the prototype

Bundle.prototype.toString = function () {
  return this.console + " comes with " + this.controllers + " controllers, and " + this.game + ".";
};
 
// Usage:
 
var xbox = new Bundle( "Xbox One", 2, "Fifa 2014" );
var ps4 = new Bundle( "ps4", 1, "WatchDogs");
 
console.log( xbox.toString() );
console.log( ps4.toString() );