import config from "./core/config";
import sequelize from "./core/sequelize";
import app from "./app";
import User from "./models/User";

sequelize.connect((db) => {

  app.listen(config.port, () => {
    console.log("--");
    console.log(config.app.title);
    console.log("Port:     " + config.port);
    console.log("Database: " + config.db.uri);
    console.log("--");
  });
});
