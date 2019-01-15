const {Menu} = require('../models/Menu');

module.exports = {
    findAll: (req,res)=>{
        Menu.
            find()
            .then(menuModel => res.json(menuModel))
            .catch(err => res.status(422).json(err));
    },
    findById: (req,res)=>{
        Menu.
            findOne({_id: req.params.id})
            .then(menuModel => res.json(menuModel))
            .catch(err => res.status(422).json(err));
    },
    create: (req,res)=>{
        Menu.create({...req.body})
            .then(menuModel=> res.json(menuModel))
            .catch(err => res.status(422).json(err));
    },
    update: (req, res)=>{
        Menu.findOneAndUpdate({_id: req.params.id}, req.body)
            .then(menuModel=>res.json(menuModel))
            .catch(err => res.status(422).json(err));
    },
    remove: (req,res)=>{
        Menu.findById({_id: req.params.id})
            .then(menuModel => menuModel.remove())
            .then(menuModel => res.json(menuModel))
            .catch(err => res.status(422).json(err));
    }
}