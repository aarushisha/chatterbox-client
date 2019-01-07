var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    var $message = $('#message');
    var $select = $('#rooms select');
    console.log($message.val());
    event.preventDefault();
    Parse.create({username: App.username, roomname: $('#rooms select :selected').text(), text: $message.val()});
    // location.reload();
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};