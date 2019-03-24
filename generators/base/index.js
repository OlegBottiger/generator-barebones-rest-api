const Generator = require('yeoman-generator');
const { EOL } = require('os');

module.exports = class extends Generator {
  writing() {
    const pkgJson = require(this.destinationPath('package.json'))
    
    pkgJson.scripts = pkgJson.scripts || {};

    pkgJson.scripts['dev'] = './node_modules/nodemon/bin/nodemon.js server.js | ./node_modules/.bin/bunyan '
    
    const structure = [
      '_gitignore',
      '_env',
      'server.js',
      'src/db/index.js',
      'src/app.js',
      'src/routes/health.js'
    ];

    structure.forEach((filename) => {
      this.fs.copyTpl(
        this.templatePath(filename),
        this.destinationPath(filename.replace(/^_/, '.')),
        {
          title: pkgJson.name,
        }
      );
    });
  }

  install() {
    this.npmInstall([
      'body-parser',
      'dotenv',
      'express',
      'cors',
      'nodemon',
      'http-graceful-shutdown'
    ])
  }
}