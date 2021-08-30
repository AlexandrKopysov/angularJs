
// -- Урок 2 --
// angular.module('app', []).controller('myCtrl', function ($scope) {
//     $scope.hello = 55;
//     $scope.myBook = "AnguleJS"
// })
// -- Конец 2 урока --

// -- Урок 3 --
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
// -- Конец 3 урока --

// Урок 4
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
// Конец 4 урока

// Урок 5
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
// Конец 5 урока

// Урок 6
// var app = angular.module('app', []);
// app.controller('mainCtrl' , function($scope){
//     this.myLesson = "MainLesson"
//     this.addLesson = function (){
//         console.log('addLesson');
//     };
//     // $scope.mainCtrl = this; Лучше не использовать
// });
// app.controller('firstCtrl' , function(){
//     this.myLesson = "FirstLesson"
// });
// app.controller('secondCtrl' , function(){
//     this.myLesson = "SecondLesson"
// });
// Конец 6 урока

// Урок 7 
// var app = angular.module('app', []);
// app.directive('foo', function () {
//     // // Короткий вариант(мало используется)
//     // return function (scope, element, attrs) {
//     //     console.log('this is my directive')
//     // }
//     // Длинный вариант
//     // Линк срабатывает после того, как дом элемент отрисовался на странице
//     return {
//         link: function (scope, element, attrs) {
//             // По нажатию на элемент заменяем его содержимое
//             element.on('click', function(){
//                 if (element.text() == 'foo'){
//                     element.text('bar');
//                 } else {
//                     element.text('foo');
//                 }
//             });
//             // // Выведем по очереди все обьекты, которые возвращает линк
//             // console.log('this is my directive');
//             // console.log('scope' , scope); //Переменные
//             // console.log('element' , element); //ДОМ элемент
//             // console.log('attrs' , attrs) //Атрибуты
//             // element.text('this is my magic directive');
//         }
//     }
// });
// Конец 7 урока

// Урок 8
// var app = angular.module('app' , [])
// app.controller('mainCtrl' , function($scope){
//     $scope.money1 = '1.22$'
//     $scope.money2 = '$2.33'
//     $scope.money3 = '4.33'
// })
// // Фильтруем строки так, что бы в любом случае знак $ был первым
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
// Конец 8 урока

// Урок 9 
// var app = angular.module('app' , [])
// app.directive('fooBar' , function(){
//     return {
//         restrict: 'EACM', /*По умолчанию*/
//         // restrict: 'A', */Директива работает через атрибут*/        
//         // restrict: 'E', /*Директива работает через элемент*/
//         // restrict: 'C', /*Директива работает через класс*/
//         // restrict: 'M', /*Директива работает через коментарий*/
//         link : function(){
//             console.log('fooBar')
//         }
//     }
// })
// Конец 9 урока

// Урок 10
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
//         // template: "<div>Hello {{name}}</div>", /*То, что находиться внутри директивы, в том числе и разметка*/
//         template: "<div ng-repeat = 'bookmark in myBookmarks'>{{bookmark.name}}</div>", 
//         link : function(scope, element , attrs){
//             console.log('foobar');
//             scope.name = "Aleksandr";
//             scope.myBookmarks = bookmarks
//         }
//     }
// });
// Конец 10 урока

// Урок 11
// var app = angular.module('app' , []);

// app.controller('mainCtrl', function($scope){
//     $scope.name = "Bob"
// });

// app.directive('fooBar' , function(){
//     return {
//         restrict: 'E',
//         transclude: true, /*Сохраняем старое содержимое директивы*/
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
// Конец 11 урока

// Урок 12
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
//         // template: "<div>element</div>", /*Для небольших шаблонов*/
//         templateUrl: "bookmarks.html", /*Для больших шаблонов*/
//         link : function(scope, element, attrs){
//             console.log('directive');
//             scope.bookmarks = bookmarks;
//         }
//     }
// })
// Конуц 12 урока

// Урок 13
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
//         // template: "<div>element</div>", /*Для небольших шаблонов*/
//         templateUrl: "bookmarks.html", /*Для больших шаблонов*/
//         link : function(scope, element, attrs){
//             console.log('directive');
//             console.log( $templateCache)
//             scope.bookmarks = bookmarks;
//         }
//     }
// })
// Конец 13 урока


// Урок 14
// var app = angular.module('app' , []);

// app.controller('mainCtrl' , function($scope){
//     console.log('app scope' , $scope);
//     $scope.posts = [];
//     $scope.hello = 'Hello'
// });

// // Scope  директивы по умолчанию наследует scope контроллера, но в моем случае почему то это не работает
// app.directive('post' , function(){    
//     return{
//         scope: false, /*Настройка , отвечающая за импорт scope*/
//         link: function( scope, element, attrs){
//             console.log('post scope' , scope);
//             scope.hello = 'hi'
//         }
//     }
// })
// Конец 14 урока

// Урок 15
// var app = angular.module('app' , []);

// app.controller('booksCtrl' , function($scope){
//     console.log('controller' , $scope);
//     $scope.name = 'Gary'
// });
// // Имеем доступ к переменным контроллера, но не можем менять значение переменных в самом контроллере из директивы
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
// Конец 15 урока 
