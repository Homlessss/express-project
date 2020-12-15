const repository = require("./user.repository");

const find = async (query) => {
  return await repository.find(query);
};

const findById = async (id) => {
  return await repository.findById(id);
};

const create = async (data) => {
  if (!data.email || !data.phone)
    throw new error("Please enter email or phone number!");
  if (!data.password) 
    throw new error("Please enter password!");
  if (data.confirmPassword != data.password)
    throw new error("Reconfirm password!");
  if (!data.username)
    throw new error("Please enter username!");
  if (!validateEmail(data.email) || !validatePhone(data.phone))
    throw new error("Please enter a valid data!");
  return await repository.create(data);
};

const update = async (id, data) => {
  const existedDoc = await repository.findById(id);
  if (!existedDoc) throw new error("Entity not found!");
  return await repository.update(id, data);
};

const deleteOne = async (id) => {
  const existedDoc = await repository.findById(id);
  if (!existedDoc) throw new error("Entity not found!");
  return await repository.delete(id);
};

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

function validatePhone(phone) {
  var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
  var digits = phone.replace(/\D/g, "");
  return phoneRe.test(digits);
};

module.exports = {
  find,
  findById,
  create,
  update,
  delete: deleteOne,
};
