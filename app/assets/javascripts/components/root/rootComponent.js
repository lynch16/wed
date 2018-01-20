app.component('rootComponent', {
  templateUrl: 'components/root/_root.html',
  controller: ['$state', rootController],
  controllerAs: "rootCtrl"
});

function rootController($state) {
  var rootCtrl = this;
  rootCtrl.$onInit = function() {
  };
  rootCtrl.openContact = function () {
      console.log($state.get($state.current.name + '.contact'));
      $state.go($state.current.name + '.contact');
  };
}
