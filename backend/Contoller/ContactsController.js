const ContactUsMessages = require("../models/ContactsUs");


const getContactsUsMessages = async (req, res) => {
    try {
      const result = await ContactUsMessages.findAll();
      if (result != null) {
        return res.json(result);
      }
    } catch (err) {
      return res.send("Messages not found");
    }
  };
  
  const addContactUsMessage = async (req, res) => {
    let newMessage = req.body;
    let result = await ContactUsMessages.create(newMessage);
    return res.json(result);
  };

  module.exports = {
    getContactsUsMessages,
    addContactUsMessage
}