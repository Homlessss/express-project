const { query } = require("express");
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  UserName: {
    type: String,
  },
  Email: {
    type: String,
    require: true,
  },
  Password: {
    type: String,
    require: true,
  },
  Phone: {
    type: String,
    require: true,
  },
  ImgUrl: {
    type: String,
    require: true,
  },
  Role: {
    type: String,
    default: "user",
  },
});

const UserModel = mongoose.model("User", UserSchema);

const find = async (query) => {
  return await UserModel.find(query);
};

const findById = async (id) => {
  return await UserModel.findById(id);
};

const create = async (data) => {
  const Doc = new UserModel(data);
  return await Doc.save();
};

const update = async (id, data) => {
  return await UserModel.findByIdAndUpdate(id, data, { new: true });
};

const deleteOne = async (id) => {
  return await UserModel.findByIdAndDelete(id);
};

const findByEmail = async (email) => {
  return await UserModel.findOne({ email: email });
};

const findByPhone = async (phone) => {
  return await UserModel.findOne({ phone: phone });
};

module.exports = {
  find,
  findById,
  findByEmail,
  findByPhone,
  create,
  update,
  delete: deleteOne,
};
