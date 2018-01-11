(function() {
  function ModalCtrl($location, SetUsernameModal, NewRoomModal) {
    this.setUsername = SetUsernameModal
    this.newRoom = NewRoomModal

    this.isOnRoomsPage = function isOnRoomsPage() {
      return true
      // return $location.url() === '/rooms'
    }
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', [
        '$location', 'SetUsernameModal', 'NewRoomModal', ModalCtrl
    ])
})()
