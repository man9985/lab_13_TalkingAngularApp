var app = angular.module('myModule', []);
app.controller('myController', function($scope){

	var words = ["Waaaa", "Baaa", "Ahhhh", "BuhBuh", "Cookie"];
	var phrases = ["and then", "i want", "ice cream", "Gimme that"];
	var classes = ["fonts", "blue", "fontSize", "orange"];
	var allFunctions = [addWord, addPhrase, addClass, addPhraseClass];

	$scope.style = classes[Math.floor(Math.random() * classes.length)];

	$scope.arr = [];

	$scope.addAllClass = function() {
  	var x = randomFunction();
  	x()
  };

  $scope.addWord = function(){
  	addWord();
  };

  $scope.addPhrase = function(){
 	addPhrase();
  };

  $scope.addClass = function(){
  	addClass();
  };

  $scope.addPhraseClass = function(){
  	addPhraseClass();
  };

  function addClass(){
	var newWord = {};
  	newWord.text = words[Math.floor(Math.random() * words.length)];
  	newWord.style1 = classes[Math.floor(Math.random() * classes.length)];
  	newWord.style2 = classes[Math.floor(Math.random() * classes.length)];
  	$scope.arr.push(newWord);
  }

  function addPhraseClass(){
	var newPhrase = {};
  	newPhrase.text = phrases[Math.floor(Math.random() * phrases.length)];
  	newPhrase.style1 = classes[Math.floor(Math.random() * classes.length)];
  	newPhrase.style2 = classes[Math.floor(Math.random() * classes.length)];
  	$scope.arr.push(newPhrase);
  }

  function addPhrase(){
	var newPhrase = {};
  	newPhrase.text = phrases[Math.floor(Math.random() * phrases.length)];
  	$scope.arr.push(newPhrase);
  }

  function addWord(){
	var newWord = {};
  	newWord.text = words[Math.floor(Math.random() * words.length)];
  	$scope.arr.push(newWord);
  }

  function randomFunction() {
  	return allFunctions[Math.floor(Math.random() * allFunctions.length)];
  }
});

