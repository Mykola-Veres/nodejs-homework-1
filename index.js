const fs = require("fs/promises");
const contactsOperation = require("./contacts");
const { program } = require("commander");

const invokeContacts = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsOperation.listContacts();
      console.table(allContacts);
      break;
    case "get":
      const contactsById = await contactsOperation.getContactById(id);
      if (!contactsById) {
        throw new Error(`Contacts by id: ${id} not found`);
      }
      console.log(contactsById);
      break;
    case "add":
      const addContact = await contactsOperation.addContact(name, email, phone);
      console.log(addContact);
      break;
    case "update":
      const updateContactById = await contactsOperation.updateContact(id, data);
      if (!updateContactById) {
        throw new Error(`Contacts by id: ${id} not found`);
      }
      console.log(updateContactById);
    case "remove":
      const removeContact = await contactsOperation.removeContact(id);
      console.log(removeContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action <type>", "contact operation")
  .option("-i, --id <type>", "contact id")
  .option("-n, --name <type>", "contact name")
  .option("-e, --email <type>", "contact email")
  .option("-p, --phone <type>", "contact phone");

program.parse(process.argv);
const options = program.opts();

invokeContacts(options);
