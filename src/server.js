const Hapi = require("@hapi/hapi");
const routes = require("./routes.js");
//const HapiCors = require("hapi-cors");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // await server.register({
  //   plugin: HapiCors,
  //   options: {
  //     origins: ["http://notesapp-v1.dicodingacademy.com"],
  //     methods: ["GET", "POST", "PUT", "DELETE"],
  //     headers: ["Accept", "Content-Type"],
  //   },
  // });

  //menambahkan route
  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
