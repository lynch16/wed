app.component('weddingComponent', {
  templateUrl: 'components/wedding/_wedding.html',
  controller: ["NgMap", '$filter', weddingController],
  controllerAs: "weddingCtrl"
});

function weddingController(NgMap, $filter) {
  var weddingCtrl = this;
  weddingCtrl.$onInit = function() {
    var stayIcon = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
    var activityIcon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
    var barIcon = 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png';
    weddingCtrl.places = [
        {
            id: 1,
            title: 'La Piece',
            position: '43.443193,-71.5934472',
            link: 'http://lapiece-theroom.com',
            type: 'Wedding Venue',
            centered: true
        }, {
            id: 2,
            title: 'Hampton Inn and Suites',
            position: '43.459487,-71.554438',
            icon: stayIcon,
            link: 'http://hamptoninn3.hilton.com/en/hotels/new-hampshire/hampton-inn-and-suites-tilton-CONTNHX/index.html',
            type: 'Accomodation',
            centered: false
        },{
            id: 3,
            title: 'Lake Opechee Inn and Spa',
            position: '43.545707,-71.4676527',
            icon: stayIcon,
            link: 'http://www.opecheeinn.com',
            type: 'Accomodation',
            centered: false
        },{
            id: 4,
            title: "Tilt'n Diner",
            position: '43.4551086,-71.5684757',
            icon: barIcon,
            link: 'http://www.thecman.com/restaurants-and-menus/tilt-n-diner.aspx',
            type: 'Restaurant',
            centered: false
        },{
            id: 5,
            title: "The Tilton Inn",
            position: '43.4424179,-71.5905597',
            icon: barIcon,
            link: 'https://www.thetiltoninn.com',
            type: 'Restaurant',
            centered: false
        },{
            id: 6,
            title: "The Barley House",
            position: '43.2075792,-71.5385574',
            icon: barIcon,
            link: 'http://concord.thebarleyhouse.com',
            type: 'Restaurant',
            centered: false
        },{
            id: 7,
            title: "The Common Man",
            position: '43.2076868,-71.6064085',
            icon: barIcon,
            link: 'http://www.thecman.com/restaurants-and-menus/common-man-restaurants/common-man-concord.aspx',
            type: 'Restaurant',
            centered: false
        },{
            id: 8,
            title: "Lago",
            position: '43.658111,-71.5012073',
            icon: barIcon,
            link: 'http://www.thecman.com/restaurants-and-menus/lago.aspx',
            type: 'Restaurant',
            centered: false
        },{
            id: 9,
            title: "Town Docks",
            position: '43.6550489,-71.4994487',
            icon: barIcon,
            link: 'http://www.thecman.com/restaurants-and-menus/town-docks.aspx',
            type: 'Restaurant',
            centered: false
        },{
            id: 10,
            title: "Weirs Beach - Lake Winnipesaukee",
            position: '43.6089939,-71.4781384',
            icon: activityIcon,
            link: 'http://www.lakewinnipesaukee.info/things-to-do',
            type: 'Activity',
            centered: false
        },{
            id: 11,
            title: "Bartlett Beach - Lake Winnisquam",
            position: '43.5257172,-71.5112133',
            icon: activityIcon,
            link: 'https://blog.nhstateparks.org/mt-major-family-friendly-hike',
            type: 'Activity',
            centered: false
        },{
            id: 12,
            title: "Pitmans Freight Room",
            position: '43.5272073,-71.475865',
            icon: activityIcon,
            link: 'http://pitmansfreightroom.com',
            type: 'Activity',
            centered: false
        },{
            id: 13,
            title: "Tanger Outlets",
            position: '43.4594829,-71.5619187',
            icon: activityIcon,
            link: 'https://www.tangeroutlet.com/tilton/stores',
            type: 'Activity',
            centered: false
        },{
            id: 14,
            title: "Just Maple",
            position: '43.4734576,-71.5907765',
            icon: activityIcon,
            link: 'http://www.justmaple.com',
            type: 'Activity',
            centered: false
        }];
    NgMap.getMap().then(function (map) {
        weddingCtrl.map = map;
    });
    weddingCtrl.mapCenter = $filter('filter')(weddingCtrl.places, {centered: true}, true)[0].position;
  };
  weddingCtrl.openWindow = function (event, place) {
      weddingCtrl.activeMarker = place;
      weddingCtrl.mapCenter = place.position;
      weddingCtrl.map.showInfoWindow('details', place);
  };
  weddingCtrl.hideWindow = function() {
   weddingCtrl.map.hideInfoWindow('details');
 };
}
