const {Event} = require('../models/Event');

module.exports = {
    findAll: (req,res)=>{
        Event.find()
            .populate('eventParticipants')
            .then(eventModel => res.json(eventModel))
            .catch(err => res.status(422).json(err));
    },
    findById: (req,res)=>{
        Event.findById(req.params.id)
            .populate('eventParticipants')
            .then(eventModel => res.json(eventModel))
            .catch(err => res.status(422).json(err));
    },
    create: (req,res)=>{
        console.log(req.body)
        Event.create({...req.body})
            .then(eventModel=> res.json(eventModel))
            .catch(err => res.status(422).json(err));
    },
    update: (req, res)=>{
        Event.findOneAndUpdate({_id: req.params.id}, req.body)
            .then(eventModel=>res.json(eventModel))
            .catch(err => res.status(422).json(err));
    },
    remove: (req,res)=>{
        Event.findById({_id: req.params.id})
            .then(eventModel => eventModel.remove())
            .then(eventModel => res.json(eventModel))
            .catch(err => res.status(422).json(err));
    },
    addEventParticipant: (req,res)=>{
        Event.findOneAndUpdate({_id: req.params.id}, {'$push': { eventParticipants: {...req.body}}})
            .then(eventModel => res.json(eventModel))
            .catch(err => res.status(422).json(err));
    },
    addEventMenu: (req,res)=>{
        Event.findOneAndUpdate({_id: req.params.id}, {'$push': { eventMenu: {...req.body}}})
            .then(eventModel => res.json(eventModel))
            .catch(err => res.status(422).json(err));
    }
}