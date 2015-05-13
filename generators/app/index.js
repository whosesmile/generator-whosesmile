'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    yeoman.generators.Base.apply(this, arguments);

    // Nothing todo
  },

  prompting: function () {

    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the superb ' + chalk.red('Whosesmile') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: "Your project name? ",
      default: this.appname
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  // configuring: function () {

  // },

  writing: {
    app: function () {
      this.directory('src', 'src');
      this.template('_bower.json', 'bower.json');
      this.template('_package.json', 'package.json');
      this.template('_Gruntfile.js', 'Gruntfile.js');
    },

    projectfiles: function () {
      this.template('jshintrc', '.jshintrc');
      this.template('gitignore', '.gitignore');
      this.template('editorconfig', '.editorconfig');
    }
  },

  install: function () {
    this.spawnCommand('bower-installer');
    this.npmInstall();
  }
});
