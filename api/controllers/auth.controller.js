import User from "../models/user.model.js"
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";






// export const signup = async (req, res, next) => {
//     const { username, email, password } = req.body;
//     const hashedPassword = bcryptjs.hashSync(password, 10);

//     const newUser = new User ({ username, email, password: hashedPassword });
//     await newUser.save();
//     try {
//         await newUser.save();
//         res.status(201).json("User created");
//     } catch (error) {
//         next(errorHandler(500, error.message));
//     }
// };



export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    // Server-side validation
    if (!username || !email || !password) {
      return next(errorHandler(400, "All fields are required"));
    }

    try {
      // Check if username or email already exists
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        if (existingUser.username === username) {
          return next(errorHandler(400, "Username is already in use"));
        } else if (existingUser.email === email) {
          return next(errorHandler(400, "Email is already in use"));
        }
      }

      const hashedPassword = bcryptjs.hashSync(password, 10);

      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();

      res.status(201).json("User created successfully");
    } catch (error) {
      if (error.code === 11000) {
        // Handle duplicate key error
        if (error.keyPattern.username) {
          return next(errorHandler(400, "Username is already in use"));
        } else if (error.keyPattern.email) {
          return next(errorHandler(400, "Email is already in use"));
        }
      }
      next(errorHandler(500, "Internal server error"));
    }
  };
