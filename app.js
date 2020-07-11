(function ()
 {
  'use strict';


   angular.module('LunchCheck',[])

   .controller('LunchCheckController',LunchCheckController);

   LunchCheckController.$inject = ['$scope'];

   function LunchCheckController($scope) {
     $scope.message = "";
     $scope.messages;

   $scope.lunch = function () {
       var itemArray = $scope.message.split(',');

       if( itemArray.length== 1 && (itemArray[0]=="" || itemArray[0] == " ")){
               $scope.messages = "Please enter data first";
        }

      else if ( itemArray.length <= 3 ) {
           $scope.messages="Enjoy!";
        }

       else if (itemArray.length > 4 ) {
          $scope.messages = "Too much!";
       }
     };
    }
  })();
//minifier code:
// !function(){"use strict";function e(e){e.message="",e.messages,e.lunch=function(){var s=e.message.split(",");1!=s.length||""!=s[0]&&" "!=s[0]?s.length<=3?e.messages="Enjoy!":s.length>4&&(e.messages="Too much!"):e.messages="Please enter data first"}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
