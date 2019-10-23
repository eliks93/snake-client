let connection;
const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit()
  } if (data === 'w') {
    connection.write('Move: up')
  }
  if (data === 'a') {
    connection.write('Move: left')
  }
  if (data === 's') {
    connection.write('Move: down')
  }
  if (data === 'd') {
    connection.write('Move: right')
  } 
  if (data === 'g') {
    connection.write('Say: Good Game!')
  }
  if (data === 'h') {
    connection.write('Say: I AM THE BEST!!!!')
  }
  if (data === 'f') {
    connection.write('Say: Ryan Reynolds > Paul Rudd')
  }
}
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
}

module.exports = { setupInput }
