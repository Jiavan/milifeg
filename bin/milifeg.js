#!/usr/bin/env node --harmony
'use strict';
const app = require('commander');
const packageInfo = require('../package');

app
  .version(packageInfo.version)
  .usage('<command>');

app
  .command('list')
  .alias('l')
  .description('List all templates')
  .action(() => {
     require('../command/list')();
  });

app
  .command('add')
  .alias('a')
  .description('Add a templates')
  .action(() => {
    require('../command/add')();
  });

app.parse(process.argv);
if (process.argv.length < 3) {
  app.help();
}
