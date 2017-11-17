angular.module('app').factory('contactService', ['$http', function ($http) {
    var submitContactForm = function (contactForm) {
        return $http.post('/api/contact', contactForm);
    };
    return {
        submitContactForm: submitContactForm,
    };
}]);
