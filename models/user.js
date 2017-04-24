const bcrypt = require('bcrypt');
const db = require('../db');
const user = {};
user.create = (user) => {
    //encrypt password using hash/salt
    const password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(5));
    //ditch actual password, replace with hash
    return db.one(`INSERT INTO users(username, password_digest) VALUES($1, $2) returning *`, [user.username, password])
};
user.findByUsername = (username) => {
    return db.one(`SELECT * FROM users WHERE username = $1`, [username])
};
user.update = (pokeballs, greatballs, ultraballs, cash, id) =>{
  return db.one('UPDATE users SET pokeballs = pokeballs + $1, greatballs = greatballs + $2, ultraballs = ultraballs + $3, cash = cash - $4 WHERE id = $5 returning id', [pokeballs, greatballs, ultraballs, cash, id])
}
module.exports = user;
