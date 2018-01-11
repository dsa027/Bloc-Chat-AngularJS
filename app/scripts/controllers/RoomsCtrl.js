(function() {
  function RoomsCtrl(Room, Messages, $location) {
    this.room = Room
    this.messages = Messages

    this.isOnRoomsPage = function isOnRoomsPage() {
      return true;
      // return $location.url() === '/rooms'
    }
  }

  angular
    .module('blocChat')
    .controller('RoomsCtrl', ['Room', 'Messages', '$location', RoomsCtrl])
})()
