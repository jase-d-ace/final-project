const db = require('../db');
const pokemon = {};

pokemon.findAll = (user_id) =>{
  return db.any('SELECT *, pokemon.id AS pokemonid FROM pokemon JOIN users ON users.id = pokemon.trainer_id WHERE user_id=$1', [user_id]);
}

pokemon.findOne = (id) =>{
  return db.one('SELECT * FROM pokemon WHERE id = $1', [id]);
};

pokemon.create = (name, sprite, trainer_id) =>{
  return db.one('INSERT INTO pokemon(name, sprite, trainer_id) VALUES($1, $2, $3) returning id', [name, sprite, trainer_id]);
};

pokemon.destroy = (id) =>{
  return db.one('DELETE FROM pokemon WHERE id = $1', [id]);
};

module.exports = pokemon
