//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const ChatRoom = require("./models/ChatRoom");
const Friend = require("./models/Friend");
const Participant = require("./models/Participant");

//associations could go here!

// FRIENDS!!!! 😎
User.hasMany(Friend);
Friend.belongsTo(User);

// USERS WHO ARE PARTICIPATING 🥸
User.hasMany(Participant);
Participant.belongsTo(User);

// PARTICIPANTS WHO ARE CHATING 🥳
ChatRoom.hasMany(Participant);
Participant.belongsTo(ChatRoom);

module.exports = {
  db,
  models: {
    User,
    ChatRoom,
    Friend,
    Participant,
  },
};
