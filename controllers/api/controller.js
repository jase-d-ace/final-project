const pokemon = require('../../models/pokemon');
const controller = {}

controller.index = (req, res) =>{
  pokemon.findAll(req.user.id).then((data) =>{
    res.json(data)
  }).catch((error) =>{
    console.log('API INDEX ERROR: ', error);
  });
};

controller.show = (req, res) =>{
  pokemon.findOne(req.params.id).then((data) =>{
    res.json(data);
  }).catch((error)=>{
    console.log('API SHOW ERROR: ', error);
  });
};

controller.create = (req, res) =>{
  pokemon.create(req.body.name, req.body.sprite, req.user.id).then((data) =>{
    console.log('Pokemon Created!');
    console.log(data);
  }).catch((error)=>{
    console.log('API CREATE ERROR: ', error)
  });
};

controller.destroy = (req, res) =>{
  pokemon.destroy(req.params.id).then((data) =>{
    res.json(data);
  }).catch((error) =>{
    console.log('API DELETE ERROR: ', error)
  })
}

module.exports = controller;
