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

	$scope.cadastrar = function(values){
		$scope.resultado = (values.peso / (values.altura*values.altura));

		if($scope.resultado < 17){
			$scope.msg = "Muito abaixo do peso";
		} else if (($scope.resultado >= 17) && ($scope.resultado <= 18.49)){
			$scope.msg = "Abaixo do peso";
		} else if (($scope.resultado >= 18.5) && ($scope.resultado <= 24.99)){
			$scope.msg = "Peso normal";
		} else if (($scope.resultado >= 25) && ($scope.resultado <= 29.99)){
			$scope.msg = "Acima do peso";
		} else if (($scope.resultado >= 30) && ($scope.resultado <= 34.99)){
			$scope.msg = "Obesidade I";
		} else if (($scope.resultado >= 35) && ($scope.resultado <= 39.99)){
			$scope.msg = "Obesidade II (severa)";
		} else {
			$scope.msg = "Obesidade III (mórbida)";
		}

		$scope.alertar = true;
		var pessoa = {nome: values.nome, peso: values.peso, altura: values.altura, imc: $scope.resultado, status: $scope.msg};
		rest.salvar(pessoa).success(function(data){
			$scope.pessoa = null;
		});
	}; 

	$scope.logout = function(){
		window.location.href = "http://localhost:3000/";
	};

	carregarDados();



});