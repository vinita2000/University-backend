
const {success, error} = require('../../helpers/response');
const University = require('../../models/university');

module.exports = async (req, res) => {
  try{

    let err;

    if (!req.body || Object.keys(req.body).length === 0){
      err = new Error('Missing req data');
      err.statusCode = 409;
      throw err;
    }

    const university = await University.create(req.body);

    if (!university){
      err = new Error('Failed to insert');
      err.statusCode = 500;
      throw err;
    }

    success(res);

  }catch(e){
    error(res, e.statusCode, e.message);
  }
};