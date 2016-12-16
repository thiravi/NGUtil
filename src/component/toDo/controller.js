(function () {
	function gridController () {
		this.name = "todo Controller";
	}

	// gridController.$inject[""];
	angular.module('myApp').controller("myApp.toDoController", gridController)
})();