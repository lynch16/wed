app.component('headerComponent', {
  templateUrl: 'components/header/_header.html',
  controller: headerController,
  controllerAs: "headerCtrl"
});

function headerController() {
  var headerCtrl = this;
  headerCtrl.$onInit = function() {
  };
}
