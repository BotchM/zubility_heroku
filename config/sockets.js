const chalk = require('chalk');

module.exports = (io) => {
    /**
     * Socket.io
     */
     io.on('connection', function(socket){
       console.log('a user connected');
      /*
        When a client disconnects from the server, the event "disconnect" is automatically
        captured by the server. It will then emit an event called "userDisconnected" to
        all participants with the id of the client that disconnected
      */
      socket.on("disconnect", function() {
        console.log('a user disconnected');
      });

      socket.on('task', (task) => {
        console.log(task); //then save to db
        //socket.emit('task', task)//emit to user again
      });

     });
}
