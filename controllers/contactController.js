// @desc get all contacts
// @route GET api/contacts
// @access public
const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all Contacts" });
};

// @desc Create Contact
// @route POST api/contacts
// @access public
const createContact = (req, res) => {
  res.status(201).json({ message: "Create Contact" });
};

// @desc Get a contact
// @route GET /api/contacts/:id
// @access public
const getContact = (req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id} ` });
};

// @desc Update a contact
// @route PUT/api/contacts/:id
// @access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id} ` });
};

// @desc Delete a contact
// @route DELETE api/contacts/:id
// @access public

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}`});
};

module.exports = {getContact , getContacts , deleteContact , updateContact , createContact }