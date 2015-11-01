var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var GalvanizeExpreessGenerator = yeoman.generators.Base.extend({

  promptUser: function() {
    // greeting
    console.log(chalk.magenta("Welcome to Galvanize's MEAN app Generator"));
  },

  createApp: function(){
    this.directory('./src/client/', './src/client/');
    this.directory('./src/server/', './src/server/');
    this.copy('package.json');
    this.copy('_gitignore', '.gitignore');
    this.copy('gulpfile.js', 'gulpfile.js');
  },

});

module.exports = GalvanizeExpreessGenerator;
