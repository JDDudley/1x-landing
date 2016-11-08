
let dataAdapter = require('./data-adapter'),
  uuid = dataAdapter.uuid,
  schemator = dataAdapter.schemator,
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

getAll= function(query, cb){
    mailingList.findAll({}, formatQuery(query)).then(cb).catch(cb)
}

getMemberById = function(id, query, cb){
    mailingList.find(id, formatQuery(query)).then(cb).catch(cb)
}

module.exports={
    addMember,
    getAll,
    getMemberById
}