import mainObj from "../Store/mainObj.js";

const client = require("../connection/connection");

module.exports = function BanFunction(user, message) {
  let array = message.toLowerCase().split(" ");
  if (mainObj.moders.indexOf(user.username) > -1) {
    return;
  } else if (array.some((el) => el === mainObj.badword)) {
    client.say(
      `${process.env.CHANNEL}`,
      `/ban ${user.username} за-${mainObj.badword}`
    );
  } else
    array.some((ele) => {
      if (mainObj.banwords.includes(ele) === true) {
        let index = mainObj.banwords.indexOf(ele);
        setTimeout(() => {
          client.say(
            `${process.env.CHANNEL}`,
            `/ban ${user.username} за-${mainObj.banwords[index]}`
          );
        }, 400);
      }
    });
};
