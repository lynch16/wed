app.component('weddingComponent', {
  templateUrl: 'components/wedding/_wedding.html',
  controller: ["NgMap", weddingController],
  controllerAs: "weddingCtrl"
});

function weddingController(NgMap) {
  var weddingCtrl = this;
  weddingCtrl.$onInit = function() {
    NgMap.getMap().then(function(map){
      console.log(map.getCenter());
    });
  };
}
