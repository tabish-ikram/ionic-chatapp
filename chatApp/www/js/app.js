// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('myApp', ['ionic'])

/*
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
*/

.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/login");

    $stateProvider
      .state("login",{
        url: "/login",
        templateUrl: "/views/login.html"
      })
      .state("tabs",{
        url: "/tabs",
        abstract: true,
        templateUrl: "/views/tabs.html"
      })
      .state("tabs.chat",{
        url: "/chat",
        views:{
          'chat-tab':{
            templateUrl: "/views/chat.html"
          }
        }

      })
      .state("tabs.friends",{
        url: "/friends",
        views:{
          'friends-tab':{
            templateUrl: "/views/friends.html"
          }
        }
      })

  })
