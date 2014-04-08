	A design pattern is a means of creating a "building block of code." This code can be reused in several languages with many 
different settings as long as a similar goal needs to be accomplished. These design patterns are most useful when attempting to solve 
common problems. Because of this, design patterns are naturally built like a template, with which to build an object. Any object with similar 
settings can be built. A design pattern can be used to create cars in one page, and trucks on the next. Their flexibility is their strongest trait.

	Creation:
	As mentioned earlier, design patterns can be used to make similar objects such as cars and trucks.
	By creating objects in an efficient manner, it reduces the complexity of the code.
	
	I chose to use the prototype method to create a bundle structure for video games. 
	First the bundle structure is set up, which allows me to make a Ps3 bundle, an Xbox bundle, or a Wii bundle.
	It also allows me to make any future bundle I can think of. Such as a Gameboy bundle.
	
	I then use that prototype method paired with the constructor method to actually "build" the bundles themselves.
	
	
	Structural:
	Allows for a clear understanding of objects within a system, and allows changes to be made in an isolated area without effecting system as a whole.
	
	In this example, I have implemented the Facade design pattern by hiding the inner workings of the structure of the javaScript file.
	I accomplished this by using an "inventory" function assigned to a variable. This is treated as a private variable and its methods are not directly accessible from the outside. 
	In the purchase.js file, purchase decisions are made based on inventory levels described in the inventory.js file.
	
	A proxy is used to actually call these changes.
	
	Behavioural: 
	Shows flow of information within a system.
	
	By using an observer class, I can look through people "chatting" and correctly display information based on the information received.
	
	
	