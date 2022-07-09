// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.refresh();
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    var message = {
      roomname: '',
      text: $('#message').val(),
      username: 'yui/vivienne'
    };

    // // store locally
    // Messages._data.unshift(message);

    // store to the server
    Parse.create(message, function() {
      console.log('POST request made successfully');
      App.fetch();
    }, function() {
      console.log('Failed to send POST');
    });

    // Messages._data.unshift(message);

    // MessagesView.renderMessage(message);



    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    // FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

  refresh: function() {
    setInterval(App.fetch, 1500);
  }
};