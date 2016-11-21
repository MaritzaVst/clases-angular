(function(){

	var app = angular.module('universidadApp',[ ]);

	app.controller('listadoCtrl', ['$scope', function($scope){
		
			$scope.listadoDeCompras = ["huevos", "carne", "arroz", "verduras", "condimentos"];
			$scope.listadoProfesores = {
				profesores: [{
						nombre: "Lorena",
						edad: 21,
						clase: "CDE"
					},
					{
						nombre: "Juan Carlos",
						edad: 26,
						clase: "TICS"
					},
					{
						nombre: "Fernando",
						edad: 29,
						clase: "TEI"
					}]
			};

	}]);

})();
