angular.module('moduleOne', [])

angular.module('moduleOne')
	.controller('controllerOne', ['$scope', function($scope){
		//$scope.array=[]
		$scope.quoteArray = _.sortBy($scope.array, 'rating')
		$scope.post= {}
		var randomNumber = function(){
				return Math.floor(Math.random()*4)
			}
		
		}
		var Post = function(author, quote){
				this.author = author, 
				this.quote = quote, 
				this.rating = 0
				this.ratingArray = []
		}
		Post.prototype.average = function(){
			var sum = 0
			for(var i=0; i < ratingArray.length; i++){
				sum += ratingArray[i]
				var avg =  sum/ratingArray.length
				return avg
			}
		
		$scope.update = function($index){
			$scope.quoteArray[$index].ratingArray.push(radio)
			$scope.quoteArray[$index].rating = $scope.quoteArray[$index].average()
		}

		$scope.submit = function($event){						
			$scope.quoteArray.push(new Post(userPost.author, userPost.author))
			$scope.quoteArray = _.sortBy($scope.array, 'rating')
			
			console.log($scope.quoteArray)

		}

		$scope.undo = function(){
			$scope.quoteArray.pop()
			$scope.quoteArray = _.sortBy($scope.array, 'rating')
		}

		$scope.randomUp = function(){
			$scope.ranNum = randomNumber()
			$scope.popUp = true

		}
		$scope.randomDown = function(){
			$scope.popUp = false
		}
	}])


	
	