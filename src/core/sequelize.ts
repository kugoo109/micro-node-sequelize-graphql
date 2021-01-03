import { Sequelize } from 'sequelize-typescript';
import path from 'path';
import config from './config';

export type SequelizeCBFunc = (db: Sequelize) => void

export default {
  connect: function (callback?: SequelizeCBFunc) {
    
    const db = new Sequelize(config.db.uri, {
      models: config.files.models.map(modelPath => path.resolve(modelPath)),
    });

    db.authenticate().then(() => {

      console.log('Connection has been established successfully.');
      if (callback) callback(db);
    }).catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  }
};