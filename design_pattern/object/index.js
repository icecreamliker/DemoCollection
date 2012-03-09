/*
 * author: yaoli<yaoli111144@gmail.com>
 * time: 2012-3-9
 * description: no sketch
 */
 
/*  normal way  */
var Person = function(name, age, gender){
	this._name = name;
	this._age = age;
	this._gender = gender;
}
Person.prototype.sleep = function(){
	alert('my name is ' + this._name);
}
var person1 = new Person('xiaohong');
person1.sleep();

/*  another way   */
var Person2 = function(name, age){
	this.setName(name);
	this.setAge(age);
}
Person2.prototype = {
	setName : function(name){
		this._name = name;
	},
	setAge : function(age){
		this._age = age;
	},
	getName : function(){
		return this._name;
	},
	getAge : function(){
		return this._age;
	},
	display : function(){
		alert(this.getName() + '------' + this.getAge());
		//console.log(this.getName() + '------' + this.getAge());
	} 
}
var person2 = new Person2('xiaoqiang', 21);
person2.display();

/**
 * @constructor Kid
 * @reference http://robertnyman.com/2008/10/14/javascript-how-to-get-private-privileged-public-and-static-members-properties-and-methods/
 * @reference http://phrogz.net/js/classes/OOPinJS.html
 * @reference http://blog.firetree.net/2005/06/16/object-orientated-javascript/
 */

// constructor
function Kid (name) {
	// private 
	var privateProperty = 'dog';
	var privateMethod = function(){};
	function privateMethod2(){}
	// privileged method
	this.privilegedMethod = function () {
		// invoke private method
		privateMethod2();
		return privateProperty;
	};

	// public properties
	this.name = name;
}

// public method
Kid.prototype.getName = function () {
	return this.name;
};

// public properties
Kid.prototype.age = 21;

// static varible
Kid.gender = 'male';