app.component('homeComponent', {
  templateUrl: 'components/home/_home.html',
  controller: ["$state", homeController],
  controllerAs: "homeCtrl"
});

function homeController($state) {
  var homeCtrl = this;
  homeCtrl.$onInit = function() {
    var oneDay = 24 * 60 * 60 * 1000;
    var now = new Date();
    var weddingDate = new Date(2018, 07, 24);
    homeCtrl.countdown = Math.round(Math.abs((now.getTime() - weddingDate.getTime())/(oneDay)));
    if(homeCtrl.countdown > 1){
        homeCtrl.countdown = homeCtrl.countdown + " days";
    } else {
        homeCtrl.countdown = homeCtrl.countdown + " day";
    }
  };

  homeCtrl.backgroundImg = function(){
    var backgroundStyle;
    switch ($state.current.name) {
      case "root.wedding":
        backgroundStyle = {'background-image': 'url(assets/IMG_5729.jpg)'};
        // backgroundStyle = {'background-image': 'url(assets/IMG_4481.jpg)'};
        break;
      default:
        backgroundStyle = {};
        break;
    }
    return backgroundStyle;
  };
}
