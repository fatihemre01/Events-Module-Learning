const Logger = require("./logger");
const logger = new Logger();

logger.on("NewSignal", function(e){
    console.log("We got this", e);
})

logger.log("New message");