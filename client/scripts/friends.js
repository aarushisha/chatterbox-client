var Friends = {

  allFriends: [],

  add: function(friend) {
    Friends.allFriends.push(friend)
  },


  toggleStatus: function() {
  // console.log('clicked username');
  // console.log($('.username'));
  var allUsers = document.getElementsByClassName("username");
  var allMessages = document.getElementsByClassName("chat");
  console.log(allMessages);
  var newFriend = this.textContent;
  console.log(newFriend);
  for (var i = 0; i < allUsers.length; i++) {
    // console.log(this.textContent);
    console.log(App.username);
    if (allUsers[i].textContent !== App.username && allUsers[i].textContent === this.textContent) {
      Friends.allFriends.push(allUsers[i].textContent);
      console.log(Friends.allFriends);
      allUsers[i].style.color = '#84D9FF';
      allMessages[i].style.fontWeight = 'bold';
      allMessages[i].style.color = '#670CE8';
    }
  }

  }


}