          var mainApp = angular.module("mainApp", ['ngRoute']);
 
                mainApp.config(function($routeProvider) {
                    $routeProvider
                        .when('/home', {
                            templateUrl: 'home.html',
                            controller: 'quizController'
                        })
                        .when('/test', {
                            templateUrl: 'start.html',
                            controller: 'qstnController'
                        })
                        .otherwise({
                            redirectTo: '/home'
                        });
                });
                 
                mainApp.controller('quizController',function($scope){

                });

                mainApp.controller('qstnController', function($scope,$http) {
                    $scope.timer = "";//Timer is called with minutes parameter
                    $scope.duration = 10;
                    $http.get('questions.json').success(function(data){
                        $scope.questions = data;                       
                    });

                var countdown = d3.select("#timer").attr("font-size","13px");
                var count = $scope.duration * 60, min, sec, timer;

                setInterval(function(){
                            min = parseInt(count / 60);
                            sec = parseInt(count % 60);
                            min = min < 10 ? "0" + min : min;
                            sec = sec < 10 ? "0" + sec : sec;
                            timer = min + ":" + sec;
                            countdown.text("Time left : "+ timer);

                            if(--count < 0 ){
                                $scope.timer = 0;
                            }  
                            
                        },1000);

                

                 /*   $scope.startTimer = function(){
                        var count = $scope.duration * 60, min,sec;
                     setInterval(function(){
                            min = parseInt(count / 60);
                            sec = parseInt(count % 60);
                            min = min < 10 ? "0" + min : min;
                            sec = sec < 10 ? "0" + sec : sec;
                            $scope.timer = min + ":" + sec;
                            console.log($scope.timer);

                            if(--count < 0 ){
                                $scope.timer = 0;
                            }  
                            
                        },1000);
                     
                    };*/



                });