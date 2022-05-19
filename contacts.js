
// - Сделай импорт модулей `fs` и `path` для работы с файловой системой
// - Создай переменную `contactsPath` и запиши в нее путь к файле `contacts.json`. Для составления пути используй методы модуля `path`.
// - Добавь функции для работы с коллекцией контактов. В функциях используй модуль `fs` и его методы `readFile()` и `writeFile()`
// - Сделай экспорт созданных функций через `module.exports`


const fs = require("fs/promises")

fs.readFile("file.txt").then(data => console.log(data)).catch(error => console.log(error.message))


function listContacts() {
  // ...твой код
}

function listContacts() {
  // ...твой код
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}