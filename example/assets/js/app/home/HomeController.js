app.controller('HomeController', function (sailsResource) {
	var self = this;

	var simple = sailsResource('Simple', null, {verbose: true});

	this.simpleForm = new simple();
//	this.simpleForm.perfectDate = new Date(2010, 11, 28, 14, 57);
	load();

	this.add = function () {
		self.simpleForm.$save();
		self.simpleForm = new simple();
		load();
	};

	this.deleteSimple = function (simple) {
		simple.$delete();
		load();
	};

	this.edit = function(simple){
		simple.$editing = true;
	};

	this.save = function(simple){
		simple.$save();
		simple.$editing = false;
	};

	function load() {
		self.simpleTypes = simple.query();
	}
});