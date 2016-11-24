'use strict';
const co = require('co');
const prompt = require('co-prompt');
const chalk = require('chalk');
const fs = require('fs');
const tplConf = require('../templates');
const path = require('path');
const list = require('./list');

module.exports = () => {
  co(function *() {
    let tplName = (yield prompt('name: (test) ')) || 'test';
    let gitUrl = (yield prompt('git: ')) || 'null';
    let branch = (yield prompt('branch: (master) ')) || 'master';

    if (tplConf.templates[tplName]) {
      console.log(chalk.red('Error: Template has already exist'));
      process.exit();
    }

    tplConf.templates[tplName] = {};
    tplConf.templates[tplName]['git'] = gitUrl;
    tplConf.templates[tplName]['branch'] = branch;

    let dest = path.join(__dirname, './../templates/index.json');
    fs.writeFile(dest, JSON.stringify(tplConf), 'utf-8', (err) => {
      if (err) {
        console.log(err);
        process.exit();
      }
      list();
      console.log();
      console.log(chalk.green('✔ Add template success'));
      process.exit();
    });
  });
};
