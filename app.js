require("@babel/register")({
  presets: ["@babel/preset-env"],
});
require("dotenv").config();

const LoggingMessages = require("./functions/LoggingMessages");
const BanFunction = require("./functions/BanFunction");
const BanLogMessage = require("./functions/BanLogMessage");
const mainObj = require("./Store/mainObj");
const client = require("./connection/connection");

client.connect();
function addBanWord(message){
  let Msg = message.toLowerCase().split(" ");
  mainObj.banwords.push(Msg[1]);
}

client.on("chat", function (channel, user, message) {
  LoggingMessages(user.username, message);
  BanFunction(user, message);

  switch (user["username"]) {
    case "aflictor":
     if (message.startsWith("!bw")) {
        let banword = message.split(" ");
        mainObj.badword = banword[1];
        BanLogMessage(user);
      } else if (message === "!bc") {
        mainObj.badword = "";
        mainObj.messageArray = [];
      } else if (message.startsWith("!badd")) {
       
        addBanWord(message);
      } 
      break;
      case "dokinzik":
        if (message.startsWith("!bw")) {
           let banword = message.split(" ");
           mainObj.badword = banword[1];
           BanLogMessage(user);
         } else if (message === "!bc") {
           mainObj.badword = "";
           mainObj.messageArray = [];
         } else if (message.startsWith("!badd")) {
          
           addBanWord(message);
         } 
         break;

  default: {
   
  }
  break;
  }
});