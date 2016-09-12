app.controller('mainCtrl', mainController)

mainController.$inject = ['mainFactory']

function mainController(mainFactory) {
  console.log('mainCtrl is loaded');

  self = this

  self.websites = websites;




}
