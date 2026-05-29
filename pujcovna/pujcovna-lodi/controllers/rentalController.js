const RentalRequest = require("../models/RentalRequest");

exports.createRequest = async (req, res) => {
  const { applicantName, email, message } = req.body;
  await RentalRequest.create({
    boat: req.params.boatId,
    applicantName,
    email,
    message
  });
  res.redirect("/boats");
};

exports.getAllRequests = async (req, res) => {
  const requests = await RentalRequest.find()
    .populate("boat")
    .sort({ createdAt: -1 });
  res.render("rentals/index", { requests });
};

exports.approveRequest = async (req, res) => {
  await RentalRequest.findByIdAndUpdate(req.params.id, { status: "approved" });
  res.redirect("/rentals");
};

exports.rejectRequest = async (req, res) => {
  await RentalRequest.findByIdAndUpdate(req.params.id, { status: "rejected" });
  res.redirect("/rentals");
};
