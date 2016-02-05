angular.module('moduleOne', [])

angular.module('moduleOne')
	.controller('controllerOne', ['$scope', function($scope){
		$scope.quoteArray=[]
		//$scope.quoteArray = _.sortBy($scope.array, 'rating')
		$scope.post= {}
		$scope.radio = { num:0}
		var randomNumber = function(){
				return Math.floor(Math.random()*4)
			}
		
		
		var Post = function(author, quote){
				this.author = author 
				this.quote = quote 
				this.rating = 0
				this.ratingArray = []
		}
		Post.prototype.average = function(){
			var sum = 0
			for(var i=0; i < this.ratingArray.length; i++){
				sum += Number(this.ratingArray[i])
				}
				var avg =  sum/this.ratingArray.length
				return avg
		
		}

		$scope.submitRating = function($index, entry){
			$scope.quoteArray[$index].ratingArray.push(Number(entry.num))
			$scope.quoteArray[$index].rating = $scope.quoteArray[$index].average()
			//$scope.quoteArray = _.sortBy($scope.array, 'rating')
			console.log($scope.radio.num)
		}

		$scope.submit = function(){						
			$scope.quoteArray.push(new Post($scope.userPost.author, $scope.userPost.quote))
			//$scope.quoteArray = _.sortBy($scope.quoteArray, 'rating')
			$scope.userPost = {}
		}

		$scope.undo = function($index){
			$scope.quoteArray.pop($index)
			//$scope.quoteArray = _.sortBy($scope.array, 'rating')
		}

		$scope.randomUp = function(){
			$scope.ranNum = randomNumber()
			$scope.popUp = true

		}
		$scope.randomDown = function(){
			$scope.popUp = false
		}
	}])


	
	