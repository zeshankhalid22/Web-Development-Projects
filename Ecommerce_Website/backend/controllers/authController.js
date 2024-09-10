
const { createUser, findUserByUsername } = require('../models/userModel');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await findUserByUsername(username);
  if (user && user.password === password) {
    return res.json({ username, token: 'dummy-token' });
  }
  return res.status(400).json({ message: 'Invalid credentials' });
};

exports.signup = async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = await createUser(username, password);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(499).json({ message: err.message });
  }
};

exports.logout = (req, res) => {
  // Invalidate the user's session or token here
  res.status(200).json({ message: 'Logout successful' });
};
