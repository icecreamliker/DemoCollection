/*
 * author: yaoli<yaoli111144@gmail.com>
 * time: 2012-3-8
 * description: factory method pattern
 */
 
var Animal = function(){};
Animal.prototype = {
	constructor: Animal,
	Dog : function(){
		alert('dog is crying');
	},
	Cat : function(){
		alert('cat is crying');
	},
	Beast : function(){
		alert('wow, I am the beast,i wanna eat you!');
	} 
}

/**
 * @param {String} identify animal type
 * @return {Object} return the created animal object 
 * @description animal creator.if you don't know, i wanna fuck ur ass
 */
function PregnantCreator(type){
	var innerObj;
	switch(type){
		case 'dog':
			innerObj = new Animal().Dog;
			break;
		case 'cat':
			innerObj = new Animal().Cat;
			break;
		default:
			innerObj = new Animal().Beast;
	}
	return innerObj;
}

//test
//var newObj = PregnantCreator('dog');
//newObj();