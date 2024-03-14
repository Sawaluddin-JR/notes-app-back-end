const { addNoteHandler, getAllNotesHandler } = require("./handler.js");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
];

module.exports = routes;
