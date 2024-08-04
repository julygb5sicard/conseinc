const yargs = require('yargs');

yargs.command('hello', 'Print a hello message');
yargs.command('goodbye', 'Print a goodbye message');

yargs.argv;
