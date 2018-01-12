(function() {
  function BlocChatRun(Authenticate) {
    Authenticate.authenticateUser()
  }

  angular
    .module('blocChat')
    .run(['Authenticate', BlocChatRun])
})()
