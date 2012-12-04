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


/*

/********************************************
 * For BAT
 * Author: LeeY<yaoli111144@gmail.com>
 * Update: 2012-12-4
 *********************************************/

// Impl
$(function () {
	!function(){

		var yaoli = function() {
			return  new yaoli.fn._init();
		};

		yaoli.fn = yaoli.prototype =  {
			constructor: yaoli,

			_init: function() {
					this._connectEvent();
					this._getData();
					return this;
			},
			
			
			_connectEvent: function() {
				$('#J-view-commu').click(function(ev) {
					window.open('detail.htm?recordid='+window.location.href.split('?')[1].split('=')[1], "_self");
				});
			},
			
			_showTable: function(data) {
				var cells = '',
				sizeData = [],
				scoreData = [],
				goodnessData = [],
				mindData = [];
				for(var i in data) {
					sizeData.push({id:data[i]['COMMUNITYID'], num:data[i]['COMMUNITYSIZE']});
					scoreData.push({id:data[i]['COMMUNITYID'], num:data[i]['COMMUNITYSCORE']});
					goodnessData.push({id:data[i]['COMMUNITYID'], num:data[i]['COMMUNITYGOODNESS']});
					mindData.push({id:data[i]['COMMUNITYID'], num:Number(data[i]['COMMUNITYLIKEMINDEDNESS'])});	
				
					cells += ('<tr> \
							<td>'+data[i]['COMMUNITYID']+'</td> \
							<td>'+data[i]['COMMUNITYSIZE']+'</td>\
							<td>'+data[i]['COMMUNITYSCORE']+'</td>\
							<td>'+data[i]['COMMUNITYGOODNESS']+'</td>\
							<td>'+Number(data[i]['COMMUNITYLIKEMINDEDNESS']).toFixed(10)+'</td>\
							</tr>');
				}
				var sizeChart = $('#J-size').chart({'points': sizeData});
				var scoreChart = $('#J-score').chart({'points': scoreData, 'titleY':'Score'});
				var goodnessChart = $('#J-goodness').chart({'points': goodnessData, 'titleY':'Goodness'});
				var mindedChart = $('#J-minded').chart({'points': mindData, 'minTick':0.2, 'titleY':'Like-mindedness'});

				this._renderTable(cells);
				$('.table-con').mCustomScrollbar();

				$('.table-con table tr').click(function(){
					$('.table-con table tr').removeClass('active');
					$(this).addClass('active');
					var uuid = $(this).children('td:first').text().replace(/ /g, '');
					
					sizeChart.highLight(uuid);
					scoreChart.highLight(uuid);
					goodnessChart.highLight(uuid);
					mindedChart.highLight(uuid);
				});
			},
			_renderTable: function(cells) {
				//console.log(this);
				$('.table-con table').append(cells);
			},
			
			_getData: function() {
				
				try{
					var _recordId = window.location.href.split('?')[1].split('=')[1];
					model.getCommunities(_recordId, this._showTable.bind(this));
				} catch(e) {
					console.log(e);
				}	
			}
		};

		yaoli.fn._init.prototype = yaoli.fn;
		window.yaoli = yaoli();

	}();
});

//$(function () {
//	console.log(yaoli);
//});

*/


