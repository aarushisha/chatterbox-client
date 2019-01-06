var RoomsView = {
  $rooms: $('#rooms'),
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  
  },

  render: function() {
    $button.click(function(){
      $("#rooms").append('<option value="' + $("#newRoom").val() + '">' + $("#newRoom").val() + '</option>');
      })
  }

};
