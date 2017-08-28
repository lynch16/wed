app.component('rootComponent', {
  templateUrl: 'components/root/_root.html',
  controller: rootController,
  controllerAs: "rootCtrl"
});

function rootController($state) {
  var rootCtrl = this;
  rootCtrl.$onInit = function() {
    var now = Date.now();
    var weddingDate = new Date(2018, 08, 24);
    rootCtrl.countdown = Math.round(Math.abs((now - weddingDate.getTime())/(26*60*60*1000)));
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
