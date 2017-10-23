app.component('rootComponent', {
  templateUrl: 'components/root/_root.html',
  controller: ["$state", rootController],
  controllerAs: "rootCtrl"
});

function rootController($state) {
  var rootCtrl = this;
  rootCtrl.$onInit = function() {
    var oneDay = 24 * 60 * 60 * 1000;
    var now = new Date();
    var weddingDate = new Date(2018, 07, 24);
    rootCtrl.countdown = Math.round(Math.abs((now.getTime() - weddingDate.getTime())/(oneDay)));
    if(rootCtrl.countdown > 1){
        rootCtrl.countdown = rootCtrl.countdown + " days";
    } else {
        rootCtrl.countdown = rootCtrl.countdown + " day";
    }
  };

  rootCtrl.backgroundImg = function(){
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
