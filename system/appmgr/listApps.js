var fs = require('fs'),
  path = require('path'),
  checkAppInstallFolder = require('../utils/startup/checkAppInstallFolder.js')

function getDirectories (srcpath) {
  return fs.readdirSync(srcpath) // request all files in a directory (srcpath)
    .filter(file => fs.lstatSync(path.join(srcpath, file)).isDirectory()) // filter down to just directories
}

console.log(getDirectories(checkAppInstallFolder()))

module.exports = getDirectories(checkAppInstallFolder())
