// jquery custom code
// $(document).ready(function(){
// 	console.log("Jquery js is ready.");
// 	$("#first-step-hide").click(function(){
//     	$("#first-step-wrap").hide();
//     	document.body.scrollTop = document.documentElement.scrollTop = 120;
// 	});	
// });



// angualr custom code
var app = angular.module('naphixApp', ['ngAnimate']);
app.controller('naphixCtrl', function($scope) {
    $scope.tabShow1 = true;
    $scope.blueCircle1 = "blueCircle1";
    $scope.parseInt = parseInt;
    //modal heading attributes/color change
    $scope.switchModalHeader = {"color" : "#a9a9a9"}
    $scope.webDevelopmentValue = "500";
   

//  -----------------------------------
// 	circle click functions
// ------------------------------------
		//add initial pseudo in first step
		$scope.switchPseudo1 =[];$scope.switchPseudo1.push('blueCirclePseudo');
		//destroy all psudo  top-arrow
	    function resetPsudoFunc(){
	    	 $scope.switchPseudo1 =[];$scope.switchPseudo1.pop('blueCirclePseudo'); $scope.switchPseudo2 =[];$scope.switchPseudo1.pop('blueCirclePseudo'); $scope.switchPseudo3 =[];$scope.switchPseudo1.pop('blueCirclePseudo'); $scope.switchPseudo4 =[];$scope.switchPseudo1.pop('blueCirclePseudo');	   
	    };


	    //reset all circle colors
	    function resetCircleFunc(){
	    	 $scope.blueCircle1  = "";$scope.blueCircle2  = "";$scope.blueCircle3  = ""; $scope.blueCircle4  = "";	
	    };	    
	    //reset all circle colors
	    function setCircleFunc(){
	    	 $scope.blueCircle1  = "blueCircle1";$scope.blueCircle2  = "blueCircle2"; $scope.blueCircle3  = "blueCircle3"; $scope.blueCircle4  = "blueCircle4";
	    };

		$scope.circle1Click = function(){
			resetPsudoFunc();
	    	resetCircleFunc();$scope.blueCircle1  = "blueCircle1";  
	    	$scope.switchPseudo1 =[];$scope.switchPseudo1.push('blueCirclePseudo'); 
	    	$scope.switchModalHeader = {"color" : "#a9a9a9"};
	    	$scope.hideinStep3Step4 = {"display" : "block"};	    	 
	    }
	    $scope.circle2Click = function(){
	    	resetPsudoFunc();
	    	$scope.blueCircle2  = "blueCircle2";$scope.blueCircle3  = ""; $scope.blueCircle4  = "";	
	    	$scope.switchModalHeader = {"color" : "#388dc4"};    	
	    	$scope.switchPseudo2 =[];$scope.switchPseudo2.push('blueCirclePseudo');
	    	$scope.hideinStep3Step4 = {"display" : "block"};
	    }
	    $scope.circle3Click = function(){
	    	resetPsudoFunc();
	    	$scope.blueCircle2  = "blueCircle2";$scope.blueCircle3 = "blueCircle3";$scope.blueCircle4 = "";
	    	$scope.switchModalHeader = {"color" : "#388dc4"};
	    	$scope.switchPseudo3 =[];$scope.switchPseudo3.push('blueCirclePseudo');
	    	$scope.hideinStep3Step4 = {"display" : "none"};	
	    }
	    $scope.circle4Click = function(){
	    	setCircleFunc();
	    	resetPsudoFunc();
	    	$scope.switchPseudo4 =[];$scope.switchPseudo4.push('blueCirclePseudo');
	    	$scope.switchModalHeader = {"color" : "#388dc4"};
	    	$scope.hideinStep3Step4 = {"display" : "none"};
	    }

//  -----------------------------------
// 	Protgress Fill Percentage
// ------------------------------------

	    $scope.progressFill50 = function(){
	    	$scope.progressFill = "35";
	    	resetPsudoFunc();
	    	$scope.blueCircle2  = "blueCircle2";$scope.blueCircle3  = ""; $scope.blueCircle4  = "";	    	
	    	$scope.switchPseudo2 =[];$scope.switchPseudo2.push('blueCirclePseudo');
	    	$scope.switchModalHeader = {"color" : "#388dc4"};
	    	$scope.hideinStep3Step4 = {"display" : "block"};
	    };
	    $scope.progressFill75 = function(){
	    	$scope.progressFill = "64";
	    	resetPsudoFunc();
	    	$scope.blueCircle2  = "blueCircle2";$scope.blueCircle3 = "blueCircle3";$scope.blueCircle4 = "";
	    	$scope.switchPseudo3 =[];$scope.switchPseudo3.push('blueCirclePseudo');
	    	$scope.switchModalHeader = {"color" : "#388dc4"};
	    	$scope.hideinStep3Step4 = {"display" : "none"};
	    };
	  	$scope.progressFill100 = function(){
	    	$scope.progressFill = "100";
	    	setCircleFunc();
	    	resetPsudoFunc();
	    	$scope.switchPseudo4 =[];$scope.switchPseudo4.push('blueCirclePseudo');
	    	$scope.switchModalHeader = {"color" : "#388dc4"};
	    	$scope.hideinStep3Step4 = {"display" : "none"};
	    };

});



