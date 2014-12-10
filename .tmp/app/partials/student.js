(function(module) {
try {
  module = angular.module('responymous');
} catch (e) {
  module = angular.module('responymous', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/partials/student.html',
    '<div class="container" id="student"><h2 class="col-md-12 col-sm-12 col-xs-12">How are you tracking?</h2><div class="btn-group-vertical" role="group"><button type="button" class="btn btn-default" ng-click="student.addVote(5)" ng-disabled="student.isDisabled">5 - I am pwning these concepts</button></div><div class="btn-group-vertical" role="group"><button type="button" class="btn btn-default" ng-click="student.addVote(4)" ng-disabled="student.isDisabled">4 - Doing aight. I think I have a question or two</button></div><div class="btn-group-vertical" role="group"><button type="button" class="btn btn-default" ng-click="student.addVote(3)" ng-disabled="student.isDisabled">3 - It\'s starting to get fuzzy...</button></div><div class="btn-group-vertical" role="group"><button type="button" class="btn btn-default" ng-click="student.addVote(2)" ng-disabled="student.isDisabled">2 - So many questions. Much struggle.</button></div><div class="btn-group-vertical" role="group"><button type="button" class="btn btn-default" ng-click="student.addVote(1)" ng-disabled="student.isDisabled">1 - Totally lost. Halp.</button></div><h1 class="col-md-12 col-sm-12 col-xs-12" ng-show="student.isDisabled">Thanks for your input!</h1></div>');
}]);
})();
