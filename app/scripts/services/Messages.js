(function() {
  function Messages($firebaseArray) {
    const Messages = {}
    const ref = firebase.database().ref().child("messages").orderByChild('roomId')
    const messages = $firebaseArray(ref)

    Messages.activeRoom = ""

    Messages.all = messages

    Messages.filterByRoom = function filterByRoom() {
      return Messages.all.filter(message => {
        return message.roomId === Messages.activeRoom
      })
    }

    Messages.setActiveRoom = function setActiveRoom(room) {
      Messages.activeRoom = room
    }

    Messages.messageStyle = function(index) {
      const style = {
        'line-height': '1.25rem',
        padding: '8px'
      }
      if (index % 2 !== 0) style.background = 'white'
      else                 style.background = 'gainsboro'

      return style
    }

    return Messages
  }

  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', Messages])
})()
