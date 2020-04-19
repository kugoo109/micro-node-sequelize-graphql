import config from "./lib/config";
import sequelize from "./lib/sequelize";
import app from "./app";

sequelize.connect((db) => {

  app.listen(config.port, () => {
    console.log("--");
    console.log(config.app.title);
    console.log("Port:\t\t\t\t" + config.port);
    console.log("Database:\t\t\t\t" + config.db.uri);
    console.log("--");
  });
});
