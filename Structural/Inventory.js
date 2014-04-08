//     Module(Creational)
//     Facade (Structural)

var inventory = ( function() {
    var _private = {
         actuals :  {
                  xbox : 15,
             	  ps4 :  20,
              	  wii :  10
         } ,

         low : {
              xbox : 20,
              ps4  : 12,
              wii  : 6
         } , 

         max : {
              xbox : 50,
              ps4  : 30,
              wii: 20
         } ,

                 
	getInStock : function (consoleType) {
             return this.actuals[consoleType]
         } ,


        genToOrder : function(consoleType) {
             var Stock=this.actuals[consoleType]
             var low=this.low[consoleType]
             var max= this.max[consoleType]
             if  (Stock <= low )  {
                 return max - inStock 
             } else {
                return 0
             }
         } 
        
    } ;


    return {
         checkInStock:  function()  {
             var allItems = [ 'xbox', 'ps4', 'wii' ] ;
             for (var i=0 ; i< allItems.length; i++ ) {
                 consoleType=allItems[i] ;
                 var cnt=_private.getInStock (consoleType) 
                 console.log ("In stock for " + consoleType + "=" + cnt)
             }
         } , 
         generateOrders : function(purchase) {
             var allItems = [ 'xbox', 'ps4', 'wii' ] ;
             for (var i=0 ; i< allItems.length; i++ ) {
                 itemType=allItems[i] ;
                 var cnt=_private.genToOrder (consoleType) 
                 console.log ("Deficit to order for " + consoleType + "=" + cnt )
                  Behavioral2.execute(ConsoleType, cnt)                    
                 // purchaseManager.execute( "placeOrder", consoleType, cnt)    
                 // purchaseManager.execute( "updateBooks",consoleType, cnt)
             }
         }
    } 
}()) ;