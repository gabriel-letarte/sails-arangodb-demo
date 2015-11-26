/**
 * TtController
 *
 * @description :: Server-side logic for managing tts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  tag: function (req, res) {
    return res.json({
      todo: 'Not implemented yet!'
    });
  },
  tagqq: function (req, res) {
    return res.json({
      todo: 'Not implemented yet!!!'
    });
  },
  finduser: function (req, res) {
    User.find({username:'Gabriel'}).exec(function(err, r){
      console.log(r);
      return res.json(r);
    });
  },
  updateuser: function (req, res) {
    User.find({username:'Gabriel'}).exec(function(err, r){
      console.log('User::', r);
      User.update(r, {username:'John'}).exec(function(err, rr){
        console.log('Update::', rr);
        return res.json(rr);
      })
    });
  },
  createuser: function (req, res) {
    User.create({username:'Gabriel'}).exec(function(err, r){
      console.log(r);
      Profile.create({user: r}).exec(function(err, rr){
        console.log(rr);
        return res.json(rr);
      });
    });
  },
};

