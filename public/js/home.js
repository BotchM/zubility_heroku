/**
 * socket.io
 */
$(document).ready(function() {
  var socket = window.socket;

    //We'll save our session ID in a variable for later
  var sessionId = '';

  /*
  When the client successfully connects to the server, an
  event "connect" is emitted. Let's get the session ID and
  log it. Also, let the socket.IO server there's a new user
  with a session ID and a name. We'll emit the "newUser" event
  for that.
  */
  socket.on('connect', function () {
   sessionId = socket.io.engine.id;
   console.log('Connected ' + sessionId);
  });

  if (annyang) {
    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening.
    annyang.start({ autoRestart: true, continuous: false });

    // annyang.addCallback('resultMatch', function(userSaid, commandText, phrases) {
    //   console.log(userSaid); // sample output: 'hello'
    //   console.log(commandText); // sample output: 'hello (there)'
    //   console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
    // });
  }
});
