app.component('weddingComponent', {
  templateUrl: 'components/wedding/_wedding.html',
  controller: weddingController,
  controllerAs: "weddingCtrl"
});

function weddingController() {
  var weddingCtrl = this;
  weddingCtrl.$onInit = function() {
  };
}
