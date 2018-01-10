(function() {
  function NewRoomModal($location, Room) {
    const NewRoomModal = {}

    NewRoomModal.showModal = false
    NewRoomModal.newRoom = ""

    NewRoomModal.open = function open() {
      console.log("open");
      NewRoomModal.showModal = true
    }

    NewRoomModal.ok = function ok() {
      if (!NewRoomModal.newRoom) return

      Room.add(NewRoomModal.newRoom)
      NewRoomModal.newRoom = ""
      NewRoomModal.showModal = false
    }

    NewRoomModal.cancel = function cancel() {
      NewRoomModal.newRoom = ""
      NewRoomModal.showModal = false
    }

    return NewRoomModal
  }

  angular
    .module('blocChat')
    .factory('NewRoomModal', ['$location', 'Room', NewRoomModal])
})()
