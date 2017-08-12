app.component('rootComponent', {
  templateUrl: 'components/root/_root.html',
  controller: rootController,
  controllerAs: "rootCtrl"
});

function rootController($state) {
  var rootCtrl = this;
  rootCtrl.$onInit = function() {
  };

  rootCtrl.backgroundImg = function(){
    if ($state.current.name === "root.wedding"){
      return {'background-image': 'url(assets/background1.jpg)'}
    }
  }
}
