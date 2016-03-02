angular.module("imc").factory("rest", function ($http, config){
	var _listando = function(){
		return $http.get(config.url + "/lista/listagem");
	};

	var _salvar = function(pessoas){
		return $http.post(config.url + "/lista/salvar", pessoas);
	};

	return {
		listando: _listando,
		salvar: _salvar
	};
});