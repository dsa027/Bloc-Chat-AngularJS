(function() {
  function Room($firebaseArray) {
    const Room = {}
    const ref = firebase.database().ref().child("rooms")
    const rooms = $firebaseArray(ref)

    Room.all = rooms

    return Room
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room])
})()
