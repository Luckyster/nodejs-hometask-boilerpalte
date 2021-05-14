const responseMiddleware = (req, res, next) => {
   // TODO: Implement middleware that returns result of the query
    const {status, message} = req.res
    res.status(status).json({message, error: status !== 200})
}

exports.responseMiddleware = responseMiddleware;