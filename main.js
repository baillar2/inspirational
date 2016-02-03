angular.module('moduleOne', [])

angular.module('moduleOne')
	.controller('controllerOne', ['$scope', function($scope){
		$scope.array=[]
		$scope.quoteArray = _.sortBy($scope.array, 'rating')
		$scope.post= {}
		

		$scope.submit = function($event){						
			//$scope.quoteArray = _.sortBy($scope.array, 'rating')
			$scope.array.push($scope.post)
			$scope.quoteArray = _.sortBy($scope.array, 'rating')
			$scope.post = {}
			console.log($scope.quoteArray)

		}

		$scope.undo = function(){
			$scope.array.pop()
			$scope.quoteArray = _.sortBy($scope.array, 'rating')
		}



	}])