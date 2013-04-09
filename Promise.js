/**
 * Promise implementation
 */

'use strict';

var Promise = function() {
  this.state = 'unfulfilled';
	this.data = null;

};

Promise.prototype.then = function(resolveHandler, rejectHandler) {
	//var len = arguments.length;
	// Use handler stacks to store all the thens
	this.resolveHandler = resolveHandler;
	this.rejectHandler = rejectHandler;
}

Promise.prototype.when = function() {

	return this;
}
Promise.prototype.cancel = function() {
	this.resolveHandler = null;
}

Promise.prototype.resolve = function(data) {
	this.data = data;
	this.state = 'resolved';
	if(this.resolveHandler)	
		this.resolveHandler(data);
}

Promise.prototype.reject = function(data) {
	this.data = data;
	this.state = 'rejected';
	this.rejectHandler(data);
}


function test() {
    var promise = new Promise();
    setTimeout(function() {
    	promise.resolve('wo shi haoren!');
    	console.log('qidong')
    }, 2000);
    setTimeout(function() {
    	promise.cancel('i wanna cancel the excution!');
    	console.log('cancel')
    }, 1000);
	
    return promise;
}

test().then(function(data) {
	var _data = data;
	alert(_data)
}, function(data) {
	console.log(data);
	console.log('You triggered rejectHandler!');
});


