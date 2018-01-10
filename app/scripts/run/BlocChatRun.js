(function() {
  function BlocChatRun($cookies, SetUsernameModal) {
    var currentUser = $cookies.get('blocChatCurrentUser')
    if (!currentUser || currentUser === '') {
      SetUsernameModal.showModal = true
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', 'SetUsernameModal', BlocChatRun])
})()
