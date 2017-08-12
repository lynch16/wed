app.component('storyComponent', {
  templateUrl: 'components/story/_story.html',
  controller: storyController,
  controllerAs: "storyCtrl"
});

function storyController() {
  var storyCtrl = this;
  storyCtrl.$onInit = function() {
  };
}
