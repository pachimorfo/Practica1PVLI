'use strict';

function Item(name, effect) {
  this.name = name;
  this.effect = effect;
}

function Weapon(name, damage, extraEffect) {
  extraEffect = extraEffect || new Effect({});
  Item.apply(this, [name,damage]);
  // (HECHO)Haz que Weapon sea subtipo de Item haciendo que llame al constructor de
  // de Item.
}
Weapon.prototype = Object.create(Item.prototype);
Weapon.prototype.constructor = Weapon;
// (HECHO)Termina de implementar la herencia haciendo que la propiedad prototype de
// Item sea el prototipo de Weapon.prototype y recuerda ajustar el constructor.

function Scroll(name, cost, effect) {
  Item.call(this, name, effect);
  this.cost = cost;
}
Scroll.prototype = Object.create(Item.prototype);
Scroll.prototype.constructor = Scroll;

Scroll.prototype.canBeUsed = function (mp) {
	return (mp>=this.cost);

  // El pergamino puede usarse si los puntos de maná son superiores o iguales
  // al coste del hechizo.
};

function Effect(variations) {
	this.variations = variations;

  //(HECHO)Copia las propiedades que se encuentran en variations como propiedades de
  // este objeto.
}

module.exports = {
  Item: Item,
  Weapon: Weapon,
  Scroll: Scroll,
  Effect: Effect
};
