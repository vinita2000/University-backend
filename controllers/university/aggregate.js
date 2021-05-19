
const {success, error} = require('../../helpers/response');
const University = require('../../models/university');

exports.pipeline0 = async (req, res) => {
  try{

    // for default search 
    if (!req.body['country']) req.body['country'] = 'Spain';
    if (!req.body['city']) req.body['city'] = 'Salamanca';

    const data = await University.aggregate([
      {
        $match: {
          country: req.body['country'],
          city: req.body['city']
        }
      },
      {
        $project: {
          country: 1,
          city: 1,
          name: 1,
          _id: 0
        }
      },
      {
        $group: {
          _id: '$name',
          total: {$sum: 1}
        }
      },

    {
      $out: 'aggrResults'
    }
    ]);

    success(res, data, 200, data.length);

  }catch(e){
    error(res, e.statusCode, e.message);
  }
};

exports.pipeline1 = async (req, res) => {
  try{

    // for default search 
    if (!req.body['name']) req.body['name'] = 'UPSA';

    const data = await University.aggregate([
      {
        $match: {
          name: req.body['name']
        }
      },

      {
       $unwind: '$students'
      },

      {
        $project: {
          'students.year': 1,
          'students.number': 1
        }
      },

      {
        $match: {
          'students.number': { $gte: 22500 }
        }
      },

      {
        $sort: { 'students.number': 1 }
      },

      {
        $limit: 1
      }

    ]);

    success(res, data, 200, data.length);

  }catch(e){
    error(res, e.statusCode, e.message);
  }
};

exports.pipeline2 = async (req, res) => {
  try{

    // for default search 
    if (!req.body['name']) req.body['name'] = 'UPSA';

    const data = await University.aggregate([
      {
        $match: {
          name: req.body['name']
        }
      },

      {
        $addFields: {
          'foundationYear': 1990
        }
      },

      {
        $unwind: '$students'
      },

      {
        $count: 'total_documents'
      }

    ]);

    success(res, data, 200, data.length);

  }catch(e){
    error(res, e.statusCode, e.message);
  }
};

exports.pipeline3 = async (req, res) => {
  try{

    // for default search 
    if (!req.body['name']) req.body['name'] = 'UPSA';

    const data = await University.aggregate([
      {
        $match: {
          name: req.body['name']
        }
      },

      {
        $project: {
          name: 1,
          _id: 0
        } 
      },

      {
        $lookup: {
          from: 'courses',
          localField: 'name',
          foreignField: 'university',
          as: 'courses'
        }
      },

      { $facet : {
        'countingLevels' :
        [
           { $unwind : '$courses' },
           { $sortByCount : '$courses.level' }
        ],
        'yearWithLessStudents' :
        [
           { $unwind : '$students' },
           { $project : { _id : 0, students : 1 } },
           { $sort : { 'students.number' : 1 } },
           { $limit : 1 }
        ]
    } }

    ]);

    success(res, data, 200, data.length);

  }catch(e){
    error(res, e.statusCode, e.message);
  }
};

exports.pipeline4 = async (req, res) => {
  try{

    // for default search 
    if (!req.body['name']) req.body['name'] = 'UPSA';

    const data = await University.aggregate([
      {
        $unwind: '$students'
      },

      {
        $group: {
          _id: '$name',
          'alumni': {
            $sum: '$students.number'
          } 
        }
      },

      {
        $sort: {
          alumni: 1 
        }
      }

    ]);

    success(res, data, 200, data.length);

  }catch(e){
    error(res, e.statusCode, e.message);
  }
};
