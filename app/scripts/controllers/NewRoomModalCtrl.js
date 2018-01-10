(function() {
  function NewRoomModalCtrl(Room, $location) {
    this.showModal = false
    this.newRoom = ""

    this.open = function open() {
      this.showModal = true
    }

    this.ok = function ok() {
      if (!this.newRoom) return

      Room.add(this.newRoom)
      this.newRoom = ""
      this.showModal = false
    }

    this.cancel = function cancel() {
      this.newRoom = ""
      this.showModal = false
    }

    this.isOnRoomsPage = function isOnRoomsPage() {
      return $location.url() === '/rooms'
    }
  }

  angular
    .module('blocChat')
    .controller('NewRoomModalCtrl', ['Room', '$location', NewRoomModalCtrl])
})()
