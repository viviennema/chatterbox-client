// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.


  },

  render: function(message) {
    // TODO: Render _all_ the messages.
    var html = '';

    for (var i = 0; i < message.length; i++) {
      html += MessagesView.renderMessage(message[i]);
    }

    $('#chats').append(html);
  },

  renderMessage: function(singleMsg) {
    // TODO: Render a single message.
    var msgId = singleMsg.message_id;
    var username = singleMsg.username || 'null';
    var text = singleMsg.text || 'null';

    for (var key in $('#chats')[0].children) {
      if (!$('#chats')[0].children[key].id) {
        var compiled = _.template(
          '<div id="tweet_' + msgId + '">' +
            '<div>' +
              '<%- username %>' +
            '</div>' +
            '<div>' +
              '<%- text %>' +
            '</div>' +
          '</div>'
        );
        return compiled(singleMsg);
      }
    }
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  },

};