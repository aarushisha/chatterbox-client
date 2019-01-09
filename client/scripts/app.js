var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages

    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data);
      var roomMessages = [];
      var countMessage = 0;
      for (var i = 0; i < data.results.length; i++) {
        console.log($('#rooms select :selected').val());
        console.log(data.results[i].roomname);
        if ($('#rooms select :selected').val() === data.results[i].roomname) {
          console.log(true);
          roomMessages.push(data.results[i]);
          countMessage++;
        }
      }
      console.log(roomMessages);
      console.log(countMessage);
     //$('#rooms select :selected') === data.results[i].roomname 
     //compare it too data.results[i].roomname 

      MessagesView.render(roomMessages);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};