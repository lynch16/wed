app.component('contactComponent', {
  templateUrl: 'components/contact/_contact.html',
  controller: contactController,
  controllerAs: "contact"
});

function contactController() {
  var contact = this;
  contact.$onInit = function() {
  };
}
