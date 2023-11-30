// Auth middleware || NEXT function
import JWT from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      const user = JWT.verify(token, process.env.JWT_SECRET)
      req.userid = user.userid //Changed spelling of ID
      req.username = user.username
     
      next();
    } else {
      res.status(401).json({
        success: false,
        message: "Unauthorized user"
      })
    }
  } catch (error) {
    // next(error)
    console.log(error);
    res.status(401).json({
      success: false,
      message: "Unauthorized user"
    })
  }
};

export default authMiddleware;
