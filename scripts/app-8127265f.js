"use strict";angular.module("responymous",["ngAnimate","ngCookies","ngTouch","ui.router","firebase"]).config(["$stateProvider","$urlRouterProvider",function(t,n){t.state("home",{url:"/",templateUrl:"app/partials/main.html",controller:"MainCtrl as app"}).state("student",{url:"/student",templateUrl:"app/partials/student.html",controller:"StudentCtrl as student"}).state("instructor",{url:"/instructor",templateUrl:"app/partials/instructor.html",controller:"InstructorCtrl as instructor"}),n.otherwise("/")}]).constant("CONFIG",{Firebase:{baseUrl:"https://responymousdevdb.firebaseio.com"}}),angular.module("responymous").factory("Firebase",["CONFIG",function(t){return new Firebase(t.Firebase.baseUrl)}]).factory("Auth",["Firebase","$firebaseAuth","$firebase",function(t,n,e){function a(n){if(null===n)return null;var a=e(t.child("users").child(n.github.id)).$asObject();return angular.extend(a,{access_token:n.github.accessToken,email:n.github.email,name:n.github.displayName,last_vote:5,current_class:"Q42014FEEORL",student:!0}),t.child("userClasses").child(n.github.id).set("Q42014FEEORL"),a.$save(),a}var s=n(t);return{onAuth:function(t){s.$onAuth(function(n){t(a(n))})},getUser:function(){return s.$getCurrentUser()},login:function(){return s.$authWithOAuthRedirect("github")},logout:function(){s.$unauth()}}}]).controller("MainCtrl",["Auth","$location",function(t){var n=this;this.login=t.login,this.logout=t.logout,console.log(t.getUser),t.onAuth(function(t){n.user=t})}]),angular.module("responymous").controller("InstructorCtrl",["Auth","Firebase","$timeout","$firebase",function(t,n,e,a){var s,r,i,o,l,u=this;t.onAuth(function(t){s=t.$id,r=t.current_class}),n.child("classUsers").on("child_changed",function(){var t=a(n.child("classUsers").child(r)).$asObject();t.$loaded().then(function(){i=0,o=0,l=0,angular.forEach(t,function(t){t.current_vote<=2&&(i+=1),t.current_vote>3&&(l+=1),3==t.current_vote&&(o+=1)}),u.cntRed=i,u.cntYellow=o,u.cntGreen=l,total=i+o+l,u.wthRed=(i/total*100).toFixed(2),u.wthYellow=(o/total*100).toFixed(2),u.wthGreen=(l/total*100).toFixed(2)})})}]),angular.module("responymous").controller("StudentCtrl",["Auth","Firebase","$timeout","$firebase",function(t,n,e,a){var s,r,i=this;t.onAuth(function(t){s=t.$id,r=t.current_class}),this.isDisabled=!1,this.addVote=function(t){this.isDisabled=!0;var o=(new Date).toISOString().slice(0,10).replace(/-/g,""),l=a(n.child("votes")).$asArray();l.$add({class_id:r,date:o,score:t,student_id:s});var u=a(n.child("classUsers").child(r).child(s)).$asObject();u.$loaded().then(function(){u.current_vote=t,u.$save()}),e(function(){i.isDisabled=!1},3e3)}}]),function(t){try{t=angular.module("responymous")}catch(n){t=angular.module("responymous",[])}t.run(["$templateCache",function(t){t.put("components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right"><li>Current date: {{ date | date:\'yyyy-MM-dd\' }}</li></ul></div></nav>')}])}(),function(t){try{t=angular.module("responymous")}catch(n){t=angular.module("responymous",[])}t.run(["$templateCache",function(t){t.put("app/partials/instructor.html",'<div class="container" id="instructor"><div class="progress"><div class="progress-bar progress-bar-danger" style="width: {{ instructor.wthRed }}%"><div title="danger" class="bar" id="prgwidth">{{ instructor.cntRed }}</div></div><div class="progress-bar progress-bar-warning" style="width: {{ instructor.wthYellow }}%"><div title="warning" class="bar" id="prgwidth">{{ instructor.cntYellow }}</div></div><div class="progress-bar progress-bar-success" style="width: {{ instructor.wthGreen }}%"><div title="success" class="bar" id="prgwidth">{{ instructor.cntGreen }}</div></div></div></div>')}])}(),function(t){try{t=angular.module("responymous")}catch(n){t=angular.module("responymous",[])}t.run(["$templateCache",function(t){t.put("app/partials/main.html",'<div class="container" id="login"><div class="jumbotron text-center"><div ng-hide="app.user"><h1>Please login to continue:</h1><br><p><button class="btn btn-lg btn-primary btn-block" ng-click="app.login()"><img src="app/images/GitHub-Mark-Light-64px.png">Login with GitHub</button></p></div><div ng-show="app.user"><h1>Hello, {{app.user.name}}!</h1><button class="btn btn-danger btn-block" ng-click="app.logout()">Logout</button></div></div></div>')}])}(),function(t){try{t=angular.module("responymous")}catch(n){t=angular.module("responymous",[])}t.run(["$templateCache",function(t){t.put("app/partials/student.html",'<div class="container" id="student"><h2 class="col-md-12 col-sm-12 col-xs-12">How are you tracking?</h2><div class="btn-group-vertical" role="group"><button type="button" class="btn btn-default" ng-click="student.addVote(5)" ng-disabled="student.isDisabled">5 - I am pwning these concepts</button></div><div class="btn-group-vertical" role="group"><button type="button" class="btn btn-default" ng-click="student.addVote(4)" ng-disabled="student.isDisabled">4 - Doing aight. I think I have a question or two</button></div><div class="btn-group-vertical" role="group"><button type="button" class="btn btn-default" ng-click="student.addVote(3)" ng-disabled="student.isDisabled">3 - It\'s starting to get fuzzy...</button></div><div class="btn-group-vertical" role="group"><button type="button" class="btn btn-default" ng-click="student.addVote(2)" ng-disabled="student.isDisabled">2 - So many questions. Much struggle.</button></div><div class="btn-group-vertical" role="group"><button type="button" class="btn btn-default" ng-click="student.addVote(1)" ng-disabled="student.isDisabled">1 - Totally lost. Halp.</button></div><h1 class="col-md-12 col-sm-12 col-xs-12" ng-show="student.isDisabled">Thanks for your input!</h1></div>')}])}();