(function() {
  function Messages($firebaseArray, Authenticate) {
    const Messages = {}
    const ref = firebase.database().ref().child("messages").orderByChild('sentAt')
    const messages = $firebaseArray(ref)

    Messages.activeRoom = ""
    Messages.newMessage = ""
    Messages.all = messages

    Messages.filterByRoom = function filterByRoom() {
      return Messages.all.filter(message => {
        return message.roomId === Messages.activeRoom
      })
    }

    Messages.setActiveRoom = function setActiveRoom(room) {
      Messages.activeRoom = room
    }

    Messages.sendMessage = function sendMessage() {
      console.log("Messages.sendMessage()", Messages.newMessage);
      let time = getTime()
      messages.$add({
          roomId: Messages.activeRoom,
          content: Messages.newMessage,
          sentAt: time,
          username: Authenticate.newUsername.replace(/^['"](.*)['"]$/, '$1')
      })
      Messages.newMessage = ""
    }

    const doubleDigit = function doubleDigit(number) {
      return (number < 10) ? "0" + number : number
    }

    const getTime = function getTime() {
      const date = new Date();
      let hours = date.getHours()
      let ampm = hours >= 12 ? "PM" : "AM"
      hours = hours > 12 ? hours - 12 : hours

      return (
          hours +
          ":" +
          doubleDigit(date.getMinutes()) +
          ampm
      )
    }

    return Messages
  }

  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', 'Authenticate', Messages])
})()
