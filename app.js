var app = angular.module("ftb", []);
var controllers = {};

controllers.mainControl = function($scope){
	//Variables and Objects
	$scope.navMode = 'full';
	
	var isMobile = function(){
		if($(window).width() < 765){
			return true;
		}else{
			return false;
		};
	};
	
	//Init
	if(isMobile()){
		$scope.navMode = 'mobile';
	}
 
	$(window).resize(function(){
		$scope.$apply(function(){
			if(isMobile()){
				$scope.navMode = 'mobile';
			}else{
				$scope.navMode = 'full';
			};
		});
	});
};
 
<<<<<<< HEAD
app.controller(controllers);
=======
app.controller(controllers);
>>>>>>> 1bf61bff50d532c370e4c65363d89ce4bf0de5fc
