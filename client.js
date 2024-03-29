
const { IP, PORT } = require('./constants');
const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  conn.on('connect', () => {
    console.log("Successfully connected to game server")
    conn.write('Name: EKS')
    // conn.write('Move: up')
    // setTimeout(() => { conn.write('Move: up'); }, 50);
  })
  // receives data from server
  conn.on('data', (data) => {
    console.log(data)
  })
 
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;

  
}

module.exports = { connect } ;