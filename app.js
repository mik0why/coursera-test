(function () {
'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function($scope){
  $scope.name = "";
  $scope.totalValue = 0;


  $scope.displayNumeric = function(){
    var value = calculateNumericString($scope.name);
    $scope.totalValue = value; // update the scope val once calculated
  };



  function calculateNumericString(string){
    var totalStringValue = 0;
    for(var i = 0; i < string.length; i++){
      totalStringValue += string.charCodeAt(i)
    }
    return totalStringValue;
  }

//everything within the scope
});

})();
