const grpc = require("grpc");
const actions = require("./actions");

const notesProto = grpc.load(process.cwd() + "/protofiles/notes.proto");

const notes = [
  { id: "1", title: "Note 1", content: "Content 1" },
  { id: "2", title: "Note 2", content: "Content 2" }
];

const server = new grpc.Server();
server.addService(notesProto.NoteService.service, {
  ...actions
});

server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure());
console.log("Server running at http://127.0.0.1:50051");
server.start();
