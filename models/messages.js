'use strict';

const uuid = require ('uuid/v4');

const schema = {
  id: { type: String, required: true},  //uuid good library for unique ids. npm i uuid.
  text: {type: String, required: true},
  createdAt: {type: String, required: true},
  updatedAt: {type: String, required: true},
};

class Messages {
  constructor(){
    this.schema = schema;
    this.data = [];
  }

  get(id){ //if you want to get one thing from our message, use dot notation
    let response = this.data;
    if (id){
      response = response.filter((message)=>message.id == id);
      
    }
    return response;

  }
  create(record){
    let newMessage = this.sanitize(record);
    if (new Message.id) {
      this.data.push(newMessage);
    }
    return record;
  }
  update(id){

  }
  delete(){
    
  }
  sanitize(entry){
    let record = {};
    // check the type for keys;
    // make sure the output matches the schema without putting too much effort on the user
    Object.keys(this.schema).forEach(field =>{ //field here, being property of an array
      if (this.schema[field].required){ //using bracket notation allows for passing a variable instead of a value
        if (entry[field]) {
          record[field] = entry[field];
        } else {
          if (field === 'id'){
            record.id ===uuid();
          } else if (field === 'created at'){
            record.createdAt = new Date();
          }else if (field === 'updated at'){
            record.updatedAt = new Date();
          }
          else {
            valid = false;
          }
        } 
      } else {
        if (entry[field]) {
          record[field] = entry[field];
        } else {
          record[field] = null;
        }
      }
    });
    return valid ? record : undefined;

  }
}


 

module.exports = Messages;