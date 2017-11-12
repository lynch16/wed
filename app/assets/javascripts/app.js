var app = angular.module('app', [
  'ui.router',
  'ui.bootstrap',
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
      abstract: true,
      component: 'rootComponent'
    })
    .state('root.home', {
        url: '/',
        component: 'homeComponent'
    })
    .state('root.wedding', {
      url: '/wedding',
      component: 'weddingComponent'
    })
    .state('root.contact', {
      url: '/contact',
      component: 'contactComponent'
    })
    .state('root.party', {
      url: '/wedding-party',
      component: 'partyComponent'
    })
    .state('root.story', {
      url: '/our-story',
      component: 'storyComponent'
    })
    .state('root.registry', {
      url: '/registry',
      component: 'registryComponent'
    })
    .state('root.faq', {
      url: '/FAQ',
      component: 'faqComponent'
    });
}]);
