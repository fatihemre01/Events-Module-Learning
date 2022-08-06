const EventEmitter = require("events");

class Logger extends EventEmitter {
    log(msg) {
        console.log(msg);

        this.emit("NewSignal", {id: 1, name: "John"})
    }
}

module.exports = Logger;