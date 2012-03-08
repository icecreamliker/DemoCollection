/*
 * yaoli<yaoli111144@gmail.com>
 * 2012-3-8
 * factory method pattern
 */
 
var Factory = function(){};
Factory.prototype = {
	constructor: Factory,
	Dog : function(){
		alert('dog is crying');
	},
	Cat : function(){
		alert('cat is crying');
	},
	Animal : function(){
		alert('default animal is crying');
	} 
}
 function PregnantCreator(type){
	var innerObj;
	switch(type){
		case 'dog':
			innerObj = new Factory().Dog;
			break;
		case 'cat':
			innerObj = new Factory().Cat;
			break;
		default:
			innerObj = new Factory().Animal;
	}
	return innerObj;
 }
 
 //test
 //var newObj = PregnantCreator('dog');
 //newObj();