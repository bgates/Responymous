(function(module) {
try {
  module = angular.module('responymous');
} catch (e) {
  module = angular.module('responymous', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/partials/main.html',
    '<div class="container" id="login"><div class="jumbotron text-center"><div ng-hide="app.user"><h1>Please login to continue:</h1><br><p><button class="btn btn-lg btn-primary btn-block" ng-click="app.login()"><img src="app/images/GitHub-Mark-Light-64px.png">Login with GitHub</button></p></div><div ng-show="app.user"><h1>Hello, {{app.user.name}}!</h1><button class="btn btn-danger btn-block" ng-click="app.logout()">Logout</button></div></div></div>');
}]);
})();
