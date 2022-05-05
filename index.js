const express = require('express');
const app=express();
const router = express.Router();
const cors=require('cors');

app.use(cors())

var SerialPort = require('serialport');
const parsers = SerialPort.parsers;

const parser = new parsers.Readline({
    delimiter: '\r\n'
});

var port = new SerialPort('/dev/tty.wchusbserialfa1410',{ 
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

port.pipe(parser);

router.get("/text",(req,res)=>{
    const {total} = req.params;
    port.write( "hi there" );
})

app.listen((3000),()=>{
    console.log(`server starting at port 3000`);
});