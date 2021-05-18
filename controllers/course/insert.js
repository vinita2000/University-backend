
const {success, error} = require('../../helpers/response');
const Course = require('../../models/course');
const University = require('../../models/university');

module.exports = async (req, res) => {
  try{

    let err;

    if (!req.body || Object.keys(req.body).length === 0){
      err = new Error('Missing req data');
      err.statusCode = 409;
      throw err;
    }

    const isValidU = await University.findOne({name:req.body.university});

    if (!isValidU){
      err = new Error('Invalid University');
      err.statusCode = 400;
      throw err;
    }

    const course = await Course.create(req.body);

    if (!course){
      err = new Error('Failed to insert');
      err.statusCode = 500;
      throw err;
    }

    success(res);

  }catch(e){
    error(res, e.statusCode, e.message);
  }
};