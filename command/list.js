'use strict';

const co = require('co');
const prompt = require('co-prompt');
const chalk = require('chalk');
const tplConf = require('../templates');

module.exports = () => {
  let count = 0;
  for (let key in tplConf.templates) {
    console.log(chalk.grey(`@${key} -> ${tplConf.templates[key].git}`));
    count++;
  }
  console.log(chalk.green(`All ${count} templates`));
};
