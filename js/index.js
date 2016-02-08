//I ONLY RECOGNISE THE OG 151
var pokeObject = [{}];
var pokemonNames = [{}];
var searchTerm = 'squirtle'
pokeUrl = "http://pokeapi.co/api/v2/pokemon/"+1;
pokedex = 'http://pokeapi.co/api/v2/pokedex/1/';
description = 'http://pokeapi.co/api/v1/description/'+1
sprite = 'http://pokeapi.co/api/v1/sprite/'+1;
var spriteLocation;
var weight, height, type1, type2, pName, id, speed, specialDefense, specialAttack, defense, attack, hp;
$(document).ready(function() {
  $.getJSON(pokeUrl, function (json){
    pokeObject = {
      'name': json.name,
      'id':json.id,
       'height': json.height/10,
    'weight': json.weight/10,
    'type': json.types[0].type.name,
    //'type2': json.types[1].type.name,
    'speed': json.stats[0].base_stat,
    'specialDefense': json.stats[1].base_stat,
    'specialAttack': json.stats[2].base_stat,
    'defense': json.stats[3].base_stat,
    'attack': json.stats[4].base_stat,
    'hp': json.stats[5].base_stat
  }
    $.getJSON(sprite, function(json) {
      pokeObject['sprite'] = 'pokeapi.co'+json.image;
      // pokeObject = {
      // "sprite": json.image
      // }
    }); //end of sprite getJSON.
    // $.getJSON(description, function(json) {
    //   console.log(json);
    // })
    console.log(pokeObject);
  }); //end of getJSON.

  $.getJSON(pokedex, function(json) {
    for (var i =0; i <151; i++) {
      pokemonNames['#'+json.pokemon_entries[i].entry_number] = {
        'entry': json.pokemon_entries[i].entry_number,    'species':json.pokemon_entries[i].pokemon_species.name
      }
    }
    //console.log(json.pokemon_entries[1]);
    //console.table(pokemonNames);
  });
}); //end of document ready


//height should be if 20, 2.0. if 5, 0.5
//i guess, if its only one number, put a 0. in front, and if it's 2 or 3, put a . after the first number.
//with weight, you need to put a . before the last number.

//calling this, and replacing XXX with a number obvis will show you a specific pokemon.http://beta.pokeapi.co/api/v2/pokemon/XXX
//can type in either their number or name.


//would it be possible to implement a voice synthesiser in here somehow?
