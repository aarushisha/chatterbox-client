var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(messagesArray) {
    console.log(messagesArray.length);
    for (var i = 0; i < messagesArray.length; i++) {
      console.log(messagesArray[i]);
      if (messagesArray[i].username !== undefined){
        MessagesView.renderMessage(messagesArray[i]);
     }
   }
  },

  renderMessage: function(message) {
    var compiled = MessageView.render(message);
    console.log(compiled);
    $("#chats").append(compiled);
  },

  // refresh: $('#refresh').click(function() {
    refresh: $("#refresh").on('click', function() {
    location.reload();
    // // MessagesView.render(data.results);
    // console.log("running refresh");
    // event.preventDefault();
    // Parse.readAll();
 })

};