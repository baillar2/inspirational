angular.module('moduleOne', [])

angular.module('moduleOne')
	.controller('controllerOne', ['$scope', function($scope){
		$scope.array=[]
		$scope.quoteArray = _.sortBy($scope.array, 'rating')
		$scope.post= {}
		var randomNumber = function(){
				return Math.floor(Math.random()*4)
			}
		var average = function(){
			var sum = 0
			for(var i=0; i < ratingArray.length; i++){
				sum += ratingArray[i]
				var avg =  sum/ratingArray.length
				return avg
			}
		}
		var Post = function(author, quote, rating, array){
				this.author = author, 
				this.quote = quote, 
				this.rating = rating
				this.rating = array
		}

		
		$scope.update = function(){
			$scope.entry.ratingArray.push(radio)
		}

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

		$scope.randomUp = function(){
			$scope.ranNum = randomNumber()
			$scope.popUp = true

		}
		$scope.randomDown = function(){
			$scope.popUp = false
		}
	}])


	
	