var app = angular.module('myApp', []);


app.controller('myCtrl', function($scope) {
	$scope.completedList=[];
    $scope.todoList=[];
     $scope.addElement = function() {  
        $scope.todoList.push({todoText:$scope.element});
        $scope.element = "";
    };
	
	$scope.done= function(index)
	{
		//alert("Done");
		//console.log(index);
		$scope.completedList.push($scope.todoList[index]);
		$scope.todoList.splice(index,1);
	};
})