const router = require('express').Router();
const MailingList = require('../models/mailing-list-model');

module.exports.mountPath = '/mailing-list'
module.exports.router = router;

router.route('/:id?')
    .get(function(req, res, next){ 
    MailingList.getAll(function(res){
        if(res.stack){
            return next(res)
        }
       return res.send(res)
    })
    })
    .post(function(req, res, next){
        MailingList.create(req.body, function(member){
            if(member.stack){
                return next(member)
            }
            return res.send(member)
        })
    }) 

