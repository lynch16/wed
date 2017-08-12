var app = angular.module('app', [
  'ui.router',
  'templates',
  'ngAnimate',
  'ngMaterial',
  'ngMessages'
]).run(function () {
}).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.hashPrefix('');
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('root', {
      url: '/',
      component: 'rootComponent'
    })
    .state('root.wedding', {
      url: 'wedding',
      component: 'weddingComponent'
    })
    .state('root.contact', {
      url: 'contact',
      component: 'contactComponent'
    })
    .state('root.party', {
      url: 'wedding-party',
      component: 'partyComponent'
    })
    .state('root.story', {
      url: 'our-story',
      component: 'storyComponent'
    })
    .state('root.registry', {
      url: 'registry',
      component: 'registryComponent'
    })
    .state('root.faq', {
      url: 'FAQ',
      component: 'faqComponent'
    });
});
