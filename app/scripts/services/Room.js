(function() {
  function Room($firebaseArray) {
    const Room = {}
    const ref = firebase.database().ref().child("rooms")
    let rooms = $firebaseArray(ref)

    Room.all = rooms

    Room.add = function add(room) {
      rooms.$add({roomId: room})
    }

    return Room
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room])
})()
