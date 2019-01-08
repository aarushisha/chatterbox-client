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

  roomSelect: $('#rooms select').change(function()  {
    //selecting an option, you want to clear all chats 
    //only render chats that show that selected?
    console.log($('#rooms select :selected').text());
    console.log(messagesArray[i].roomname);
    // if ($('#rooms select :selected').text() !== messagesArray[i].roomname) {
      // $('#chats').empty();
    // }
  })
};