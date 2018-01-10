(function() {
  function NewRoomModalCtrl(Room) {
    this.showModal = false
    this.newRoom = ""

    this.open = function() {
      console.log("NewRoomModal.open()");
      this.showModal = true
    }

    this.ok = function() {
      console.log("NewRoomModal.ok()");
      if (!this.newRoom) return

      Room.add(this.newRoom)
      this.newRoom = ""
      this.showModal = false
    }

    this.cancel = function() {
      console.log("NewRoomModal.cancel()");
      this.newRoom = ""
      this.showModal = false
    }
  }

  angular
    .module('blocChat')
    .controller('NewRoomModalCtrl', ['Room', NewRoomModalCtrl])
})()
