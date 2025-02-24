const db = require("../helpers/db.helper");
const { Op } = require("sequelize");

module.exports = {
  create,
  fetchAll,
  findOne,
  deleteShop,
  update,
};
async function create(params) {
  if (await db.Shop.findOne({ where: { shop_name: params.shop_name } })) {
    return "Shop " + params.shop_name + " is already exists";
  }
  const shop = new db.Shop(params);

  await shop.save();
  return shop;
}
async function fetchAll() {
  return await db.Shop.findAll();
}
async function findOne(id, callback) {
  getShop(id)
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}
async function update(id, params) {
  const shop = await getShop(id);
  const nameChanged = params.shop_name && params.shop_name !== shop.shop_name;
  if (
    nameChanged &&
    (await db.Shop.findOne({ where: { shop_name: params.shop_name } }))
  ) {
    return "Shop with name " + params.shop_name + " is already exists";
  }
  Object.assign(shop, params);
  await shop.save();
  return shop;
}
async function deleteShop(id) {
  const shop = await getShop(id);

  if (shop.shop_status) {
    shop.shop_status = false;
  } else {
    shop.shop_status = true;
  }
  await shop.save();
  return shop;
}
async function getShop(id) {
  const shop = await db.Shop.findByPk(id);
  if (!shop) return "Shop not found";
  return shop;
}
