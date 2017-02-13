/**
 * global socket.io variable to be used by all pages/or rather pages who use it
 */
$(document).ready(function() {
    const port = '3000';
    window.socket = io.connect('http://localhost:' + port);
    console.log('socket established');
});
