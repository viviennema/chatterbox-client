// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.


  },

  render: function() {
    // TODO: Render _all_ the messages.
    var html = '';

    // console.log(Messages._data);
    for (var i = 0; i < Messages._data.length; i++) {
      html += MessagesView.renderMessage(Messages._data[i]);
    }


    $('#chats').html(html);
  },

  renderMessage: function(singleMsg) {
    // TODO: Render a single message.
    var username = singleMsg.username || 'Anonymous';
    var text = singleMsg.text || 'Empty Message';

    // for (var key in $('#chats')[0].children) {
    //   if (!$('#chats')[0].children[key].id) {
    var compiled = _.template(
      '<div>' +
              '<%- username %>' +
            '</div>' +
            '<div>' +
              '<%- text %>' +
            '</div>'
    );
    return compiled(singleMsg);
    // }
    // }
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  },

};