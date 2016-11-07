
let dataAdapter = require('./data-adapter'),
  uuid = dataAdapter.uuid,
  schemator = dataAdapter.schemator,
  DS = dataAdapter.DS,
  formatQuery = dataAdapter.formatQuery;

let mailingList = [];

let Member = DS.defineResource({
  id: uuid.v4(),
  name: this.name,
  email: this.email,
  endpoint: 'mailing-list',
})


addMember((member)=>{
    if(!name || !email){
        return 
    }
    mailingList.push(member);
})

getAll((query, cb)=>{
    mailingList.findAll({}, formatQuery(query)).then(cb).catch(cb)
})

getMemberById((id, query, cb)=>{
    mailingList.find(id, formatQuery(query)).then(cb).catch(cb)
})

module.exports={
    addMember,
    getMembers,
    getMemberById
}