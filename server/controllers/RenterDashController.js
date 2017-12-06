const Event = require('../models/Event');
const Message = require('../models/Message');

// EVENT CONTROLLERS

const findConfirmedEvents = (req, res) => {
  Event.findAll({
    where: {
      renter_user_id: req.body.user_id,
      confirmed: true,
    },
  }).then((data) => {
    res.json(data);
  });
};

const findPendingEvents = (req, res) => {
  Event.findAll({
    where: {
      RenterID: req.body.user_id,
      confirmed: false,
    },
  }).then((data) => {
    res.json(data);
  });
};

const createEvent = (req, res) => {
  Event.create({
    title: req.body.title,
    OwnerID: req.body.owner_user_id,
    RenterID: req.body.renter_user_id,
    space_id: req.body.space_id,
    start: req.body.start,
    end: req.body.end,
    confirmed: false,
  }).then((data) => {
    res.json(data);
  });
};

const deleteEvent = (req, res) => {
  Event.findOne({
    where: { _id: req.body.event_id },
  }).then((event) => {
    event.destroy({ force: true });
  }).then((data) => {
    res.json(data);
  });
};

// MESSAGE CONTROLLERS

const findMessages = (req, res) => {
  Message.findAll({
    where: { RenterID: req.body.user_id },
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
  findMessages,
  deleteEvent,
  createEvent,
  createMessage,
};
