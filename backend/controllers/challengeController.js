import Challenge from '../models/ChallengeModel.js';
import User from "../models/userModel.js";

//User can see yearly challenge
const getChallenge = async (req, res) => {
  const { username } = req.user;

  try {
    const user = await User.findOne({ username }) ;

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const currentYear = new Date().getFullYear();

    let userChallenge = await Challenge.findOne({ username, year: currentYear });

    if (!userChallenge) {
      userChallenge = new Challenge({
        username : username,
        year: currentYear,
        targetBooks: 0, 
        completedBooks: 0,
        progress: 0,
      });

      await userChallenge.save();
    }
    const response = {
        username: userChallenge.username,
        year: userChallenge.year,
        targetBooks: userChallenge.targetBooks,
        completedBooks: userChallenge.completedBooks,
        progress: userChallenge.progress,
      };
  
    res.status(200).json({
        success: true,
        message: 'This is your yealy challenge',
        challengeDetails : response
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};



export { getChallenge };
