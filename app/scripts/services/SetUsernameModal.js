(function() {
  function SetUsernameModal($location, $cookies) {
    const SetUsernameModal = {}
    SetUsernameModal.showModal = false
    SetUsernameModal.newUsername = $cookies.get('blocChatCurrentUser')

    SetUsernameModal.open = function open() {
      console.log("SetUsernameModal().open");
      $cookies.remove('blocChatCurrentUser')
      SetUsernameModal.newUsername = ""
      SetUsernameModal.showModal = true
    }

    SetUsernameModal.ok = function ok() {
      console.log("SetUsernameModal().ok");
      if (!SetUsernameModal.newUsername) return

      $cookies.put('blocChatCurrentUser', SetUsernameModal.newUsername)
      console.log("SetUsernameModal().ok", SetUsernameModal.newUsername);
      SetUsernameModal.showModal = false
    }

    SetUsernameModal.resetUsername = function resetUsername() {
      console.log("SetUsernameModal().resetUsername()")
      $cookies.remove('blocChatCurrentUser')
      SetUsernameModal.newUsername = ""
      SetUsernameModal.showModal = true
    }

    return SetUsernameModal
  }

  angular
    .module('blocChat')
    .factory('SetUsernameModal', ['$location', '$cookies', SetUsernameModal])
})()
