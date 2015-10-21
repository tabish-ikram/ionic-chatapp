// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('myChat', ['ionic','ui.router','firebase','monospaced.elastic','angularMoment'])

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
        templateUrl: "views/login.html",
        controller : "loginController as logCtrl"
      })
      .state("tabs",{
        url: "/tabs",
        abstract: true,
        templateUrl: "views/tabs.html"

      })
      .state("tabs.chat",{
        url: "/chat",
        views:{
          'chat-tab':{
            templateUrl: "views/chat.html",
            controller: "UserMessagesCtrl"
          }
        }

      })
      .state("tabs.friends",{
        url: "/friends",
        views:{
          'friends-tab':{
            templateUrl: "views/friends.html",
            controller: "friendsCtrl"
          }
        }
      })

  })

  /*.config(function($cordovaFacebookProvider) {
    var appID = 1101475826544114;
    var version = "v2.0"; // or leave blank and default is v2.0
    $cordovaFacebookProvider.browserInit(appID, version);
  })
*/
