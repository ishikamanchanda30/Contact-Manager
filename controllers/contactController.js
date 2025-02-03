const asyncHandler = require("express-async-handler")
// @desc get all contacts
// @route GET api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Get all Contacts" });
});

// @desc Create Contact
// @route POST api/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
  console.log("The body is : ",req.body);
  const {name,email,contact} = req.body;
  if( !name || !email || !contact ) {
    res.status(400);
    throw new Error("All fields are mandatory!")
  }
  res.status(201).json({ message: "Create Contact" });
});

// @desc Get a contact
// @route GET /api/contacts/:id
// @access public
const getContact =asyncHandler( async (req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id} ` });
});

// @desc Update a contact
// @route PUT/api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id} ` });
});

// @desc Delete a contact
// @route DELETE api/contacts/:id
// @access public

const deleteContact = asyncHandler(async(req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}`});
});

module.exports = {getContact , getContacts , deleteContact , updateContact , createContact }