(function() {
  function Authenticate($rootScope, $cookies, $timeout, $firebaseArray, SetUsernameModal) {
    const Authenticate = {}

    Authenticate.newUsername = ''

    Authenticate.authenticateUser = function authenticateUser() {
      // this.currentUser = $cookies.get('blocChatCurrentUser')
      if (!Authenticate.newUsername || Authenticate.newUsername === '') {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE).then(
          function() {
            let provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(result) {
              $rootScope.$apply(function() {
                Authenticate.newUsername = ("'" + result.user.displayName + "'")
              })
              var token = result.credential.accessToken;
              console.log(token);
              console.log(result);
              // The signed-in user info.
              console.log("Authenticate.newUsername:", Authenticate.newUsername );
              console.log("this.currentUser:", this.currentUser);
              console.log("Signed in as:", result.user.uid);
            }).catch(function(error) {
              console.error("Authentication failed:", error);
            })
        })
      }
    }

    Authenticate.signOut = function signOut() {
      firebase.auth().signOut().then(function() {
        $rootScope.$apply(function() {
          Authenticate.newUsername = ""
          Authenticate.authenticateUser()
        })
      })
    }

    return Authenticate
  }

  angular
    .module('blocChat')
    .factory('Authenticate', [
        '$rootScope', '$cookies', '$timeout', '$firebaseArray', 'SetUsernameModal', Authenticate
      ])
})()
