const router = require('express').Router();
const MailingList = require('../models/mailing-list-model');

module.exports.mountPath = '/mailing-list'
module.exports.router = router;

router.routes('/:id?')
    .get((req, res, next)=>{ 
    MailingList.getAll(req, ((res)=>{
        if(mailingList.stack){
            return next(mailingList)
        }
       return res.send(mailingList)
    }))

    }) 