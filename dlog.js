require('dotenv').config()
const fs = require('fs');
const {get_time} = require('./time');

let logFileDirectory = process.env.LOG_FILE_DIRECTORY

let debug_bus = {
    "debug_level": process.env.DEBUG_LEVEL,
    "last_issued": "",
    "bus": []
}

let dlog = (emoji = process.env.DEFAULT_EMOJI, level = process.env.DEFAULT_MESSAGE_LEVEL, parent = `anonymous`, message = "no message", code = false, logFile) => {
    return new Promise((resolve, reject) => {
        (async function(){
            let now = await get_time();

            if(!logFile) {
                logFile = `${logFileDirectory}/${now.date_precise}-log.txt`
            }

            let optimalLength = 15;
            if(parent.length <= optimalLength) {
                while(parent.length<=optimalLength) {
                    parent += " ";
                }
            }
            
            if(debug_bus.debug_level>=level) {
                //CONSOLE OUTPUT
                let status;
                if(code === 'ok' || code === false) {
                    status = `🤗`;
                }
                if(code === 'error' || code === true ) {
                    status = `👹`;
                }
                if(code === undefined) {
                    status = `🤧`;
                }
                let msg = `[ ${status} ] ${now.time_precise} ${emoji} ${level} ${parent} ${message}`;

                if(code === 'ok') console.log(msg);
                if(code === 'error') console.error(msg);

                fs.appendFile(logFile, `${msg}\r\n`, 'utf-8', (err, data) => {
                    if(err) console.error(err);
                });
            }
        })()
    });
}


module.exports = {
    debug_level: debug_bus.debug_level,
    debug_bus,
    dlog
}