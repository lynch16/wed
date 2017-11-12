app.component('weddingComponent', {
  templateUrl: 'components/wedding/_wedding.html',
  controller: ["NgMap", weddingController],
  controllerAs: "weddingCtrl"
});

function weddingController(NgMap) {
  var weddingCtrl = this;
  weddingCtrl.$onInit = function() {
    weddingCtrl.places = {
        stay: [{
            title: 'Hampton Inn and Suites',
            position: '43.459487,-71.554438'
        },{
            title: 'Lake Opechee Inn and Spa',
            position: '43.545707,-71.4676527'
        }],
        eat: {

        },
        activity: {

        }
    }
    NgMap.getMap().then(function(map){
      console.log(map.getCenter());
    });
  };
}
