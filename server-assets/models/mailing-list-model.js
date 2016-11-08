
let dataAdapter = require('../models/data-adapter'),
  uuid = dataAdapter.uuid,
  DS = dataAdapter.DS,
  formatQuery = dataAdapter.formatQuery;


let MailingList = DS.defineResource({
    name: 'mailinglist',
    endpoint: 'mailinglist'
})


function create(member, cb){
    let newMember = {
        id: uuid.v4(),
        name: member.name,
        email: member.email
    }
}


addMember = function(member){
    if(!name || !email){
        return 
    }
    mailingList.push(member);
}

getAll= function(cb){
    MailingList.findAll({}).then(cb).catch(cb)
}

getMemberById = function(id, query, cb){
    MailingList.find(id, formatQuery(query)).then(cb).catch(cb)
}

module.exports={
    addMember,
    getAll,
    getMemberById
}