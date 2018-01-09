(function() {
  function RoomsCtrl(Room) {
    this.room = Room
  }

  angular
    .module('blocChat')
    .controller('RoomsCtrl', ['Room', RoomsCtrl])
})()
