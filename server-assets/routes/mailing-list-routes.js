const router = require('express').Router();
const MailingList = require('../models/mailing-list-model');

module.exports.mountPath = '/mailing-list'
module.exports.router = router;

router.route('/:id?')
    .get(function(req, res, next){ 
    MailingList.getAll(function(data){
        if(data.stack){
            return next(data)
        }
       res.send(data)
    })
    
    })
    .post(function(req, res, next){
        MailingList.create(req.body.member, function(member){
            if(member.stack){
                return next(member)
            }
             res.send(member)
        })
    }) 

