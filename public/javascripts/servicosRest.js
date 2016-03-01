angular.module("imc").factory("rest", function ($http, config){
	var _listando = function(){
		return $http.get(config.url + "/lista/listagem");
	};

	return {
		listando: _listando
	};
});