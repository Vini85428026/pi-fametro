angular.module("imc", []);
angular.module("imc").controller("ctrl", function ($scope, rest){
	
	$scope.logar = function(dados){
		if(dados.usuario == "admin" && dados.senha == "admin"){
			window.location.href = "http://localhost:3000/lista";
		}else if(dados.usuario == "atendente" && dados.senha == "123"){
			window.location.href = "http://localhost:3000/calcular";
		}else{
			alert("Não foi possivel fazer o login");
			window.location.href = "http://localhost:3000/";
		}
	};

	var carregarDados = function(){
		rest.listando().success(function(data){
			$scope.valores = data;
		});
	};

	carregarDados();



});