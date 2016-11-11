'use strict';

var EventEmitter = require('events').EventEmitter;

function Options(group) {
  EventEmitter.call(this);
  this._group = typeof group === 'object' ? group : {};
}
Options.prototype = Object.create(EventEmitter.prototype);
Options.prototype.constructor = Options;

Options.prototype.list = function () {
  return Object.keys(this._group);
};

Options.prototype.get = function (id) {
  return this._group[id];
};

Options.prototype.select = function (id) {
  // Haz que se emita un evento cuando seleccionamos una opción.
  var option = this.get(id);
  if (option === undefined){
  	this.emit('choseError', 'option-does-not-exist', id);
  }
  else
  	this.emit('chose', id, option);
};

module.exports = Options;
