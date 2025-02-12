const express = require("express");
const router = express.Router();

const {getContacts, getContact, createContact, updateContact, deleteContact} = require('../controllers/contactController.js');
const validateToken = require("../middleware/validateTokenHandler.js");

router.use(validateToken);
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact);
router.route("/:id").delete(deleteContact);

module.exports = router;