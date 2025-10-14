import User from "../models/user.model.js";

export const findByEmail = async (email) => {
  return User.findOne({ email });
};

export const createUser = async (userData) => {
  const user = new User(userData);
  return user.save();
};

export const findById = async (id) => {
  return User.findById(id).select("-password");
};

export const updateById = async (id, update) => {
  return User.findByIdAndUpdate(id, update, { new: true }).select("-password");
};

export const findAllExcept = async (userId) => {
  return User.find({ _id: { $ne: userId } }).select("-password");
};

export default { findByEmail, createUser, findById, updateById, findAllExcept };
