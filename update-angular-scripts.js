const fs = require('fs');
const path = require('path');

// Path to your angular.json file
const angularJsonPath = path.join(__dirname, 'angular.json');

// Path to your JavaScript files folder
const jsFolderPath = path.join(__dirname, 'src', 'js');

// Read the angular.json file
const angularJson = JSON.parse(fs.readFileSync(angularJsonPath, 'utf8'));

// Get all JavaScript files in the specified folder
const jsFiles = fs.readdirSync(jsFolderPath)
  .filter(file => file.endsWith('.js'))
  .map(file => `src/lib/${file}`);

// Find the scripts array in angular.json
const projectName = Object.keys(angularJson.projects)[0];
const scriptsArray = angularJson.projects[projectName].architect.build.options.scripts;

// Update the scripts array with the JavaScript files
//scriptsArray.length = 0; // Clear the array
scriptsArray.push(...jsFiles);

// Write the updated angular.json back to the file
fs.writeFileSync(angularJsonPath, JSON.stringify(angularJson, null, 2), 'utf8');

console.log('angular.json has been updated with JavaScript files from', jsFolderPath);
