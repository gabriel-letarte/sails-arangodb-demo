/**
 * TtController
 *
 * @description :: Server-side logic for managing tts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  listuser: function (req, res) {
    User.find().exec(function(err, r){
      return res.json(r);
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
      User.update(r[0]._id, {username:'John'}).exec(function(err, rr){
        return res.json(rr);
      })
    });
  },
  createuser: function (req, res) {
    User.create({username:'Gabriel'}).exec(function(err, r){
      Profile.create({user: r}).exec(function(err, rr){
        return res.json(rr);
      });
    });
  },
};

