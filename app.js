const express = require('express');
const app= express();
const router = express.Router();
const { parse } = require('path')
const serialPort = require('serialport')

const port = new serialPort(
    'COM3',
    {baudRate: 9600}
)
        
const parser = new serialPort.parsers.Readline()
        
port.pipe(parser)

app.get('/',(req,res)=>{
    const {text}=req.query
    parser.on('data', (line)=>{
    console.log('Arduino dice: ' + line);
    port.write(text);
})
res.json({msg:"success"})
});
    
app.listen('3001',()=>{
    console.log('Server is running on port 3000');
})