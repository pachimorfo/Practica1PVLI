'use strict';
var dice = require('./dice');

function Character(name, features) {
  features = features || {};
  this.name = name;
  // (HECHO)Extrae del parámetro features cada característica y alamacénala en
  // una propiedad.
  this._mp = features.mp || 0;
  this._maxMp = features.maxMp || this._mp;
  this._initiative = features.initiative || 0;
  this._defense = features.defense || 0;
  this._weapon = features.weapon || null;
  this._hp = features.hp ||0;
  this._maxHp = features.maxHP || this._hp; //Por que tiene que dar 15? en el test, y party ques es?
     
    

}

Character.prototype._immuneToEffect = ['name', 'weapon'];

Character.prototype.isDead = function () {
  // Rellena el cuerpo de esta función
  return (Character._hp <= 0);
};

Character.prototype.applyEffect = function (effect, isAlly) {
  // Implementa las reglas de aplicación de efecto para modificar las
  // características del personaje. Recuerda devolver true o false según
  // si el efecto se ha aplicado o no.

	if(!isAlly){
		var aleatorio = Math.round(Math.random()*100);
		if(aleatorio <= Character._defense)
			return false;
	}
	//Si es aliado hace el efecto directamente, si no lo es, miramos el aleatorio con su defensa, si es menor, no aplicamos el efecto, si es mayor, directamente lo hace.
	//PREGUNTAR!!!!!!
	effecto.subefecto.forEach(features{
		character.[subefecto]+=efecto[subefecto]
		if(character.[subefecto] < 0)
       			character.[subefecto] = 0;
		if(Character._hp > Character._maxHp)
			Character._hp = Character._maxHp;

		if(Character._mp > Character.features.maxHp)
			Character._mp = Character._maxMp;
	
			});
	return true;

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
});






module.exports = Character;
