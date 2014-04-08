//Proxy (Structural)
//Jake McCarthy


function  Purchase() {
   console.log ("purchase created")
}

// Order consoles
Purchase.prototype.placeOrder=function(consoleType, quantity) {
    console.log ( "Ordered qty=" + quantity  + " for " + consoleType ) ;
}
      
//  Update books
Purchase.prototype.updateBooks=function( consoleType, quantity) {
    console.log ("Updated Books  qty=" + quantity  + " for " + consoleType ) ;
}


//impliments original pattern
Purchase.prototype.execute = function(consoleType, quantity)  {
    this.placeOrder(consoleType, quantity)
    this.updateBooks(consoleType, quantity)
};