// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  //_data: {username: []
  //
  //       }
  _data: [],

  getData: function() {
    $.ajax({
      // This is the url you should use to communicate with the API server.
      url: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,
      type: 'GET',
      contentType: 'application/json',
      success: data => {
        this.addToDatabase(data);
      },
      error: data => {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },

  addToDatabase: function(data) {
    for (var i = 0; i < data.length; i++) {
      Messages._data.push(this.addOneUser(data[i]));
    }

    console.log(Messages._data);
  },

  addOneUser: function(data) {
    console.log(data);

    var singleUser = {};
    if (!singleUser['username']) {
      singleUser['username'] = data['username'];
      singleUser.message = [];
      singleUser.message.push(data['text']);
    } else {
      singleUser.message.push(data['text']);
    }

    return singleUser;
  }

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  // we can use array methods to add(push),splice(delete) to interact with the      //message

};