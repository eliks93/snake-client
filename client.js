

const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.149',
    port: 50541
  });
  // receives data from server
  conn.on('data', (data) => {
    console.log(data)
  })
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;

  
}

module.exports = { connect } ;