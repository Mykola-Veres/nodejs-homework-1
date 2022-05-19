const data = new Date();
console.log(data.getFullYear());


const fs = require("fs/promises")

async function fileOperation(filePath, action="read", data="") {
switch(action){
  case "read":
    const text = await fs.readFile(filePath, "utf8")
    console.log(text)
    break
  case "add":
    const result = await fs.appendFile(filePath, data)
    console.log(result)
    break
  case "replase":
    const res = await fs.writeFile(filePath, data)
    console.log(res)
    break
  default:
    console.log("unknown")
  }}
fileOperation("file.txt")
fileOperation("file.txt", "add", "\ngammy gammy bear")
fileOperation("file.txt", "replase", "\nAAAAAAAAAAAaaaaaa")
// fs.readFile("file.txt", "utf8").then(data => {
//   console.log(data)
  // const text = data.toString()
  // console.log(text)
// }  
//   ).catch(error => console.log(error.message))