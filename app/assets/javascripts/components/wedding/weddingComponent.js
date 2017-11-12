app.component('weddingComponent', {
  templateUrl: 'components/wedding/_wedding.html',
  controller: ["NgMap", weddingController],
  controllerAs: "weddingCtrl"
});

function weddingController(NgMap) {
  var weddingCtrl = this;
  weddingCtrl.$onInit = function() {
    var stayIcon = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
    var activityIcon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
    weddingCtrl.places = [
        {
            title: 'La Piece',
            position: '43.443193,-71.5934472',
            centered: true
        }, {
            title: 'Hampton Inn and Suites',
            position: '43.459487,-71.554438',
            icon: stayIcon,
            centered: false
        },{
            title: 'Lake Opechee Inn and Spa',
            position: '43.545707,-71.4676527',
            icon: stayIcon,
            centered: false
        }];
    NgMap.getMap();
  };
}
