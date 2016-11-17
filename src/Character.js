'use strict';
var dice = require('./dice');

function Character(name, features) {
	features = features || {};
	this.name = name;
	// (HECHO)Extrae del parámetro features cada característica y alamacénala en
	// una propiedad.
	this.party = null;
	this._mp = features.mp || 0;
	this.maxMp = features.maxMp || features.mp || 0;
	this.initiative = features.initiative || 0;
	this._defense = features.defense || 0;
	this.weapon = features.weapon || null;
	this._hp = features.hp || 0;
	this.maxHp = features.maxHp || features.hp || 15;  
}

Character.prototype._immuneToEffect = ['name', 'weapon'];

Character.prototype.isDead = function () {
	// Rellena el cuerpo de esta función
	return (this._hp <= 0);
};

Character.prototype.applyEffect = function (effect, isAlly) {
  var itsapplied = true;
  if (!isAlly){
    var aleatorio = dice.d100();
    itsapplied = (aleatorio >= this.defense);
  }
  if(itsapplied || isAlly){
  this.initiative += effect.initiative || 0;
  this.defense += effect.defense || 0;
  this.hp += effect.hp || 0;
  this.maxHp += effect.maxHp || 0;
  this.mp += effect.mp || 0;
  this.maxMp += effect.maxMp || 0;
	}
  return itsapplied;
};

Object.defineProperty(Character.prototype, 'mp', {
	get: function () {
		return this._mp;
	},
	set: function (newValue) {
		this._mp = Math.max(0, Math.min(newValue, this.maxMp));
	}
});

Object.defineProperty(Character.prototype, 'hp', {
	// Puedes usar la mísma ténica que antes para mantener el valor de hp en el
	// rango correcto.
	get: function () {
		return this._hp;
	},
	set: function (newValue) {
		this._hp = Math.max(0, Math.min(newValue, this.maxHp));
	}
});

// Puedes hacer algo similar a lo anterior para mantener la defensa entre 0 y
// 100.
Object.defineProperty(Character.prototype, 'defense', {
	// Puedes usar la mísma ténica que antes para mantener el valor de hp en el
	// rango correcto.
	get: function () {
		return this._defense;
	},
	set: function (newValue) {
		this._defense = Math.max(0, Math.min(newValue,100));
	}
});





module.exports = Character;
