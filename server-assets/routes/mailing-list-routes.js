const router = require('express').Router();
const MailingList = require('../models/mailing-list-model');

module.exports.mountPath = '/mailing-list'
module.exports.router = router;

router.route('/:id?')
    .get((req, res, next)=>{ 
    MailingList.getAll(req, ((res)=>{
        if(mailingList.stack){
            return next(mailingList)
        }
       return res.send(mailingList)
    }))
    })
    .post(function(req, res, next){
        MailingList.create(req.body, function(member){
            if(member.stack){
                return next(member)
            }
            return res.send(member)
        })
    }) 

