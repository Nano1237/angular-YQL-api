# angular-YQL-api

Have you ever had a problem with (for example) the same origin policy when using javascript?

Lets say you want to use a external RSS feed inside of your angularjs app. How can you receive the XML without a backend?

The solution is the YQL (Yahoo Query Language) api. 
###Usage

- Set the `angular-YQL-api` as dependency
```javascript
angular.module('myApp', [
    'angular-YQL-api'
]);
```
- Include the `YQL` factory
```javascript
myApp.controller('ExampleCtrl',[
    'YQL',
    function(YQL) {
       //your code goes here
    }
]);
```
- Get any Website you like
```javascript
YQL.html('https://www.google.com/').then(function(a){
    console.log('google: ',a);
});
```

How the api exacly works can you read [here](https://developer.yahoo.com/yql).