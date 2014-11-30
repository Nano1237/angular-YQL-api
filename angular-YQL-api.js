angular.module('angular-YQL-api', [])

        /**
         * @description The Api Url of the YQL-api
         */
        .constant('angular-YQL-api.apiUrl', 'https://query.yahooapis.com/v1/public/yql?q=')

        /**
         * 
         * @description The api Service for jsonp calls to the YQL-api
         * @param {type} apiUrl The Target destination of the jsonp call
         * @param {type} $http The Ajax Service
         * @param {type} $q The Async reponse service
         * @returns {unresolved}
         */
        .factory('angular-YQL-api.api', [
            'angular-YQL-api.apiUrl',
            '$http',
            '$q',
            function(apiUrl, $http, $q) {
                return function(query, options) {
                    options = typeof options !== 'object' ? {} : options;
                    options.returnFormat = options.returnFormat || 'json';
                    var deferred = $q.defer();
                    var proxy_url = apiUrl + encodeURIComponent(query) + '&format=' + options.returnFormat + '&diagnostics=false&callback=JSON_CALLBACK';
                    $http.jsonp(proxy_url).success(deferred.resolve);
                    return deferred.promise;
                };
            }
        ])

        /**
         * 
         * @description Provides a list of useful methods for the api calls
         * @param {type} api The Api Service for the Calls
         * @returns {_L37.Anonym$3}
         */
        .factory('YQL', [
            'angular-YQL-api.api',
            function(api) {
                return {
                    api: api,
                    html: function(url, format) {
                        var yql = 'select * from html where url="' + url + '"';
                        return this.api(yql, {
                            returnFormat: format || 'text'
                        });
                    }
                };
            }
        ]);