'use strict';

function TurnList() {};

TurnList.prototype.reset = function (charactersById) {
  this._charactersById = charactersById || {};

  this._turnIndex = -1;
  this.turnNumber = 0;
  this.activeCharacterId = null;
  this.list = this._sortByInitiative();
};

TurnList.prototype.next = function () {
  // Haz que calcule el siguiente turno y devuelva el resultado
  // según la especificación. Recuerda que debe saltar los personajes
  // muertos.
};

TurnList.prototype._sortByInitiative = function () {
  // Utiliza la función Array.sort(). ¡No te implementes tu propia
  // función de ordenación!
  var characts = [];
  var lista = [];
  for(var objeto in this._charactersById){
       characts.push({name: objeto, 
	 initve: this._charactersById[objeto].initiative});
	      	       
  }; 
  characts.sort(function(a, b){
     if(a.initve > b.initve)
  	return -1;	  
     if(a.initve < b.initve)
  	return 1;

     //a es igual a b
     return 0;  
  
  });

  for (var i in characts){
  	lista.push(characts[i].name);
  
  }
 
  return lista;

};

module.exports = TurnList;
