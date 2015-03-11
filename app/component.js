'use strict';

module.exports = function () {
  var element = document.createElement('h1');
  element.innerHTML = 'Hello, world!?? && some other text';

  return element;
};