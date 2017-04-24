// initial thoughts and pokemon work
// Safari Zone

// catch rate is based on randomness and the pokeball you use
// Poke Ball catchFactor = Math.floor(Math.random()*0.45)
// Great Ball catchFactor = Math.floor(Math.random()*0.65)
// Ultra Ball catchFactor = Math.floor(Math.random()*0.75)
// Master Ball catchFactor = 1

// catchRate = Math.floor(catchFactor * 100)
// wildRate = Math.floor(Math.random() * 100)
// if (catchRate >= wildRate){
//   caught
// } else{
//   try again
// }
// caught{
// axios.post('my pokemon api route', {pokemon: state}).then...
// axios.put('my trainer api route', {pokeballs: pokeballs-1}).then...
// }
// try again {
// axios.put('my trainer api route', {
//   pokeballs: pokeballs - 1
// })
// }

// get new Pokemon
// axios.get('http://pokeapi.co/api/v2/pokemon/'+poke).then((response) => {
//   this.setState({
//     wildPokemon: response.data
//   });
// })

// buy pokeballs from a store using money that you get either from a catch
// or from just being on the app
// let money = 0;
//if (caught){
// money += 1000
// }
// setInterval(()=>{
//   money += 100
// }, 30000)
