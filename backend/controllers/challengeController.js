import Challenge from '../models/ChallengeModel.js';
import User from "../models/userModel.js";

//User can see yearly challenge
const getChallenge = async (req, res) => {
  const { username } = req.user;

  try {
    const user = await User.findOne({ username }) ;

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
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

// Add target Number of books 
const addTargetBooks = async (req, res) => {
    const { username } = req.user;
    const { targetBooks } = req.body;
  
    try {
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      const currentYear = new Date().getFullYear();
  
      let existingChallenge = await Challenge.findOne({ username, year: currentYear });
  
      if (!existingChallenge) {
        existingChallenge = new Challenge({
          username: username,
          year: currentYear,
          targetBooks: 0,
          completedBooks: 0,
          progress: 0,
          challengeStart: new Date().toLocaleDateString('en-GB')
        });

      }
  
      existingChallenge.targetBooks = targetBooks;
      await existingChallenge.save();
  
      const response = {
        username: existingChallenge.username,
        year: existingChallenge.year,
        targetBooks: existingChallenge.targetBooks,
        completedBooks: existingChallenge.completedBooks,
        progress: existingChallenge.progress,
        challengeStart : new Date().toLocaleDateString('en-GB'),
        challengeEnd : existingChallenge.challengeEnd.toLocaleDateString('en-GB')
      };
  
      return res.status(200).json({
        success: true,
        message: 'Target number of books added for the yearly challenge',
        challengeDetails: response,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server error' });
    }
};

//Edit/update Target Number of books
const updateTargetBooks = async (req, res) => {
    const { username } = req.user;
    const { targetBooks } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        const currentYear = new Date().getFullYear();
        
        const updatedChallenge = await Challenge.findOneAndUpdate(
            { username, year: currentYear },
            { $set: { targetBooks } },
            { new: true }
        );

        if (!updatedChallenge) {
            return res.status(404).json({ success: false, message: 'No Challenge exists for this user' });
        }

        const response = {
            username: updatedChallenge.username,
            year: updatedChallenge.year,
            targetBooks: updatedChallenge.targetBooks,
            completedBooks: updatedChallenge.completedBooks,
            progress: updatedChallenge.progress,
            challengeStart: updatedChallenge.challengeStart.toLocaleDateString('en-GB'),
            challengeEnd : updatedChallenge.challengeEnd.toLocaleDateString('en-GB')
        };

        return res.status(200).json({
            success: true,
            message: 'Target number of books added or updated for the yearly challenge',
            challengeDetails: response,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server error' });
    }
};

//Delete Challenge
const deleteChallenge = async (req, res) => {
  const { username } = req.user;

  try {
    const existingChallenge = await Challenge.findOneAndDelete({ username });

    if (!existingChallenge) {
      return res.status(404).json({ success: false, message: 'No Challenge exists for this user' });
    }

    return res.status(200).json({
      success: true,
      message: 'Yearly challenge deleted successfully',
      challengeDetails : existingChallenge
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server error' });
  }
};

//Add completed books
const addCompletedBooks = async (req, res) => {
    const { username } = req.user;
    const { completedBooks } = req.body;
  
    try {
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      const currentYear = new Date().getFullYear();
  
      const updatedChallenge = await Challenge.findOneAndUpdate(
        { username, year: currentYear },
        { $set: { completedBooks } },
        { new: true }
      );

      if (!updatedChallenge) {
        return res.status(404).json({ success: false, message: 'No Challenge exists for this user' });
      }
      
      if (updatedChallenge && updatedChallenge.targetBooks===0){
        return res.status(404).json({ success: false, message: 'Target has not been set yet' });
      }

      updatedChallenge.progress = ((completedBooks/updatedChallenge.targetBooks)*100).toFixed(2);
      await updatedChallenge.save();
      console.log(updatedChallenge.book)

      const response = {
        username: updatedChallenge.username,
        year: updatedChallenge.year,
        targetBooks: updatedChallenge.targetBooks,
        completedBooks: updatedChallenge.completedBooks,
        progress: updatedChallenge.progress + '%',
        challengeStart: updatedChallenge.challengeStart.toLocaleDateString('en-GB'),
        challengeEnd : updatedChallenge.challengeEnd.toLocaleDateString('en-GB')
      };

      return res.status(200).json({
        success: true,
        message: 'Completed Number books added for the yearly challenge',
        challengeDetails: response,
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server error' });
    }
};

export { getChallenge, addTargetBooks, updateTargetBooks, deleteChallenge, addCompletedBooks};
