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

  const deleteContactUsMessage = async (req, res) => {
    let id = req.params.id;
    const result = await ContactUsMessages.findAll({ where: { id: id } });
    if (result != null) {
      await ContactUsMessages.destroy({ where: { id: id } });
      return res.json(result);
    }
    return res.send("Message not found");
  };

  module.exports = {
    getContactsUsMessages,
    addContactUsMessage,
    deleteContactUsMessage,
}