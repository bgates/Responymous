(function(module) {
try {
  module = angular.module('responymous');
} catch (e) {
  module = angular.module('responymous', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/partials/instructor.html',
    '<div class="container" id="instructor"><div class="progress"><div class="progress-bar progress-bar-danger" style="width: {{ instructor.wthRed }}%"><div title="danger" class="bar" id="prgwidth">{{ instructor.cntRed }}</div></div><div class="progress-bar progress-bar-warning" style="width: {{ instructor.wthYellow }}%"><div title="warning" class="bar" id="prgwidth">{{ instructor.cntYellow }}</div></div><div class="progress-bar progress-bar-success" style="width: {{ instructor.wthGreen }}%"><div title="success" class="bar" id="prgwidth">{{ instructor.cntGreen }}</div></div></div></div>');
}]);
})();
