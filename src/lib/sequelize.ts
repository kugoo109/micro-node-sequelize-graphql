import config from "./config";
import { Sequelize } from 'sequelize-typescript';

export type SequelizeCBFunc = (db: Sequelize) => void

export default {
  connect: function (cb?: SequelizeCBFunc) {
    
    var db = new Sequelize(config.db.uri, {
      models: config.files.models
    });

    db.authenticate().then(() => {
      console.log('Connection has been established successfully.');
      if (cb) cb(db);
    }).catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  }
};