'use strict';
// ES6
import MyModule from './modules/MyModule.js';


// CommonJS 
// ./ at the beginning states "relative to the file I am in now"
var component = require('./component.js');

document.body.appendChild(component());