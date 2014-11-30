angular.module('myApp', [
    'angular-YQL-api'
]).run([
    'YQL',
    function(YQL) {
        YQL.html('http://ger.whatsnewonnetflix.com/').then(function(a){
            console.log('netflix: ',a);
        });
    }
]);