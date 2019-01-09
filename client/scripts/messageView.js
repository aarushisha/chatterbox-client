var MessageView = {

  render: _.template(`
      <div class="chat">
      <div class="username" onclick='Friends.toggleStatus.call(this)'><%- username %></div>
      <div><%- text %></div>
      </div>
    `)

};