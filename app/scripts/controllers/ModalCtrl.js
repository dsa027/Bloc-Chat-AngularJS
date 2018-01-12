(function() {
  function ModalCtrl($location, Authenticate, NewRoomModal) {
    this.authenticate = Authenticate
    this.newRoom = NewRoomModal

    this.isOnRoomsPage = function isOnRoomsPage() {
      return true
      // return $location.url() === '/rooms'
    }

    this.resetUsername = function resetUsername() {
      console.log("ModalCtrl().resetUsername()")
      // $cookies.remove('blocChatCurrentUser')
      Authenticate.signOut()
    }
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', [
        '$location', 'Authenticate', 'NewRoomModal', ModalCtrl
    ])
})()
