// response success handler
exports.success = (res, data, statusCode = 200, result = 1, message = 'Success') => {
  res.status(statusCode).json({
    message,
    result,
    data
  });
};

exports.error = (res, statusCode = 400, message='Failed') => {
  res.status(statusCode).json({
    message
  });
};