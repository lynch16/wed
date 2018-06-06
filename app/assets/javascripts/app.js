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
  $urlRouterProvider.otherwise('/welcome');
  $stateProvider
    .state('root', {
      abstract: true,
      component: 'rootComponent'
    })
    .state('root.home', {
        url: '/welcome',
        component: 'homeComponent'
    })
    .state('root.wedding', {
      url: '/wedding',
      component: 'weddingComponent'
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
    .state('root.rehearsal', {
      url: '/rehearsal',
      component: 'rehearsalComponent'
    });

    var states = [
        'home',
        'wedding',
        'party',
        'story',
        'registry',
        'rehearsal',
    ];
    angular.forEach(states, function(state) {
        $stateProvider
        .state('root.' + state + '.contact', {
          url: '/contact',
          component: 'contactComponent'
      });
    });
}]);
