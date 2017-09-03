var app = angular.module('app', [
  'ui.router',
  'templates',
  'ngAnimate',
  'ngMaterial',
  'ngMessages',
  'ngMap'
]).run(function () {
}).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.hashPrefix('');
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('root', {
      url: '/',
      component: 'rootComponent'
    })
    .state('wedding', {
      url: '/wedding',
      component: 'weddingComponent'
    })
    .state('contact', {
      url: '/contact',
      component: 'contactComponent'
    })
    .state('party', {
      url: '/wedding-party',
      component: 'partyComponent'
    })
    .state('story', {
      url: '/our-story',
      component: 'storyComponent'
    })
    .state('registry', {
      url: '/registry',
      component: 'registryComponent'
    })
    .state('faq', {
      url: '/FAQ',
      component: 'faqComponent'
    });
}]);
