var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(messagesArray) {
    // console.log(messagesArray.length);
    for (var i = 0; i < messagesArray.length; i++) {
      // console.log(messagesArray[i]);
      if (messagesArray[i].username !== undefined){
        MessagesView.renderMessage(messagesArray[i]);
     }
   }

  },

  renderMessage: function(message) {
    var compiled = MessageView.render(message);
    // console.log(compiled);
    $("#chats").append(compiled);
  },

//   // refresh: $('#refresh').click(function() {
    refresh: $("#refresh").on('click', function() {
    $('#chats').empty();
    App.fetch();
  }),

  // roomSelect: $('select[name="dropdown"]').change(function()  {
  //   //selecting an option, you want to clear all chats 
  //   //only render chats that show that selected?
  //   console.log($('#rooms select :selected').text());
  //   alert('You are now entering ' + $('#rooms select :selected').text() + '!');
  //   $('#chats').empty();
  //   Parse.readAll(//callback here filter and then render)
    
  // })

  handleClick: function(event) {
    // Get username from data attribute
    var username = $(event.target).data('username');
    if (username === undefined) { return; }

    Friends.toggleStatus(username, MessagesView.render);
      }
};