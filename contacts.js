const fs = require("fs/promises");
const path = require("path");
const pathContacts = path.join(__dirname, "db", "contacts.json");
const { v4 } = require("uuid");

async function listContacts() {
  const data = await fs.readFile(pathContacts);
  const allContacts = JSON.parse(data);
  return allContacts;
}

async function updateContact(id, data) {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { ...data, id };
  await fs.writeFile(pathContacts, JSON.stringify(contacts));
  return contacts[index];
}

async function getContactById(contactId) {
  const data = await listContacts();
  const result = data.find((item) => item.id === contactId);
  if (!result) {
    return null;
  }
  return result;
}

async function removeContact(contactId) {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const [removeContact] = allContacts.splice(index, 1);
  await fs.writeFile(pathContacts, JSON.stringify(allContacts));
  return removeContact;
}

async function addContact(name, email, phone) {
  const allContacts = await listContacts();
  const newContacts = { id: v4(), name, email, phone };
  allContacts.push(newContacts);
  await fs.writeFile(pathContacts, JSON.stringify(allContacts));
  return newContacts;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
