const shop_service = require("../services/shop.service");
exports.create = (req, res, next) => {
  shop_service
    .create(req.body)
    .then((response) =>
      res.status(200).send({
        message: typeof response === "string" ? "Error" : "Success",
        data: response,
      })
    )
    .catch(next);
};
exports.fetchAll = (req, res, next) => {
  shop_service
    .fetchAll()
    .then((response) =>
      res.status(200).send({
        message: typeof response === "string" ? "Error" : "Success",
        data: response,
      })
    )
    .catch(next);
};
exports.findOne = (req, res, next) => {
  shop_service.findOne(req.params.id, (error, response) => {
    if (error) {
      return next(error);
    } else {
      return res.status(200).send({
        message: typeof response === "string" ? "Error" : "Success",
        data: response,
      });
    }
  });
};
exports.update = (req, res, next) => {
  shop_service
    .update(req.params.id, req.body)
    .then((response) =>
      res.status(200).send({
        message: typeof response === "string" ? "Error" : "Success",
        data: response,
      })
    )
    .catch(next);
};
exports.delete = (req, res, next) => {
  shop_service
    .deleteShop(req.params.id)
    .then((response) =>
      res.status(200).send({ message: "Success", data: response })
    )
    .catch(next);
};
