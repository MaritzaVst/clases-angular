/*
Este archivo contendrá las directivas o el módulo principal de Angular de nuestra App. 
	
	var app = angular.module('moduleName', [arregloDeArgumentos])
	
	arregloDeArgumentos: "Son dependencias que nuestra app podría necesitar. Si nosotros especificamos una, angular va a entender que necesito esa librería o dependencia".
*/

var app = angular.module('universidadApp', []);

/*Controladores
	Definción: Son los que se encargan de manejar una parte de la página o la totalidad de la misma. Los controladores albergan dentro de sí mismo una gran cantidad de cógido, pueden ser funciones, variables, etc. Se recomienda tenerlos lo más simple y ordenado posible.

	Ctrl --> es un stándar de los desarrolladores de ángular para nombrar controladores

	$scope --> es como una variable global. Está fuera del controlador. Vive en el ámbito de Angular. Podemos poner propiedades, tiene sus funciones, sus métodos, etc.
*/
app.controller('profesorCtrl', function ($scope) {

	$scope.profesor = profesorData;
	$scope.editando = {};

	$scope.editarProfesor = function(){
		angular.copy($scope.profesor, $scope.editando);
	};

	$scope.guardarCambios = function() {
		angular.copy($scope.editando, $scope.profesor);
	}

	$scope.cancelarCambios = function() {
		$scope.editando = {};
	}

});

var profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 47,
	foto: "img/juancarlos.jpg"
}