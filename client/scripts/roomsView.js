// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.renderRoom('lobby');
    this.renderRoom('test');
  },

  render: function() {
    // TODO: Render out the list of rooms.
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    var compiled = _.template(
      `<option value=${roomname}>
        <%- roomname %>
      </option>`
    );

    $('#rooms select').append(compiled({roomname: roomname}));
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    $('#rooms button').click(function() {
      this.renderRoom('room1');
    });
  }

};
