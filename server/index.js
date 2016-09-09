var chalk = require('chalk'), 
cR = chalk.red.bgRed,
cY = chalk.yellow.bgYellow,
cG = chalk.green.bgGreen,
cC = chalk.cyan.bgCyan,
cM = chalk.magenta.bgMagenta;
console.log(
'\n',
('░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n'),
('░░░░░░░░░░ ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄░░░░░░░░░\n'),
cR('░░░░░░░░'), ('▄▀░░░░░░░░░░░░▄░░░░░░░▀▄░░░░░░░\n'),
cR('░░░░░░░░'), ('█░░▄░░░░▄░░░░░░░░░░░░░░█░░░░░░░\n'),
cY('░░░░░░░░'), ('█░░░░░░░░░░░░▄█▄▄░░▄░░░█░▄▄▄░░░\n'),
cY('░'), ('▄▄▄▄'), cY('░'), ('█░░░░░░▀░░░░▀█░░▀▄░░░░░█▀▀░██░░\n'),
cG('░'), ('██▄▀██▄█░░░▄░░░░░░░██░░░░▀▀▀▀▀░░░░██░░\n'),
cG('░░'), ('▀██▄▀██░░░░░░░░▀░██▀░░░░░░░░░░░░░▀██░\n') ,
cC('░░░░'), ('▀████░▀░░░░▄░░░██░░░▄█░░░░▄░▄█░░██░\n'),
cC('░░░░░░░'), ('▀█░░░░▄░░░░░██░░░░▄░░░▄░░▄░░░██░\n'),
cM('░░░░░░░'), ('▄█▄░░░░░░░░░░░▀▄░░▀▀▀▀▀▀▀▀░░▄▀░░\n'),
cM('░░░░░░'), ('█▀▀█████████▀▀▀▀████████████▀░░░░\n'),
('░░░░░░░████▀░░███▀░░░░░░▀███░░▀██▀░░░░░░\n'),
('░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n')
);

var app = require('./server.js'); 
var port = 1337;

app.listen(port, function() {
  console.log(chalk.green('TreasureHunt RESTful API listening on port ') + chalk.red.bold(port));
});