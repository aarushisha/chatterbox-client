var RoomsView = {
  $rooms: $('#rooms'),
  $button: $('#rooms button'),
  $select: $('#rooms select'),
  allRooms: [],

  initialize: function() {
    $('#rooms button').on('click', RoomsView.renderRoom);
  },

  render: function(allRooms) {
    // for (var i = 0; i < RoomsView.allRooms.length; i++) {
    //   $("#roomOptions").append('<option value="' + RoomsView.allRooms[i]+ '">' + RoomsView.allRooms[i] + '</option>');
    // }
    for (var i = 0; i < allRooms.length; i++) {
      console.log(allRooms[i]);
      RoomsView.renderRoom(allRooms[i]);
  }
},

  renderRoom: function() {
    console.log('hi from renderRoom');
    var $addRoom = $('#addRoom');
    console.log($addRoom);
    RoomsView.allRooms.push($addRoom.val());
    $('#rooms select').append('<option value="' + $addRoom.val()+ '">' + $addRoom.val() + '</option>');
    Rooms.add($addRoom.val());
    //when you click 'add room', takes the $addRoom.val()
  },

  roomSelect: $('#rooms select').change(function() {
    $('#chats').empty();
    App.fetch();
  })



};
