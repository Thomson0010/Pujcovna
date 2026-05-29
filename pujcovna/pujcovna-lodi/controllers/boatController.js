const Boat = require("../models/Boat");

exports.getAllBoats = async (req, res) => {
  const boats = await Boat.find().sort({ createdAt: -1 });
  res.render("boats/index", { boats });
};

exports.getBoatDetail = async (req, res) => {
  const boat = await Boat.findById(req.params.id);
  res.render("boats/show", { boat });
};

exports.showCreateForm = (req, res) => {
  res.render("boats/create");
};

exports.createBoat = async (req, res) => {
  const { name, type, capacity, description } = req.body;
  let image = "";
  if (req.file) {
    image = req.file.filename;
  }
  await Boat.create({ name, type, capacity, description, image });
  res.redirect("/boats");
};

exports.showEditForm = async (req, res) => {
  const boat = await Boat.findById(req.params.id);
  res.render("boats/edit", { boat });
};

exports.updateBoat = async (req, res) => {
  const { name, type, capacity, description } = req.body;
  const updateData = { name, type, capacity, description };
  if (req.file) {
    updateData.image = req.file.filename;
  }
  await Boat.findByIdAndUpdate(req.params.id, updateData);
  res.redirect(`/boats/${req.params.id}`);
};

exports.deleteBoat = async (req, res) => {
  await Boat.findByIdAndDelete(req.params.id);
  res.redirect("/boats");
};
