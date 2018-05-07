---
title: Bloc-Chat-AngularJS
summary: A Web-based, SPA chat room application written in AngularJS
tech: Angular, Firebase, Node.js, JavaScript, HTML/CSS, Heroku, GitHub
---
[1]: https://bloc-chat-angular-dsa027.herokuapp.com/
[Heroku Site][1]

# Summary

  Chat rooms written in Angular

# Explanation

  This is a simplified version of the Bloc Jams React application, which has quite a bit more functionality (this version was written first).

  The front page is the only page. On the left is a narrow column with an input to create a new room, and a list of rooms.

  Clicking on a room name will open the room's chat messages onto the right-hand side of the screen. There's an input box that stays at the bottom of the screen for entering a text message. If you're signed in, your name will appear with the message, otherwise, no name will appear.

  Google Authentication is provided automatically; the user isn't asked to sign on, they're presented with the authorization screen.

  The application is generally broken down by
  - Rooms: the list of rooms that have been created
  - Messages: the list of messages attached to the selected room

# Problem

  As noted, this version of the chat rooms has less functionality than the React version and is the second Angular application written. This application is written quite a bit differently than than the React version. There controllers are RoomsCtrl and ModalCtrl. RoomsCtrl has access to rooms and messages and ModalCtrl is for the new room dialog. There are services for authentication, messages, rooms, and new room modal.

# Solution

  This project shows the practical application of several technologies:
  - Angular
    - The entire application is written for Angular. Controllers, and Services are used.
  - Firebase
  - Node.js
  - JavaScript
  - HTML/CSS
  - Heroku
  - GitHub

# Results

  Sereral enhancements could be made:
  - Sign In/Sign Out
  - Edit and Delete Rooms and Messages
  - Private rooms
  - See if someone else is online in the same room
  - See if someone else is typing in the same room

# Conclusion

  ToDos
  - Enhancements and bug fixes
