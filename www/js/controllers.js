angular.module('starter.controllers', [])


  .controller('calendarCtrl', function ($scope) {

    // prep some variables
    var startDate = new Date(2015, 2, 15, 18, 30, 0, 0, 0); // beware: month 0 = january, 11 = december
    var endDate = new Date(2015, 2, 15, 19, 30, 0, 0, 0);
    var title = "My nice event";
    var eventLocation = "Home";
    var notes = "Some notes about this event.";


    var success = function (message) {
      alert("Success: " + JSON.stringify(message));
    };
    var error = function (message) {
      alert("Error: " + message);
    };

    $scope.pushButton = function () {
      // create an event silently (on Android < 4 an interactive dialog is shown)
      window.plugins.calendar.createEvent(title, eventLocation, notes, startDate, endDate, success, error);
      var d = new Date(2015, 2, 15, 19, 30, 0, 0, 0);
      window.plugins.calendar.openCalendar(d, success, error); // callbacks are optional
    }


  })

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    FCMPlugin.getToken(
      function (token) {
        alert(token);
      },
      function (err) {
        console.log('error retrieving token: ' + err);
      });

    //FCMPlugin.onNotification( onNotificationCallback(data), successCallback(msg), errorCallback(err) )
    //Here you define your application behaviour based on the notification data.
    FCMPlugin.onNotification(
      function (data) {
        if (data.wasTapped) {
          //Notification was received on device tray and tapped by the user.
          alert(JSON.stringify(data));
        } else {
          //Notification was received in foreground. Maybe the user needs to be notified.
          alert(JSON.stringify(data));
        }
      },
      function (msg) {
        console.log('onNotification callback successfully registered: ' + msg);
      },
      function (err) {
        console.log('Error registering onNotification callback: ' + err);
      }
    );

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
      {title: 'Reggae', id: 1},
      {title: 'Chill', id: 2},
      {title: 'Dubstep', id: 3},
      {title: 'Indie', id: 4},
      {title: 'Rap', id: 5},
      {title: 'Cowbell', id: 6}
    ];
  })

  .controller('PlaylistCtrl', function ($scope, $stateParams) {
  });
