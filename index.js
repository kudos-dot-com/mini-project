const { parse } = require('path')
const serialPort = require('serialport')


class Connection{
    newConnection(str){
        const port = new serialPort(
            'COM3',
            {baudRate: 9600}
        )
        
        const parser = new serialPort.parsers.Readline()
        
        port.pipe(parser)
        parser.on('data', (line)=>{
            console.log('Arduino dice: ' + line);
            port.write(str)
        })
    }
}

const connection = new Connection();
connection.newConnection("fcuk you bitch!");
module.exports = connection;