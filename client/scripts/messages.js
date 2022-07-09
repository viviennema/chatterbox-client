// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],
  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  // we can use array methods to add(push),splice(delete) to interact with the      //message
  addMessages: (newData) =>{

    if (Messages._data.length === 0) {
      for (let i = 0; i < newData.length; i++) {
        Messages._data.push(newData[i]);
      }
    }
    var latestDate = new Date(Messages._data[0].created_at);
    for (let i = 0; i < newData.length; i++) {
      var itemDate = new Date(newData[i].created_at);

      if (latestDate < itemDate) {
        Messages._data.unshift(newData[i]);
      } else {
        break;
      }

    }

  }




};