
// -- ���� 2 --
// angular.module('app', []).controller('myCtrl', function ($scope) {
//     $scope.hello = 55;
//     $scope.myBook = "AnguleJS"
// })
// -- ����� 2 ����� --

// -- ���� 3 --
// var app = angular.module('app', []);

// app.controller('firstCtrl', function ($scope, myFactory) {
//     console.log('firstCtrl');
//     $scope.myFactory = myFactory;
//     $scope.hello = 'Hello world';
// });

// app.controller('secondCtrl', function ($scope, myFactory) {
//     console.log('secondCtrl');
//     $scope.myFactory = myFactory;
//     $scope.hello = 'Hello world';
// });

// app.factory('myFactory', function () {
//     return {
//         hello: 'Hello world'
//     }
// })
// -- ����� 3 ����� --

// ���� 4
// var app = angular.module('app', []);
// app.controller('firstCtrl', function ($scope , myFactory) {
//     $scope.hello = 'hello world';
//     $scope.myFactory = myFactory
//     $scope.getBookmark = function(){
//         return "My bookmark"
//     }
//     $scope.setHello = function(text){
//         $scope.hello = text;
//     }
// });

// app.factory('myFactory' , function(){
//     return {
//         hello : function(){
//             return 'hello factory'
//         }
//     }
// });
// ����� 4 �����

// ���� 5
// var app = angular.module('app', []);
// app.controller('myBooksCtrl' , function($scope){
//     $scope.showBook = function (){
//         console.log('Whis is some book');
//     }
// });
// app.controller('angularBooksCtrl' , function($scope){
//     $scope.showBook = function (){
//         console.log('Whis is angularJs book');
//     }
// });
// app.controller('emberBooksCtrl' , function($scope){
// });
// ����� 5 �����

// ���� 6
// var app = angular.module('app', []);
// app.controller('mainCtrl' , function($scope){
//     this.myLesson = "MainLesson"
//     this.addLesson = function (){
//         console.log('addLesson');
//     };
//     // $scope.mainCtrl = this; ����� �� ������������
// });
// app.controller('firstCtrl' , function(){
//     this.myLesson = "FirstLesson"
// });
// app.controller('secondCtrl' , function(){
//     this.myLesson = "SecondLesson"
// });
// ����� 6 �����

// ���� 7 
// var app = angular.module('app', []);
// app.directive('foo', function () {
//     // // �������� �������(���� ������������)
//     // return function (scope, element, attrs) {
//     //     console.log('this is my directive')
//     // }
//     // ������� �������
//     // ���� ����������� ����� ����, ��� ��� ������� ����������� �� ��������
//     return {
//         link: function (scope, element, attrs) {
//             // �� ������� �� ������� �������� ��� ����������
//             element.on('click', function(){
//                 if (element.text() == 'foo'){
//                     element.text('bar');
//                 } else {
//                     element.text('foo');
//                 }
//             });
//             // // ������� �� ������� ��� �������, ������� ���������� ����
//             // console.log('this is my directive');
//             // console.log('scope' , scope); //����������
//             // console.log('element' , element); //��� �������
//             // console.log('attrs' , attrs) //��������
//             // element.text('this is my magic directive');
//         }
//     }
// });
// ����� 7 �����

// ���� 8
// var app = angular.module('app' , [])
// app.controller('mainCtrl' , function($scope){
//     $scope.money1 = '1.22$'
//     $scope.money2 = '$2.33'
//     $scope.money3 = '4.33'
// })
// // ��������� ������ ���, ��� �� � ����� ������ ���� $ ��� ������
// app.filter('moneyFilter' , function(){
//     return function(str){
//         var lastChar = str.slice(-1),
//             firstChar = str.slice(0 , -1),
//             slicedPard;

//             if (lastChar === '$'){
//                 slicedPard = str.slice(0, str.length - 1);
//                 return '$' + slicedPard;
//             } else if (firstChar === '$'){
//                 slicedPard = str.slice(1, str.length);
//                 return str;
//             } else {
//                 return '$' + str
//             }
//     }
// })
// ����� 8 �����

// ���� 9 
// var app = angular.module('app' , [])
// app.directive('fooBar' , function(){
//     return {
//         restrict: 'EACM', /*�� ���������*/
//         // restrict: 'A', */��������� �������� ����� �������*/        
//         // restrict: 'E', /*��������� �������� ����� �������*/
//         // restrict: 'C', /*��������� �������� ����� �����*/
//         // restrict: 'M', /*��������� �������� ����� ����������*/
//         link : function(){
//             console.log('fooBar')
//         }
//     }
// })
// ����� 9 �����

// ���� 10
// var app = angular.module('app' , [])
// app.directive('fooBar' , function(){
//     var bookmarks = [
//         {
//             id: 1,
//             name : "AngularJS"
//         },
//         {
//             id: 2,
//             name : "Angular 2.0"
//         },
//         {
//             id: 3,
//             name : "Angular 8.0"
//         }
//     ]

//     return{        
//         // template: "<div>Hello {{name}}</div>", /*��, ��� ���������� ������ ���������, � ��� ����� � ��������*/
//         template: "<div ng-repeat = 'bookmark in myBookmarks'>{{bookmark.name}}</div>", 
//         link : function(scope, element , attrs){
//             console.log('foobar');
//             scope.name = "Aleksandr";
//             scope.myBookmarks = bookmarks
//         }
//     }
// });
// ����� 10 �����

// ���� 11
// var app = angular.module('app' , []);

// app.controller('mainCtrl', function($scope){
//     $scope.name = "Bob"
// });

// app.directive('fooBar' , function(){
//     return {
//         restrict: 'E',
//         transclude: true, /*��������� ������ ���������� ���������*/
//         // template: 'This is my suoer directive <div ng-transclude></div>',
//         template: 'This is my super directive',
//         link : function(scope, element, attrs , ctrl, transclude){
//             console.log('This is my super directive');
//             transclude(scope , function(clone , scope){
//                 console.log('!' , clone , scope);
//                 element.append(clone)
//             })
//         }
//     }
// })
// ����� 11 �����

// ���� 12
// var app = angular.module('app' , []);
// app.directive('fooBar' , function(){
//     var bookmarks = [
//         {
//             id: 1,
//             name : "AngularJS"
//         },
//         {
//             id: 2,
//             name : "Angular 2.0"
//         },
//         {
//             id: 3,
//             name : "Angular 8.0"
//         }
//     ];

//     return {
//         restrict : 'E',
//         // template: "<div>element</div>", /*��� ��������� ��������*/
//         templateUrl: "bookmarks.html", /*��� ������� ��������*/
//         link : function(scope, element, attrs){
//             console.log('directive');
//             scope.bookmarks = bookmarks;
//         }
//     }
// })
// ����� 12 �����

// ���� 13
// var app = angular.module('app' , []);
// app.run(function($templateCache){
//     $templateCache.put('bookmarks.html' , "<div ng-repeat='bookmark in bookmarks'>{{bookmark.name}}</div>");
// });

// app.directive('fooBar' , function($templateCache){        
    
//     var bookmarks = [
//         {
//             id: 1,
//             name : "AngularJS"
//         },
//         {
//             id: 2,
//             name : "Angular 2.0"
//         },
//         {
//             id: 3,
//             name : "Angular 8.0"
//         }
//     ];

//     return {
//         restrict : 'E',
//         // template: "<div>element</div>", /*��� ��������� ��������*/
//         templateUrl: "bookmarks.html", /*��� ������� ��������*/
//         link : function(scope, element, attrs){
//             console.log('directive');
//             console.log( $templateCache)
//             scope.bookmarks = bookmarks;
//         }
//     }
// })
// ����� 13 �����


// ���� 14
// var app = angular.module('app' , []);

// app.controller('mainCtrl' , function($scope){
//     console.log('app scope' , $scope);
//     $scope.posts = [];
//     $scope.hello = 'Hello'
// });

// // Scope  ��������� �� ��������� ��������� scope �����������, �� � ���� ������ ������ �� ��� �� ��������
// app.directive('post' , function(){    
//     return{
//         scope: false, /*��������� , ���������� �� ������ scope*/
//         link: function( scope, element, attrs){
//             console.log('post scope' , scope);
//             scope.hello = 'hi'
//         }
//     }
// })
// ����� 14 �����

// ���� 15
// var app = angular.module('app' , []);

// app.controller('booksCtrl' , function($scope){
//     console.log('controller' , $scope);
//     $scope.name = 'Gary'
// });
// // ����� ������ � ���������� �����������, �� �� ����� ������ �������� ���������� � ����� ����������� �� ���������
// app.directive('book' , function(){
//     return{
//         scope: true,
//         template: "<div> My name is {{name}} <input type='text' ng-model='name'><div>",
//         link: function(scope, element, attrs){
//             console.log('directive' , scope);
//             console.log(scope.name)
//         }
//     }
// })
// ����� 15 ����� 
