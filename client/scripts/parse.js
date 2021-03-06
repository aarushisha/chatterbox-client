var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function(message) {
    // todo: save a message to the server
    // var escapedMessage = _.template('<%-message%>');
    // console.log(escapedMessage);
    // console.log(message);
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      // Parse.readAll(),
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt', limit: 5},
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },

  // readAllByRoomName: function(roomname, successCB, errorCB = null) {
  //   $.ajax({
  //     url: Parse.server,
  //     type: 'GET',
  //     data: { order: '-createdAt', limit: 20},
  //     contentType: 'application/json',
  //     success: successCB,
  //     error: errorCB || function(error) {
  //       console.error('chatterbox: Failed to fetch messages', error);
  //     }
  //   });



};