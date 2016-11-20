(function(){

	var app = angular.module('universidadApp',[ ]);

	app.controller('listadoCtrl', ['$scope', function($scope){
		
			$scope.listadoDeCompras = ["huevos", "carne", "arroz", "verduras", "condimentos"];

	}]);

})();
