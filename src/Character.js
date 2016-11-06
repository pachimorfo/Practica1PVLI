'use strict';
var dice = require('./dice');

function Character(name, features) {
  features = features || {};
  this.name = name;
  // (HECHO)Extrae del parámetro features cada característica y alamacénala en
  // una propiedad.
  this.party = null;
  this._mp = features.mp || 0;
  this.maxMp = features.maxMp || this._mp;
  this.initiative = features.initiative || 0;
  this._defense = features.defense || 0;
  this.weapon = features.weapon || null;
  this._hp = features.hp || 0;
  this.maxHp = features.maxHp || this._hp || 15;  
     
    

}

Character.prototype._immuneToEffect = ['name', 'weapon'];

Character.prototype.isDead = function () {
  // Rellena el cuerpo de esta función
  return (this._hp <= 0);
};

Character.prototype.applyEffect = function (effect, isAlly) {
  // Implementa las reglas de aplicación de efecto para modificar las
  // características del personaje. Recuerda devolver true o false según
  // si el efecto se ha aplicado o no.

	if(!isAlly){
		var aleatorio = dice.d100();
		if(aleatorio <= this._defense)
			return false;
	}
	//Si es aliado hace el efecto directamente, si no lo es,
	// miramos el aleatorio con su defensa, si es menor, 
	// no aplicamos el efecto, si es mayor, directamente lo hace.

	
 	 for(var subefecto in effect){
	  	this[subefecto] += effect[subefecto];
	  	if(this[subefecto] < 0)
   			this[subefecto] = 0;
	}
	if(this._hp > this.maxHp)
      		this._hp = this.maxHp;

	if(this._mp > this.maxMp)
      		this._mp = this.maxMp;
	
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
