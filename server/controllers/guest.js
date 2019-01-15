const {Guest} = require('../models/Guest');

module.exports = {
    findAll: (req,res)=>{
        Guest.find()
            .populate('guestMenu')
            .then(guestModel => res.json(guestModel))
            .catch(err => res.status(422).json(err));
    },
    findById: (req,res)=>{
        Guest.findById(req.params.id)
            .populate('guestMenu')
            .then(guestModel => res.json(guestModel))
            .catch(err => res.status(422).json(err));
    },
    create: (req,res)=>{
        Guest.create({...req.body})
            .then(guestModel=> res.json(guestModel))
            .catch(err => res.status(422).json(err));
    },
    update: (req, res)=>{
        Guest.findOneAndUpdate({_id: req.params.id}, req.body)
            .then(guestModel=>res.json(guestModel))
            .catch(err => res.status(422).json(err));
    },
    remove: (req,res)=>{
        Guest.findById({_id: req.params.id})
            .then(guestModel => guestModel.remove())
            .then(guestModel => res.json(guestModel))
            .catch(err => res.status(422).json(err));
    },
    addEvent: (req,res)=>{
        Guest.findOneAndUpdate({_id: req.params.id}, {'$push': { guestMenu: {...req.body}}})
            .then(guestModel => res.json(guestModel))
            .catch(err => res.status(422).json(err));
    }
}