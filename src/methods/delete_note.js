const client = require("../client");

client.delete({ id: "1" }, (error, _) => {
  if (!error) {
    console.log(`The note with id ${id} was deleted`);
  } else {
    console.error(error);
  }
});
