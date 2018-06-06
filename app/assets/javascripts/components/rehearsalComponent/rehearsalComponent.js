app.component('rehearsalComponent', {
  templateUrl: 'components/rehearsalComponent/_rehearsal.html',
  controller: [rehearsalController],
  controllerAs: "rehearsalCtrl"
});

function rehearsalController() {
  var rehearsalCtrl = this;
  rehearsalCtrl.$onInit = function() {
  };
}
