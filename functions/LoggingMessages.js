import mainObj from "../Store/mainObj";

const AddLogMessage = require("./AddLogMessage");

module.exports = function LoggingMessages(user, message) {
  mainObj.messageArray.length === 600
    ? (mainObj.messageArray = [])
    : mainObj.messageArray.push(AddLogMessage(user, message));
};
