const Event = require('../models/Event');
const Space = require('../models/Space');
const Message = require('../models/Message');

// EVENT CONTROLLERS

const findConfirmedEvents = (req, res) => {
  Event.findAll({
    where: {
      OwnerID: req.body.user_id,
      confirmed: true,
    },
  }).then((data) => {
    res.json(data);
  });
};

const findPendingEvents = (req, res) => {
  Event.findAll({
    where: {
      OwnerID: req.body.user_id,
      confirmed: false,
    },
  }).then((data) => {
    res.json(data);
  });
};

const confirmEvent = (req, res) => {
  Event.findOne({
    where: { _id: req.body.event_id },
  }).then((event) => {
    event.update({
      confirmed: true,
    }).then((data) => {
      res.json(data);
    });
  });
};

// this will return a JSON object of the updated event. Use this to update the confirmed table and
// use event's _id to update the unconfirmed table (or just have items in the table disappear on
// button press)

const deleteEvent = (req, res) => {
  Event.findOne({
    where: { _id: req.body.event_id },
  }).then((event) => {
    event.destroy({ force: true });
  }).then((data) => {
    res.json(data);
  });
};

// SPACE CONTROLLERS

const findSpaces = (req, res) => {
  Space.findAll({
    where: { OwnerID: req.body.user_id },
  }).then((data) => {
    res.json(data);
  });
};

const addSpace = (req, res, next) => {
  Space.create({
    name: req.body.name,
    location: req.body.location,
    description: req.body.description,
    rating: req.body.rating,
    picture: req.body.picture,
    tags: req.body.tags,
    OwnerID: req.body.owner_user_id,
  }).then(next());
};

const deleteSpace = (req, res, next) => {
  Space.findOne({
    where: { _id: req.body.space_id },
  }).then((space) => {
    space.destroy({ force: true });
  }).then(next());
};

// MESSAGE CONTROLLERS

const findMessages = (req, res) => {
  Message.findAll({
    where: { OwnerID: req.body.user_id },
  }).then((data) => {
    res.json(data);
  });
};

const createMessage = (req, res) => {
  Message.create({
    OwnerID: req.body.owner_user_id,
    RenterID: req.body.renter_user_id,
    space_id: req.body.space_id,
    message: req.body.message,
  }).then((data) => {
    res.json(data);
  });
};

module.exports = {
  findConfirmedEvents,
  findPendingEvents,
  findSpaces,
  findMessages,
  confirmEvent,
  deleteEvent,
  addSpace,
  deleteSpace,
  createMessage,
};
