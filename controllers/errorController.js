const AppError = require('../utils/appError');

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: is ${err.value}.`;
  return new AppError(message, 400);
};

const handleExpiredJWTError = () =>
  new AppError('Expired token. Please log in again!', 401);

const handleJWTError = () =>
  new AppError('Invalid token. Please log in again!', 401);

const handlerDuplicateFieldsDB = (err) => {
  const value = err.errmsg.match(/(['"])(?:(?!\1|\\).|\\.)*\1/)[0];
  const message = `Duplicate field value: ${value}. Please use another value`;

  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data. ${errors.join('. ')}`;

  return new AppError(message, 400);
};

const sendErrorDev = (err, req, res) => {
  // A) API
  if (req.originalUrl.startsWith('/api')) {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }
  // B) RENDERED WEBSITE
  return res.status(err.statusCode).render('error', {
    title: 'Something went wrong!',
    msg: err.message,
  });
};

const sendErrorProd = (err, req, res) => {
  // A) API
  if (req.originalUrl.startsWith('/api')) {
    // Operational, trusted error: send message to client
    if (err.isOperational) {
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
      // Programming or other unknown error: don't leak error details
    } else {
      // 1) Log error
      console.error('ERROR 💥', err);

      // 2) Send generic message
      res.status(500).json({
        status: 'error',
        message: 'Something went very wrong!',
      });
    }
  }
  // B) FOR THE RENDERED WEBSITE
  if (err.isOperational) {
    return res.status(err.statusCode).render('error', {
      title: 'Something went wrong!',
      msg: err.message,
    });
    // Programming or other unknown error: don't leak error details
  }
  // 1) Log error
  console.error('ERROR 💥', err);

  // 2) Send generic message
  return res.status(err.statusCode).render('error', {
    title: 'Something went wrong!',
    msg: 'Please try again latter.',
  });
};

module.exports = (err, req, res, next) => {
  //   console.log(err.stack);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = Object.assign(err);

    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.code === 11000) error = handlerDuplicateFieldsDB(error);
    if (error.name === 'ValidationError')
      error = handleValidationErrorDB(error);
    if (error.name === 'JsonWebTokenError') error = handleJWTError(error);
    if (error.name === 'TokenExpiredError')
      error = handleExpiredJWTError(error);

    sendErrorProd(error, req, res);
  }
};
