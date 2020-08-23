const client = require("../connection/connection");
const mainObj = require("../Store/mainObj");
function BanLogMessage(user) {
  let FilteredMessages = mainObj.messageArray.filter((obj) =>
    obj.message.includes(mainObj.badword)
  );
  function banmessage(obj) {
    client.say(`${process.env.CHANNEL}`, `/ban ${obj.user} за-${mainObj.badword} `);
  }
  function ban(obj) {
    setTimeout(() => banmessage(obj), 500);
  }
  if (mainObj.moders.indexOf(user.username) > -1) {
    return;
  } else FilteredMessages.forEach((obj) => ban(obj));
}
module.exports = BanLogMessage;
