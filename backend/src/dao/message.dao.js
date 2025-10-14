import Message from "../models/message.model.js";

export const findBetweenUsers = async (userA, userB) => {
  return Message.find({
    $or: [
      { senderId: userA, receiverId: userB },
      { senderId: userB, receiverId: userA },
    ],
  });
};

export const createMessage = async (messageData) => {
  const msg = new Message(messageData);
  return msg.save();
};

export default { findBetweenUsers, createMessage };
