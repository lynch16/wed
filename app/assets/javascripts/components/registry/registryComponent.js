app.component('registryComponent', {
  templateUrl: 'components/registry/_registry.html',
  controller: registryController,
  controllerAs: "registryCtrl"
});

function registryController() {
  var registryCtrl = this;
  registryCtrl.$onInit = function() {
  };
}
