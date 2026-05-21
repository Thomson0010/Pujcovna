const Boat = require("../models/Boat");

exports.getAllBoats = async (req, res) => {
  const boats = await Boat.find().sort({ createdAt: -1 });
  res.render("boats/index", { boats });
};

exports.getBoatDetail = async (req, res) => {
  const boat = await Boat.findById(req.params.id);
  res.render("boats/show", { boat });
};
